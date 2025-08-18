import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFunc from "../utils/sendEmail.js";
import verifyMailTemplate from "../utils/verifyMailTemplete.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRETE_KEY,
  secure: true,
});

export const registerUserService = async ({ name, email, password }) => {
  let user = await userModel.findOne({ email: email });
  if (user) {
    return res.json({
      message: "User already exist in this email Id",
      error: true,
      success: false,
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  user = new userModel({
    email: email,
    password: hashedPassword,
    name: name,
    otp: otp,
    otp_expiry: Date.now() + 600000,
  });
  user.save();
  await sendEmailFunc({
    sendTo: email,
    subject: "Verification mail from shopping cart app",
    text: `Your OTP is ${otp}`,
    html: verifyMailTemplate(name, otp),
  });
  const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_KEY);

  return { token };
};

export const verifyEmailService = async ({ email, otp }) => {
  let user = await userModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({
      message: "User not found in this email",
      error: true,
      success: false,
    });
  }
  const isCodeValid = user.otp == otp;
  const isNotExpired = user.otp_expiry > new Date();
  if (!isCodeValid) {
    res.status(400).json({ success: false, error: true, message: "Otp is invalid" });
  } else if (!isNotExpired) {
    res.status(400).json({ success: false, error: true, message: "Otp expired" });
  }
  user.otp = null;
  user.verify_email = true;
  user.otp_expiry = null;
  await user.save();
  return true;
};

export const userLoginService = async ({ email, password }) => {
  const user = await userModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({
      success: "false",
      error: "true",
      message: "Invalid email address",
    });
  }
  if (user.status == "Blocked") {
    return res.status(400).json({
      success: false,
      error: true,
      message: "You are blocked, contact admin",
    });
  }
  if (!user.verify_email) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Please verify your email",
    });
  }

  const checkPass = await bcrypt.compare(password, user.password);
  if (!checkPass) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Your Password is incorrect",
    });
  }
  const accessToken = await generateAccessToken(user._id);
  const refreshToken = await generateRefreshToken(user.id);
  await userModel.findByIdAndUpdate(
    { _id: user?.id },
    {
      last_login_date: new Date(),
    }
  );

  return { accessToken, refreshToken };
};

export const userImageUploadService = async (userId, image) => {
  const user = await userModel.findOne({ _id: userId });
  const imgUrl = user.image;
  const imageName = imgUrl.split("/").pop().split(".")[0];
  let imageUrl = "";
  await cloudinary.uploader.destroy(imageName);

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: false,
  };
  await cloudinary.uploader.upload(image.path, options, function (error, result) {
    imageUrl = result.secure_url;
    fs.unlinkSync(`uploads/${image.filename}`);
    console.log(image.filename);
  });

  user.image = imageUrl;

  await user.save();
  return { _id: userId, image: user.image };
};

export const removeImgFromCloudinaryService = async (imgUrl) => {
  const imageName = imgUrl.split("/").pop().split(".")[0];

  const del = await cloudinary.uploader.destroy(imageName);
  return del;
};

export const updateUserDetailsService = async () => {
  const user = await userModel.findById(userId, { name, email, mobile, password });
  let newOtp = "",
    hashedPassword = "";
  if (!user) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "user doesn't exist",
    });
  }
  if (email !== user.email) {
    newOtp = Math.floor(100000 + Math.random() * 900000).toString();
  }
  if (password) {
    let salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
  } else {
    hashedPassword = user.password;
  }

  const updatedUser = await userModel.findByIdAndUpdate(
    userId,
    {
      name: name,
      email: email,
      mobile: mobile,
      verify_email: email !== user.email ? false : true,
      password: hashedPassword,
      otp: newOtp !== "" ? newOtp : null,
      otp_expiry: newOtp !== "" ? Date.now() + 600000 : "",
    },
    { new: true }
  );

  if (email !== user.email) {
    await sendEmailFunc({
      sendTo: email,
      subject: "Verification mail from shopping cart app",
      text: `Your OTP is ${newOtp}`,
      html: verifyMailTemplate(name, newOtp),
    });
  }
  return updatedUser;
};

export const forgotPasswordServices = async (email) => {
  const user = await userModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "user doesn't exist",
    });
  }
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = Date.now() + 600000;
  user.otp = otp;
  user.otp_expiry = expiry;
  await user.save();
  await sendEmailFunc({
    sendTo: email,
    subject: "Verification mail from shopping cart app",
    text: `Your OTP is ${otp}`,
    html: verifyMailTemplate(user?.name, otp),
  });
};

export const verifyForgotPasswordOtpService = async (email, otp) => {
  const user = await userModel.findOne({ email: email });
  if (otp !== user.otp) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "incorrect OTP",
    });
  }
  if (user.otp_expiry < new Date()) {
    res.status(400).json({
      success: false,
      error: true,
      message: "Otp expired",
    });
  }
  user.otp = "";
  user.otp_expiry = "";
  await user.save();
};

export const resetPasswordService = async (email, newPassword) => {
  const user = await userModel.findOne({ email: email });
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  user.password = hashedPassword;
  await user.save();
};

export const refreshTokenService = async (token) => {
  const verifyToken = await jwt.verify(token, process.env.JWT_REFRESH_KEY);
  if (!verifyToken) {
    return res.status(401).json({
      message: "token is expired",
      error: true,
      success: false,
    });
  }
  const userId = verifyToken?.id;
  const newAccessToken = await generateAccessToken(userId);
  const cookieOption = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.cookie("accessToken", newAccessToken, cookieOption);
  return newAccessToken;
};

export const getLoginUserDetailsService = async (userId) => {
  const user = await userModel.findById(userId);
  return user;
};
