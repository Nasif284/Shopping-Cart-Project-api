import { Router } from "express";
import { addToWishList, deleteFromWishList, getWishListItems } from "../../controllers/wishList.controller.js";

const wishListRouter = Router();

wishListRouter.get("/",getWishListItems)
wishListRouter.delete("/",deleteFromWishList)
wishListRouter.post("/",addToWishList)

export default wishListRouter