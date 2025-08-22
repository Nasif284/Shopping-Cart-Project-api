import WishListModel from "../models/wishList.model.js";

export const addToWishList = async (req, res) => {
  try {
    const userId = req.userId;
    const id = req.body.id;
    const exist = await WishListModel.findOne({ productId: id, userId });
    if (exist) {
      throw new Error("product is already on wishlist");
    }
    const item = new WishListModel({
      productId: id,
      userId,
    });
    const newItem = await item.save();
    return res.status(200).json({
      success: true,
      error: false,
      newItem,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};
export const getWishListItems = async (req, res) => {
  try {
    const userId = req.userId;
    const wishListItems = await WishListModel.find({ userId });
    if (wishListItems.length == 0) {
      throw new Error("list is empty");
    }
    return res.status(200).json({
      success: true,
      error: false,
      wishListItems,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};
export const deleteFromWishList = async (req, res) => {
  try {
    const id = req.body.id;
    if (!id) {
      throw new Error("please provide id");
    }
    const deleted = await WishListModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "items did not deleted form list",
      });
    }
    return res.status(200).json({
      success: true,
      error: false,
      message: "item deleted from list",
      deleted,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};
