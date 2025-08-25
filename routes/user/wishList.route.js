import { Router } from "express";
import {
  addToWishList,
  deleteFromWishList,
  getWishListItems,
} from "../../controllers/wishList.controller.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";

const wishListRouter = Router();

wishListRouter.get("/", asyncHandler(getWishListItems));
wishListRouter.delete("/", asyncHandler(deleteFromWishList));
wishListRouter.post("/", asyncHandler(addToWishList));

export default wishListRouter;
