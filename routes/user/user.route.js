import { Router } from "express";
import {
  getLoginUserDetails,
  loginController,
  logoutController,
  refreshToken,
  registerUser,
  removeImgFromCloudinary,
  resendOtp,
  updateUserDetails,
  userImageController,
  verifyEmailController,
} from "../../controllers/user.controller.js";
import auth from "../../middlewares/auth/userAuth.js";
import upload from "../../middlewares/multer.js";
import PasswordRouter from "./password.route.js";
import { getCategories } from "../../controllers/category.controller.js";
import cartRouter from "./cart.route.js";
import wishListRouter from "./wishList.route.js";
import { signupValidation } from "../../middlewares/validation/validationSchamas.js";
import { validationErrorHandle } from "../../middlewares/validation/validationHandle.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";

const userRouter = Router();

userRouter.use("/password", PasswordRouter);
userRouter.use("/cart", cartRouter);
userRouter.use("/wishList", wishListRouter);

userRouter.post("/register", signupValidation, validationErrorHandle, asyncHandler(registerUser));
userRouter.post("/verify", asyncHandler(verifyEmailController));
userRouter.post("/resend",resendOtp)
userRouter.post("/login", asyncHandler(loginController));
userRouter.get("/logout", auth, asyncHandler(logoutController));
userRouter.put("/imageUpload", auth, upload.single("image"), asyncHandler(userImageController));
userRouter.delete("/deleteImage", auth, asyncHandler(removeImgFromCloudinary));
userRouter.put("/update/:id", auth, asyncHandler(updateUserDetails));
userRouter.post("/refresh-toke", asyncHandler(refreshToken));
userRouter.get("/userDetails", auth, asyncHandler(getLoginUserDetails));
userRouter.get("/categories", auth, asyncHandler(getCategories));

export default userRouter;
