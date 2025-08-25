import { Router } from "express";
import {
  forgotPassword,
  resetPassword,
  verifyForgotPasswordOtp,
} from "../../controllers/user.controller.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";
const PasswordRouter = Router();

PasswordRouter.post("/forgot", asyncHandler(forgotPassword));
PasswordRouter.post("/forgot/verify", asyncHandler(verifyForgotPasswordOtp));
PasswordRouter.put("/reset", asyncHandler(resetPassword));

export default PasswordRouter;
