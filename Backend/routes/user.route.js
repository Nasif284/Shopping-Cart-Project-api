import { Router } from "express";
import { forgotPassword, getLoginUserDetails, loginController, logoutController, refreshToken, registerUser, removeImgFromCloudinary, resetPassword, updateUserDetails, userImageController, verifyEmailController, verifyForgotPasswordOtp } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const userRouter = Router();
userRouter.post('/register',registerUser)
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginController);
userRouter.get("/logout", auth, logoutController);
userRouter.put("/imageUpload", auth, upload.array('image'), userImageController);
userRouter.delete('/deleteImage', auth, removeImgFromCloudinary)
userRouter.put("/update/:id", auth, updateUserDetails);
userRouter.post("/forgot/password", forgotPassword);
userRouter.post("/forgot/password/verify", verifyForgotPasswordOtp);
userRouter.put("/reset/password", resetPassword);
userRouter.post('/refresh-toke', refreshToken)
userRouter.get("/userDetails", auth,getLoginUserDetails);
export default userRouter