import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "please provide a valid email"],
    },
    password: {
      type: String,
    },
    image: {
      type: String,
      default: "",
    },
    mobile: {
      type: Number,
      default: null,
    },
    last_login_date: {
      type: Date,
      default: "",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    refresh_token: {
      type: String,
      default: "",
    },
    googleId: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model("User", userSchema);
export default userModel;
