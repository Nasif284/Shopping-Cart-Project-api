import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const WishListModel = mongoose.model("WishList", wishListSchema);

export default WishListModel;
