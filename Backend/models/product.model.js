import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  color: { type: String, default: null },
  size: { type: String, default: null },
  weight: { type: String, default: null },
  price: { type: Number, required: true },
  oldPrice: { type: Number, default: 0 },
  stock: { type: Number, required: true, default: 0 },
  images: [{ type: String }],
});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    thirdSubCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    variants: [variantSchema],
    rating: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    reviewsCount: { type: Number, default: 0 },
    tags: [{ type: String }],
    dateCreated: { type: Date, default: Date.now },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
