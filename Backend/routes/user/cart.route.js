import { Router } from "express";
import { addToCartController, deleteCartItem, getCartItems, updateCartQuantity } from "../../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.post('/', addToCartController)
cartRouter.get("/", getCartItems);
cartRouter.put("/", updateCartQuantity)
cartRouter.delete("/", deleteCartItem);
export default cartRouter