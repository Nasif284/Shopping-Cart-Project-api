import AppError from "../middlewares/Error/appError.js";
import {
  authMeService,
  chatService,
  facebookAuthService,
  forgotPasswordServices,
  getLoginUserDetailsService,
  googleAuthService,
  refreshTokenService,
  registerUserService,
  removeImgFromCloudinaryService,
  resendOtpService,
  resetPasswordService,
  userImageUploadService,
  userLoginService,
  verifyEmailService,
} from "../services/user.service.js";
import { STATUS_CODES } from "../utils/statusCodes.js";

export async function registerUser(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new AppError("Provide email, name, and password", STATUS_CODES.BAD_REQUEST);
  }
  const user = await registerUserService({ name, email, password });
  return res.status(STATUS_CODES.OK).json({
    success: true,
    message: "User registered successfully , please verify your email",
    user,
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
  const { accessToken, refreshToken, user } = await userLoginService({ email, password });

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
    user,
  });
};

export const googleAuth = async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new AppError("Google authentication failed", STATUS_CODES.NOT_FOUND);
  }
  const { accessToken, refreshToken } = await googleAuthService(user);
  const isProduction = process.env.NODE_ENV === "production";
  const cookieOption = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  };

  res.cookie("accessToken", accessToken, cookieOption);
  res.cookie("refreshToken", refreshToken, cookieOption);
  return res.redirect(process.env.FRONTEND_URL + "/");
};
export const facebookAuth = async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new AppError("Facebook authentication failed", STATUS_CODES.NOT_FOUND);
  }
  const { accessToken, refreshToken } = await facebookAuthService(user);

  const isProduction = process.env.NODE_ENV === "production";
  const cookieOption = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  };

  res.cookie("accessToken", accessToken, cookieOption);
  res.cookie("refreshToken", refreshToken, cookieOption);

  return res.redirect(process.env.FRONTEND_URL + "/");
};



export const logoutController = async (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";
  const cookieOption = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  };
  res.clearCookie("accessToken", cookieOption);
  res.clearCookie("refreshToken", cookieOption);
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


export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new AppError("Please enter email", STATUS_CODES.BAD_REQUEST);
  }
  await forgotPasswordServices(email);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    message: "OTP send to your email",
  });
};

export const resetPassword = async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;
  console.log(email, newPassword, confirmPassword);
  if (!email || !newPassword || !confirmPassword) {
    throw new AppError("All fields are required", STATUS_CODES.BAD_REQUEST);
  }
  if (newPassword !== confirmPassword) {
    throw new AppError(
      "new password and confirm password does not match",
      STATUS_CODES.BAD_REQUEST
    );
  }
  await resetPasswordService(email, newPassword);
  return res.status(STATUS_CODES.OK).json({
    message: "password updated successfully",
    success: true,
    error: false,
  });
};

export const refreshToken = async (req, res) => {
  const token = req.cookies.refreshToken 
  if (!token) {
    throw new AppError("Please provide token", STATUS_CODES.UNAUTHORIZED);
  }
  const {newAccessToken,refreshToken} = await refreshTokenService(token);
  const isProduction = process.env.NODE_ENV === "production";
  const cookieOption = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  };
  res.cookie("accessToken", newAccessToken, cookieOption);
  res.cookie("refreshToken", refreshToken, cookieOption);
  return res.status(STATUS_CODES.OK).json({
    message: "new access token assigned",
    success: true,
    error: false,
    data: {
      accessToken: newAccessToken,
      refreshToken
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

export const authMe = async (req, res) => {
  const userId = req.userId;
  const user = await authMeService(userId);
  res.status(STATUS_CODES.OK).json({ user });
};

export const chatController = async (req, res) => {
  const userId= req?.userId
   const reply = await chatService(req.body,userId)
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    reply
  });
}
