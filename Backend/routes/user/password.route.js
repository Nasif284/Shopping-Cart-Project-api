import { Router } from "express";
import {
  forgotPassword,
  resetPassword,
  verifyForgotPasswordOtp,
} from "../../controllers/user.controller.js";
const PasswordRouter = Router();

PasswordRouter.post("/password/forgot", forgotPassword);
PasswordRouter.post("/password/forgot/verify", verifyForgotPasswordOtp);
PasswordRouter.put("/password/reset", resetPassword);

export default PasswordRouter;
