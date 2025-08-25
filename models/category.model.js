import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
    parentCatName: {
      type: String,
    },
    parentId: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      default: null,
    },
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("Category", categorySchema);
export default categoryModel;
