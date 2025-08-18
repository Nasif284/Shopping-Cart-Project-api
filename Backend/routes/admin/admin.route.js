import { Router } from "express";
import categoryRouter from "./category.route.js";

const adminRouter = Router();
adminRouter.use("/category", categoryRouter);

export default adminRouter;
