import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFunc from "../utils/sendEmail.js";
import verifyMailTemplate from "../utils/verifyMailTemplete.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";
import { v2 as cloudinary } from "cloudinary";
import fs, { access } from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRETE_KEY,
  secure: true,
});
export async function registerUser(req, res) {
  try {
    let user;
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "provide email, name, password",
        error: true,
        success: false,
      });
    }
    user = await userModel.findOne({ email: email });
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
    return res.status(200).json({
      success: true,
      message: "User registered successfully , please verify your email",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export const verifyEmailController = async (req, res) => {
  try {
    let user;
    const { email, otp } = req.body;
    user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        message: "User not found in this email",
        error: true,
        success: false,
      });
    }
    const isCodeValid = user.otp == otp;
    const isNotExpired = user.otp_expiry > new Date();
    if (isCodeValid && isNotExpired) {
      user.otp = null;
      user.verify_email = true;
      user.otp_expiry = null;
      await user.save();
      return res.status(200).json({
        success: true,
        error: false,
        message: "email verified successfully",
      });
    } else if (!isCodeValid) {
      res.status(400).json({ success: false, error: true, message: "Otp is invalid" });
    } else if (!isNotExpired) {
      res.status(400).json({ success: false, error: true, message: "Otp expired" });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
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
        success: "false",
        error: "true",
        message: "You are blocked, contact admin",
      });
    }
    if (user.verify_email == false) {
      return res.status(400).json({
        success: "false",
        error: "true",
        message: "Please verify your email",
      });
    }

    const checkPass = await bcrypt.compare(password, user.password);
    if (!checkPass) {
      return res.status(400).json({
        success: "false",
        error: "true",
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
    const cookieOption = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    res.cookie("accessToken", accessToken, cookieOption);
    res.cookie("refreshToken", refreshToken, cookieOption);
    return res.json({
      message: "login Successfully",
      error: false,
      success: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const logoutController = async (req, res) => {
  try {
    const userId = req.userId;
    const cookieOption = {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    };
    res.clearCookie("accessToken", cookieOption);
    res.clearCookie("refreshToken", cookieOption);
    await userModel.findByIdAndUpdate(
      { _id: userId },
      {
        refresh_token: "",
      }
    );
    return res.status(200).json({
      success: true,
      error: false,
      message: "User logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

var imageArr = [];
export const userImageController = async (req, res) => {
  try {
    const userId = req.userId;
    const image = req.files;
    const user = await userModel.findOne({ _id: userId });

    const imgUrl = user.image;
    const urlArr = imgUrl.split("/");
    const img = urlArr[urlArr.length - 1];
    const imageName = img.split(".")[0];
    await cloudinary.uploader.destroy(imageName);

    for (let i = 0; i < image?.length; i++) {
      const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: false,
      };
      const img = await cloudinary.uploader.upload(image[i].path, options, function (error, result) {
        imageArr.push(result.secure_url);
        fs.unlinkSync(`uploads/${image[i].filename}`);
        console.log(image[i].filename);
      });
    }
    user.image = imageArr[0];
    await user.save();
    return res.status(200).json({
      _id: userId,
      image: imageArr[0],
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const removeImgFromCloudinary = async (req, res) => {
  const imgUrl = req.query.img;
  const urlArr = imgUrl.split("/");
  const image = urlArr[urlArr.length - 1];

  const imageName = image.split(".")[0];
  if (imageName) {
    const del = await cloudinary.uploader.destroy(imageName);
    if (del) {
      res.status(200).send(del);
    }
  }
};

export const updateUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, mobile, password } = req.body;
    const user = await userModel.findById(userId);
    let newOtp = "",
      hashedPassword = "";
    if (!user) {
      return res.status(400).json({
        success: "false",
        error: "true",
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

    return res.status(200).json({
      success: true,
      error: false,
      message: "user details updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: "false",
        error: "true",
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
    return res.status(200).json({
      success: true,
      error: false,
      message: "Check your email",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};

export const verifyForgotPasswordOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await userModel.findOne({ email: email });
    if (otp !== user.otp) {
      return res.status(400).json({
        success: "false",
        error: "true",
        message: "incorrect OTP",
      });
    }
    if (user.otp_expiry < new Date()) {
      res.status(400).json({
        success: "false",
        error: "true",
        message: "Otp expired",
      });
    }
    user.otp = "";
    user.otp_expiry = "";
    await user.save();
    return res.status(200).json({
      success: "true",
      error: "false",
      message: "Email verified successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword, confirmPassword } = req.body;
    if (!email || !newPassword || !confirmPassword) {
      res.status(400).json({
        message: "please provide all fields",
        success: "false",
        error: "true",
      });
    }
    if (newPassword !== confirmPassword) {
      res.status(400).json({
        message: "new password and confirm password does not match",
        success: "false",
        error: "true",
      });
    }
    const user = await userModel.findOne({ email: email });
    const salt =await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save()
    return res.status(200).json({
      message: "password updated successfully",
      success: "true",
      error:"false"
    })
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};

export const refreshToken = async(req, res) => {
  try {
    const token = req.cookies.refreshToken || req?.header?.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({
        message: "please provide token",
        error: true,
        success: false
      });
    }
    const verifyToken = await jwt.verify(token, process.env.JWT_REFRESH_KEY);
    if (!verifyToken) {
      return res.status(401).json({
        message: "token is expired",
        error: "true",
        success:"false"
      })
    }
    const userId = verifyToken?.id
    const newAccessToken = await generateAccessToken(userId)
      const cookieOption = {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      };
      res.cookie("accessToken", accessToken, cookieOption);
    return res.status(200).json({
      message: "new access token assigned",
      success: "true",
      error: "false",
      data: {
        accessToken:newAccessToken
      }
})
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
}

export const getLoginUserDetails = async (req, res) => {
  try {
    const userId = req.userId;
   const user= await userModel.findById(userId)
    return res.status(200).json({
      data: user,
      success: "true",
      error:"false"
})
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
}
