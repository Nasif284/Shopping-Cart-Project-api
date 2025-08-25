import { Router } from "express";
import {
  addProductsController,
  deleteProductController,
  getAllFeaturedProductsController,
  getAllProductsController,
  getProductById,
} from "../../controllers/product.controller.js";
import upload from "../../middlewares/multer.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";
const productsRouter = Router();
productsRouter.get("/", asyncHandler(getAllProductsController));
productsRouter.get("/featured", asyncHandler(getAllFeaturedProductsController));
productsRouter.get("/:id", asyncHandler(getProductById));
productsRouter.delete("/:id", asyncHandler(deleteProductController));
productsRouter.post("/", upload.any(), asyncHandler(addProductsController));

export default productsRouter;
