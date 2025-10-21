import mongoose from "mongoose";

const homeSlidesSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    default: "",
  },
  banner: {
    type: String,
    required: true,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});

const homeSlidesModel = mongoose.model("HomeSlides", homeSlidesSchema);
export default homeSlidesModel;
