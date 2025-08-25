import AppError from "../middlewares/Error/appError.js";
import cartModel from "../models/cart.model.js";
import { STATUS_CODES } from "../utils/statusCodes.js";

export const addToCartService = async (userId, productId) => {
  const isExist = await cartModel.findOne({ userId: userId, productId: productId });
  if (isExist) {
    throw new AppError("Product already exists in cart", STATUS_CODES.BAD_REQUEST);
  }
  const cartItem = new cartModel({
    userId,
    productId,
    quantity: 1,
  });
  await cartItem.save();
};

export const getCartItemsService = async (userId) => {
  const cartItems = await cartModel.find({ userId }).populate("productId");
  if (cartItems.length === 0) {
    throw new AppError("There are no items in cart", STATUS_CODES.NOT_FOUND);
  }
  return cartItems;
};

export const updateCartQuantityService = async (id, qty) => {
  const cart = await cartModel.findOneAndUpdate({ _id: id }, { quantity: qty }, { new: true });
  if (!cart) {
    throw new AppError("Cart item not found or update failed", STATUS_CODES.NOT_FOUND);
  }
  return cart;
};

export const deleteCartItemService = async (id) => {
  const deletedItem = await cartModel.findOneAndDelete({ _id: id });
  if (!deletedItem) {
    throw new AppError("Item not found or deletion failed", STATUS_CODES.NOT_FOUND);
  }
  return deletedItem;
};
