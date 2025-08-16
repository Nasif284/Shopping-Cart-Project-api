import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref:"products"
    },
    quantity: {
        type: mongoose.Schema.ObjectId,
        default:"1"
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref:"users"
    }
},{
    timestamps:true
})
const cartModel = mongoose.model("cartItems", cartSchema);
export default cartModel;