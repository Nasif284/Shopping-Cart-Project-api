import AppError from "../middlewares/Error/appError.js";
import {
  addToWishListService,
  deleteFromWishListService,
  getWIshListItemsService,
} from "../services/wishlist.service.js";
import { STATUS_CODES } from "../utils/statusCodes.js";

export const addToWishList = async (req, res) => {
  const userId = req.userId;
  const id = req.body.id;
  const newItem = await addToWishListService(id, userId);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    newItem,
  });
};
export const getWishListItems = async (req, res) => {
  const userId = req.userId;
  const wishListItems = await getWIshListItemsService(userId);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    wishListItems,
  });
};
export const deleteFromWishList = async (req, res) => {
  const id = req.body.id;
  if (!id) {
    throw new AppError("Please provide wishlist item ID", STATUS_CODES.BAD_REQUEST);
  }
  const deleted = await deleteFromWishListService(id);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    message: "item deleted from list",
    deleted,
  });
};
