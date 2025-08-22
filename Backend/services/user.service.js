import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFunc from "../utils/sendEmail.js";
import verifyMailTemplate from "../utils/verifyMailTemplete.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { getSignedImageUrl } from "../utils/getImageFromCloudinary.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRETE_KEY,
  secure: true,
});

export const registerUserService = async ({ name, email, password }) => {
  let user = await userModel.findOne({ email: email });
  if (user) {
    throw new Error("user already exist in this email address");
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
    throw new Error("User not found in this email");
  }
  const isCodeValid = user.otp == otp;
  const isNotExpired = user.otp_expiry > new Date();
  if (!isCodeValid) {
    throw new Error("Invalid Otp");
  } else if (!isNotExpired) {
    throw new Error("IOtp expired");
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
    throw new Error("invalid email address");
  }
  if (user.status == "Blocked") {
    throw new Error("You are blocked, contact admin");
  }
  if (!user.verify_email) {
    throw new Error("Please verify your email");
  }

  const checkPass = await bcrypt.compare(password, user.password);
  if (!checkPass) {
    throw new Error("Your Password is incorrect");
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
  if (imgUrl) {
    const imageName = imgUrl.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(imageName, { type: "authenticated" });
  }

  const options = {
    folder: "users",
    type: "authenticated",
    use_filename: true,
    unique_filename: false,
    overwrite: false,
  };
  const result = await cloudinary.uploader.upload(image.path, options);
  fs.unlinkSync(`uploads/${image.filename}`);

  user.image = result.public_id;

  await user.save();
  return { _id: userId, image: user.image };
};
export const getUserProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const imageUrl = user.image ? getSignedImageUrl(user.image) : null;

    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: imageUrl,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const removeImgFromCloudinaryService = async (imgUrl) => {
  const imageName = imgUrl.split("/").pop().split(".")[0];

  const del = await cloudinary.uploader.destroy(imageName);
  return del;
};

export const updateUserDetailsService = async (userId, { name, email, mobile, password }) => {
  const user = await userModel.findById(userId);
  let newOtp = "",
    hashedPassword = "";
  if (!user) {
    throw new Error("user doesn't exist");
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
    throw new Error("user doesn't exist");
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
    throw new Error("incorrect OTP");
  }
  if (user.otp_expiry < new Date()) {
    throw new Error("Otp expired");
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
    throw new Error("token is expired");
  }
  const userId = verifyToken?.id;
  const newAccessToken = await generateAccessToken(userId);

  return newAccessToken;
};

export const getLoginUserDetailsService = async (userId) => {
  const user = await userModel.findById(userId);
  return user;
};
