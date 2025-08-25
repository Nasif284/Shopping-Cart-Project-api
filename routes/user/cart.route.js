import { Router } from "express";
import {
  addToCartController,
  deleteCartItem,
  getCartItems,
  updateCartQuantity,
} from "../../controllers/cart.controller.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";

const cartRouter = Router();

cartRouter.post("/", asyncHandler(addToCartController));
cartRouter.get("/", asyncHandler(getCartItems));
cartRouter.put("/", asyncHandler(updateCartQuantity));
cartRouter.delete("/", asyncHandler(deleteCartItem));
export default cartRouter;
