import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  title: String,
  discountValue: {type:Number, required:true},
  scope: { type: String, enum: ["product", "category", "global"], required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  isActive:{type: Boolean, default:true},
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
});

const offerModel = mongoose.model("Offer", offerSchema);
export default offerModel;
