import { Router } from "express";
import categoryRouter from "./category.route.js";
import productsRouter from "./product.route.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";

const adminRouter = Router();
adminRouter.use("/category", asyncHandler(categoryRouter));
adminRouter.use("/products", asyncHandler(productsRouter));
export default adminRouter;
