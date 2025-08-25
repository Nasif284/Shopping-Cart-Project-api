import mongoose from "mongoose";
const addressSchema = new mongoose.Schema(
  {
    address_line: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    pin_code: {
      type: String,
      required: true,
      match: /^[0-9]{5,6}$/,
    },
    mobile: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },
    status: {
      type: Boolean,
      default: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      default: "",
    },
    address_type: { type: String, enum: ["home", "work", "other"], default: "home" },
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const addressModel = mongoose.model("Address", addressSchema);
export default addressModel;
