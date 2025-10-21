import AppError from "../middlewares/Error/appError.js";
import cartModel from "../models/cart.mode.js";
import productModel from "../models/product.model.js";
import variantModel from "../models/variant.schema.js";
import wishlistModal from "../models/wishlist.model.js";
import { applyBestOffer } from "../utils/applyBestOffer.js";
import { STATUS_CODES } from "../utils/statusCodes.js";

export const addToCartService = async (userId, body) => {
  if (Array.isArray(body)) {
    const cart = await cartModel.find({ userId });
    let cartItem = [];
    for (let item of body) {
      const { product, variant, quantity } = item;
      const exists = cart.find(
        (c) =>
          c.product.toString() === product._id.toString() &&
          c.variant.toString() === variant._id.toString()
      );
      if (exists) continue;
      const newItem = await cartModel.create({
        userId,
        product: product._id,
        variant: variant._id,
        quantity,
      });
      cartItem.push(newItem);
     await wishlistModal.findOneAndDelete({ user: userId, product, variant });
  
    }
    return cartItem;
  } else {
    const { product, variant, quantity } = body;
    const Product = await productModel
      .findById(product)
      .populate("categoryId")
      .populate("subCategoryId")
      .populate("thirdSubCategoryId");
    const Variant = await variantModel.findById(variant);
    if (Variant.stock == 0) {
      throw new AppError("Out of stock");
    }
    if (Variant.stock < quantity) {
      throw new AppError("There is no enough products in the stock, decrease the quantity");
    }
    if (Variant.isUnlisted || Product.isUnlisted) {
      throw new AppError("This product is unlisted, can not add to cart");
    }
    if (
      Product.categoryId.isBlocked ||
      Product.subCategoryId.isBlocked ||
      Product.thirdSubCategoryId.isBlocked
    ) {
      throw new AppError("This product can not add to cart");
    }

    const cartItem = await cartModel.create({
      userId,
      product,
      variant,
      quantity,
    });
    await wishlistModal.findOneAndDelete({
      user: userId,
      product,
      variant,
    });
    return cartItem;
  }
};

export const removeFromCartService = async (id) => {
  const item = await cartModel.findByIdAndDelete(id);
  return item;
};

export const editItemCountService = async (id, mode) => {
  const item = await cartModel.findById(id).populate("variant");
  if (mode == "plus") {
    if (item.quantity + 1 > item.variant.stock) {
      throw new AppError(
        `Not allowed to add more than ${item.variant.stock} items for this product `,
        STATUS_CODES.BAD_REQUEST
      );
    }
    item.quantity = item.quantity + 1;
  } else if (mode == "minus") {
    item.quantity = item.quantity - 1;
  }
  await item.save();
  return item;
};

export const getCartItemsService = async (userId) => {
  const result = await cartModel
    .find({ userId })
    .populate({
      path: "product",
      populate: [
        { path: "categoryId", model: "Category" },
        { path: "subCategoryId", model: "Category" },
        { path: "thirdSubCategoryId", model: "Category" },
      ],
    })
    .populate("variant");
  const items =await Promise.all(
    result.map(async (item) => {
      item.variant = await applyBestOffer(item.variant);
      return item;
    })
  ); 
  return items;
};

export const productValidationService = async (body) => {
  const { product, variant, quantity } = body;
  const Product = await productModel
    .findById(product)
    .populate("categoryId")
    .populate("subCategoryId")
    .populate("thirdSubCategoryId");
  const Variant = await variantModel.findById(variant);
  if (Variant.stock == 0) {
    throw new AppError("Out of stock");
  }
  if (Variant.stock < quantity) {
    throw new AppError("There is no enough products in the stock, decrease the quantity");
  }
  if (Variant.isUnlisted || Product.isUnlisted) {
    throw new AppError("This product is unlisted");
  }
  if (
    Product.categoryId.isBlocked ||
    Product.subCategoryId.isBlocked ||
    Product.thirdSubCategoryId.isBlocked
  ) {
    throw new AppError("This product is not available now");
  }
  return true;
};
