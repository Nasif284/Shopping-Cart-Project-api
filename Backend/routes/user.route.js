import { Router } from "express";
import { loginController, logoutController, registerUser, removeImgFromCloudinary, updateUserDetails, userImageController, verifyEmailController } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const userRouter = Router();
userRouter.post('/register',registerUser)
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginController);
userRouter.get("/logout", auth, logoutController);
userRouter.put("/imageUpload", auth, upload.array('image'), userImageController);
userRouter.delete('/deleteImage', auth, removeImgFromCloudinary)
userRouter.put("/update/:id", auth,updateUserDetails );
export default userRouter