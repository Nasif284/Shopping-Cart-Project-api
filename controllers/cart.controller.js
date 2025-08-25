import AppError from "../middlewares/Error/appError.js";
import {
  addToCartService,
  deleteCartItemService,
  updateCartQuantityService,
} from "../services/cart.service.js";
import { STATUS_CODES } from "../utils/statusCodes.js";

export const addToCartController = async (req, res) => {
  const userId = req.userId;
  const productId = req.body.productId;
  await addToCartService(userId, productId);
  res.status(STATUS_CODES.CREATED).json({
    success: true,
    error: false,
    message: "Item added to cart",
  });
};

export const getCartItems = async (req, res) => {
  const userId = req.userId;
  const cartItems = await getCartItems(userId);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    cartItems,
  });
};

export const updateCartQuantity = async (req, res) => {
  const { id, qty } = req.body;
  if (!id || !qty) {
    throw new AppError("Provide both id and quantity", STATUS_CODES.BAD_REQUEST);
  }
  const cart = await updateCartQuantityService(id, qty);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    updated: cart,
    message: "cart updated",
  });
};

export const deleteCartItem = async (req, res) => {
  const id = req.body.id;
  if (!id) {
    throw new AppError("Provide id", STATUS_CODES.BAD_REQUEST);
  }
  const deletedItem = await deleteCartItemService(id);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    message: "item deleted",
    deletedItem,
  });
};
