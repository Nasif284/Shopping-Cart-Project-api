import { Router } from "express";
import {
  getLoginUserDetails,
  loginController,
  logoutController,
  refreshToken,
  registerUser,
  removeImgFromCloudinary,
  updateUserDetails,
  userImageController,
  verifyEmailController,
} from "../../controllers/user.controller.js";
import auth from "../../middlewares/auth/userAuth.js";
import upload from "../../middlewares/multer.js";
import PasswordRouter from "./password.route.js";
import { getCategories } from "../../controllers/category.controller.js";

const userRouter = Router();

userRouter.use("/password", PasswordRouter);

userRouter.post("/register", registerUser);
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginController);
userRouter.get("/logout", auth, logoutController);
userRouter.put("/imageUpload", auth, upload.single("image"), userImageController);
userRouter.delete("/deleteImage", auth, removeImgFromCloudinary);
userRouter.put("/update/:id", auth, updateUserDetails);
userRouter.post("/refresh-toke", refreshToken);
userRouter.get("/userDetails", auth, getLoginUserDetails);
userRouter.get("/categories", auth, getCategories);

export default userRouter;
