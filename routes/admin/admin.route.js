import { Router } from "express";
import categoryRouter from "./category.route.js";
import productsRouter from "./product.route.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";
import adminAuth from "../../middlewares/auth/adminAuth.js";
import {
  adminLoginController,
  adminLogoutController,
  authAdminController,
  refreshToken,
} from "../../controllers/admin.controller.js";
import usersRouter from "./users.route.js";
import sizeRouter from "./size.route.js";

const adminRouter = Router();
adminRouter.use("/category", categoryRouter);
adminRouter.use("/products", productsRouter);
adminRouter.use("/users", usersRouter);
adminRouter.use("/size", sizeRouter);

adminRouter.post("/login", asyncHandler(adminLoginController));
adminRouter.get("/logout",adminAuth,asyncHandler(adminLogoutController))
adminRouter.get("/auth", adminAuth, asyncHandler(authAdminController));
adminRouter.get("/refresh", asyncHandler(refreshToken));

export default adminRouter;
