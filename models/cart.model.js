import mongoose from "mongoose";
const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      default: "1",
      min: "1",
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
const cartModel = mongoose.model("CartItem", cartSchema);
export default cartModel;
