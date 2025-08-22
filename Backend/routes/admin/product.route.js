import { Router } from "express";
import { addProductsController, deleteProductController, getAllFeaturedProductsController, getAllProductsController, getProductById } from "../../controllers/product.controller.js";
import upload from "../../middlewares/multer.js";
const productsRouter = Router();
productsRouter.get('/',getAllProductsController)
productsRouter.get("/featured", getAllFeaturedProductsController);
productsRouter.get('/:id', getProductById)
productsRouter.delete('/:id',deleteProductController)
productsRouter.post(
  "/",
  upload.any(),
  addProductsController
);

export default productsRouter;
    