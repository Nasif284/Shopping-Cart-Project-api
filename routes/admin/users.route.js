import { Router } from "express";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";
import { blockUserController, getUsers } from "../../controllers/userManagement.controller.js";
import adminAuth from "../../middlewares/auth/adminAuth.js";

const usersRouter = Router();

usersRouter.get("/", adminAuth, asyncHandler(getUsers));
usersRouter.post("/block/:id", adminAuth, asyncHandler(blockUserController));
export default usersRouter;
