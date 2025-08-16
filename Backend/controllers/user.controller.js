import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendEmailFunc from "../utils/sendEmail.js";
import verifyMailTemplate from "../utils/verifyMailTemplete.js";
import generateAccessToken from "../utils/generateAccessToken.js";
import generateRefreshToken from "../utils/generateRefreshToken.js";

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
    const otp = Math.floor(10000 + Math.random() * 900000).toString();
    user = new userModel({
      email: email,
      password: hashedPassword,
      name: name,
      otp: otp,
      otp_expiry: Date.now() + 60000,
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
    const isNotExpired = user.otp_expiry > Date.now();
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
    } else {
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
