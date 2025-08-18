import {
  forgotPasswordServices,
  getLoginUserDetailsService,
  refreshTokenService,
  registerUserService,
  removeImgFromCloudinaryService,
  resetPasswordService,
  updateUserDetailsService,
  userImageUploadService,
  userLoginService,
  verifyEmailService,
  verifyForgotPasswordOtpService,
} from "../services/user.service.js";

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "provide email, name, password",
        error: true,
        success: false,
      });
    }
    const { token } = await registerUserService({ name, email, password });
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
    const { email, otp } = req.body;
    await verifyEmailService({ email, otp });
    return res.status(200).json({
      success: true,
      error: false,
      message: "email verified successfully",
    });
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
    const { accessToken, refreshToken } = await userLoginService({ email, password });
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
    const cookieOptions = { httpOnly: true, secure: true, sameSite: "none" };
    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);
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

export const userImageController = async (req, res) => {
  try {
    const userId = req.userId;
    const image = req.file;
    const result = await userImageUploadService(userId, image);
    return res.status(200).json(result);
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
  const del = await removeImgFromCloudinaryService(imgUrl);
  return res.status(200).send(del);
};

export const updateUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = updateUserDetailsService(userId, req.body);
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
    await forgotPasswordServices(email);
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
    await verifyForgotPasswordOtpService(email, otp);
    return res.status(200).json({
      success: true,
      error: false,
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
        success: false,
        error: true,
      });
    }
    if (newPassword !== confirmPassword) {
      res.status(400).json({
        message: "new password and confirm password does not match",
        success: false,
        error: true,
      });
    }
    await resetPasswordService(email, newPassword);
    return res.status(200).json({
      message: "password updated successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refreshToken || req?.header?.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({
        message: "please provide token",
        error: true,
        success: false,
      });
    }
    const newAccessToken = await refreshTokenService(token);
    return res.status(200).json({
      message: "new access token assigned",
      success: true,
      error: false,
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};

export const getLoginUserDetails = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await getLoginUserDetailsService(userId);
    return res.status(200).json({
      data: user,
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};
