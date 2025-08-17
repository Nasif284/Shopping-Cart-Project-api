import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        default: ""
    },
    parentCatName: {
        type: String,
        default:null
    },
    parentId: {
        type: mongoose.Schema.ObjectId,
        ref: "category",
        default: null
    }
}, { timestamps: true })

const categoryModel = mongoose.model("category", categorySchema);
export default categoryModel;