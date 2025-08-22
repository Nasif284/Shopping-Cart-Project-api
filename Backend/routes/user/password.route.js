import { Router } from "express";
import {
  forgotPassword,
  resetPassword,
  verifyForgotPasswordOtp,
} from "../../controllers/user.controller.js";
const PasswordRouter = Router();

PasswordRouter.post("/forgot", forgotPassword);
PasswordRouter.post("/forgot/verify", verifyForgotPasswordOtp);
PasswordRouter.put("/reset", resetPassword);

export default PasswordRouter;
