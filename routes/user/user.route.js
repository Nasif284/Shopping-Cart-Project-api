import { Router } from "express";
import {
  authMe,
  chatController,
  facebookAuth,
  getLoginUserDetails,
  googleAuth,
  loginController,
  logoutController,
  refreshToken,
  registerUser,
  removeImgFromCloudinary,
  resendOtp,
  userImageController,
  verifyEmailController,
} from "../../controllers/user.controller.js";
import upload from "../../middlewares/multer/multer.js"; 
import PasswordRouter from "./password.route.js";
import { getAllCategories } from "../../controllers/category.controller.js";
import {
  loginValidation,
  signupValidation,
} from "../../middlewares/validation/validationSchamas.js";
import { validationErrorHandle } from "../../middlewares/validation/validationHandle.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";
import userAuth from "../../middlewares/auth/UserAuth.js";
import passport from "passport";

const userRouter = Router();

userRouter.use("/password", PasswordRouter);

userRouter.post("/register", signupValidation, validationErrorHandle, asyncHandler(registerUser));
userRouter.post("/verify", asyncHandler(verifyEmailController));
userRouter.post("/resend", resendOtp);
userRouter.post("/login", loginValidation, validationErrorHandle, asyncHandler(loginController));
userRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
    prompt: "select_account",
  })
);
userRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.FRONTEND_URL}/login?error=server_error&message=${encodeURIComponent("Authentication failed, User Is Blocked")}`,
    session: false,
  }),
  googleAuth
);
userRouter.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["email", "public_profile"],
    failureRedirect: `${process.env.FRONTEND_URL}/login?error=server_error&message=${encodeURIComponent("Authentication failed, User Is Blocked")}`,
    session: false,
  })
);
userRouter.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: process.env.FRONTEND_URL + "/login",
    session: false,
  }),
  facebookAuth
);

userRouter.get("/logout", userAuth, asyncHandler(logoutController));
userRouter.put("/imageUpload", userAuth, upload.single("image"), asyncHandler(userImageController));
userRouter.delete("/deleteImage", userAuth, asyncHandler(removeImgFromCloudinary));
userRouter.get("/refresh", asyncHandler(refreshToken));
userRouter.get("/userDetails", userAuth, asyncHandler(getLoginUserDetails));
userRouter.get("/categories", userAuth, asyncHandler(getAllCategories));
userRouter.get("/auth", userAuth, asyncHandler(authMe));
userRouter.post("/chat",asyncHandler(chatController) )

export default userRouter;
