import { Router } from "express";
import { loginController, logoutController, registerUser, verifyEmailController } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";

const userRouter = Router();
userRouter.post('/register',registerUser)
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginController);
userRouter.get("/logout",auth, logoutController);
export default userRouter