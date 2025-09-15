import { Router } from "express";
import upload from "../../middlewares/multer/multer.js"; 
import {
  blockCategory,
  createCategory,
  getAllCategories,
  getCategoriesByLevel,
  updateCategory,
} from "../../controllers/category.controller.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";
import adminAuth from "../../middlewares/auth/adminAuth.js";

const categoryRouter = Router();

categoryRouter.post("/", upload.single("image"), asyncHandler(createCategory));
categoryRouter.get("/", asyncHandler(getAllCategories));
categoryRouter.get("/:level", asyncHandler(getCategoriesByLevel));
categoryRouter.patch("/edit/:id", upload.single("image"), asyncHandler(updateCategory));
categoryRouter.patch("/block/:id", adminAuth, asyncHandler(blockCategory));

export default categoryRouter;
