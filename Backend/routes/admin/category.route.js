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

const categoryRouter = Router();

categoryRouter.post("/create", upload.single("image"), createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategory);
categoryRouter.get("/count", getCategoryCount);
categoryRouter.get("/count/sub", getSubCategoryCount);
categoryRouter.delete("/delete/:id", deleteCategory);
categoryRouter.put("/edit/:id", upload.single("image"), updateCategory);

export default categoryRouter;
