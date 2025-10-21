import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"User"
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
      required: true,
    ref:"Product"
    },
    review: {
        type: String,
        default:""
    },
    rating: {
        type: Number,
        default: null
    }
},{timestamps:true});

const reviewModel = mongoose.model("Review", ReviewSchema)
export default reviewModel;