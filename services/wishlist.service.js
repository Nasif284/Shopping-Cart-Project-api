import AppError from "../middlewares/Error/appError.js";
import WishListModel from "../models/wishList.model.js";
import { STATUS_CODES } from "../utils/statusCodes.js";

export const addToWishListService = async (id, userId) => {
  const exist = await WishListModel.findOne({ productId: id, userId });
  if (!id) {
    throw new AppError("Product ID is required", STATUS_CODES.BAD_REQUEST);
  }
  if (exist) {
    throw new AppError("Product is already on wishlist", STATUS_CODES.CONFLICT);
  }
  const item = new WishListModel({
    productId: id,
    userId,
  });
  const newItem = await item.save();
  return newItem;
};

export const getWIshListItemsService = async (userId) => {
  const wishListItems = await WishListModel.find({ userId });
  if (wishListItems.length == 0) {
    throw new AppError("Wishlist is empty", STATUS_CODES.NOT_FOUND);
  }
  return wishListItems;
};

export const deleteFromWishListService = async (id) => {
  const deleted = await WishListModel.findByIdAndDelete(id);
  if (!deleted) {
    throw new AppError("Item not found in wishlist", STATUS_CODES.NOT_FOUND);
  }
  return deleted;
};
