import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  image: {
    type: String,
    default: "",
  },
  mobile: {
    type: Number,
    default: null,
  },
  verify_email: {
    type: Boolean,
    default: false,
  },
  last_login_date: {
    type: Date,
    default: "",
  },
  status: {
    type: String,
    enum: ["active", "inactive", "Blocked"],
    default: "active",
  },
  address: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "address",
    },
  ],
  cart: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "cart",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "orders",
    },
  ],
  otp: {
    type: String,
  },
  otp_expiry: {
    type: Date,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
    },
},{
      timestamps:true
  }); 
const userModel = mongoose.model("users", userSchema);
export default userModel;