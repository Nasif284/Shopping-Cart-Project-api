import { Router } from "express";
import upload from "../../middlewares/multer.js";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  getCategoryCount,
  getSubCategoryCount,
  updateCategory,
} from "../../controllers/category.controller.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";

const categoryRouter = Router();

categoryRouter.post("/create", upload.single("image"), asyncHandler(createCategory));
categoryRouter.get("/", asyncHandler(getCategories));
categoryRouter.get("/:id", asyncHandler(getCategory));
categoryRouter.get("/count", asyncHandler(getCategoryCount));
categoryRouter.get("/count/sub", asyncHandler(getSubCategoryCount));
categoryRouter.delete("/delete/:id", asyncHandler(deleteCategory));
categoryRouter.put("/edit/:id", upload.single("image"), asyncHandler(updateCategory));

export default categoryRouter;
