import AppError from "../middlewares/Error/appError.js";
import userModel from "../models/user.model.js";
import {
  forgotPasswordServices,
  getLoginUserDetailsService,
  refreshTokenService,
  registerUserService,
  removeImgFromCloudinaryService,
  resendOtpService,
  resetPasswordService,
  updateUserDetailsService,
  userImageUploadService,
  userLoginService,
  verifyEmailService,
  verifyForgotPasswordOtpService,
} from "../services/user.service.js";
import { STATUS_CODES } from "../utils/statusCodes.js";

export async function registerUser(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new AppError("Provide email, name, and password", STATUS_CODES.BAD_REQUEST);
  }
  const { token } = await registerUserService({ name, email, password });
  return res.status(STATUS_CODES.OK).json({
    success: true,
    message: "User registered successfully , please verify your email",
    token: token,
  });
}

export const verifyEmailController = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    throw new AppError("Provide email and otp", STATUS_CODES.BAD_REQUEST);
  }
  await verifyEmailService({ email, otp });
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    message: "email verified successfully",
  });
};
export const resendOtp = async (req, res) => {
  const { email } = req.body;
  await resendOtpService(email);
    return res.status(STATUS_CODES.OK).json({
      success: true,
      error: false,
      message: "OTP Resend successfully ",
    });
};
export const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new AppError("Email and password are required", STATUS_CODES.BAD_REQUEST);
  }
  const { accessToken, refreshToken } = await userLoginService({ email, password });

  const isProduction = process.env.NODE_ENV === "production";
  const cookieOption = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  };

  res.cookie("accessToken", accessToken, cookieOption);
  res.cookie("refreshToken", refreshToken, cookieOption);
  return res.status(STATUS_CODES.OK).json({
    message: "login Successfully",
    error: false,
    success: true,
    data: {
      accessToken,
      refreshToken,
    },
  });
};

export const logoutController = async (req, res) => {
  const cookieOptions = { httpOnly: true, secure: true, sameSite: "none" };
  res.clearCookie("accessToken", cookieOptions);
  res.clearCookie("refreshToken", cookieOptions);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    message: "User logged out successfully",
  });
};

export const userImageController = async (req, res) => {
  const userId = req.userId;
  const image = req.file;
  if (!image) {
    throw new AppError("Image is required", STATUS_CODES.BAD_REQUEST);
  }
  const result = await userImageUploadService(userId, image);
  return res.status(STATUS_CODES.OK).json(result);
};

export const removeImgFromCloudinary = async (req, res) => {
  const imgUrl = req.query.img;
  if (!imgUrl) {
    throw new AppError("Image URL is required", STATUS_CODES.BAD_REQUEST);
  }
  const del = await removeImgFromCloudinaryService(imgUrl);
  return res.status(STATUS_CODES.OK).send(del);
};

export const updateUserDetails = async (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    throw new AppError("User ID is required", STATUS_CODES.BAD_REQUEST);
  }
  const updatedUser = updateUserDetailsService(userId, req.body);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    message: "user details updated successfully",
    user: updatedUser,
  });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new AppError("Email is required", STATUS_CODES.BAD_REQUEST);
  }
  await forgotPasswordServices(email);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    message: "Check your email",
  });
};

export const verifyForgotPasswordOtp = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    throw new AppError("Email and OTP are required", STATUS_CODES.BAD_REQUEST);
  }
  await verifyForgotPasswordOtpService(email, otp);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    message: "Email verified successfully",
  });
};

export const resetPassword = async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;
  if (!email || !newPassword || !confirmPassword) {
    throw new AppError("All fields are required", STATUS_CODES.BAD_REQUEST);
  }
  if (!email || !newPassword || !confirmPassword) {
    res.status(STATUS_CODES.OK).json({
      message: "please provide all fields",
      success: false,
      error: true,
    });
  }
  if (newPassword !== confirmPassword) {
    res.status(STATUS_CODES.OK).json({
      message: "new password and confirm password does not match",
      success: false,
      error: true,
    });
  }
  await resetPasswordService(email, newPassword);
  return res.status(STATUS_CODES.OK).json({
    message: "password updated successfully",
    success: true,
    error: false,
  });
};

export const refreshToken = async (req, res) => {
  const token = req.cookies.refreshToken || req?.header?.authorization?.split(" ")[1];
  if (!token) {
    throw new AppError("Please provide token", STATUS_CODES.UNAUTHORIZED);
  }
  const newAccessToken = await refreshTokenService(token);
  const cookieOption = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.cookie("accessToken", newAccessToken, cookieOption);
  return res.status(STATUS_CODES.OK).json({
    message: "new access token assigned",
    success: true,
    error: false,
    data: {
      accessToken: newAccessToken,
    },
  });
};

export const getLoginUserDetails = async (req, res) => {
  const userId = req.userId;
  const user = await getLoginUserDetailsService(userId);
  return res.status(STATUS_CODES.OK).json({
    data: user,
    success: true,
    error: false,
  });
};
