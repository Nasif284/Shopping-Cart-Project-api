import { Router } from "express";
import categoryRouter from "./category.route.js";
import productsRouter from "./product.route.js";

const adminRouter = Router();
adminRouter.use("/category", categoryRouter);
adminRouter.use("/products", productsRouter);
export default adminRouter;
