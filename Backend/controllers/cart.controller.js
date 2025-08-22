import cartModel from "../models/cart.model.js";

export const addToCartController =async (req, res) => {
    try {
        const userId = req.userId;
        const productId = req.body.productId;

        const isExist = await cartModel.findOne({ userId: userId, productId: productId })
        if (isExist) {
            return res.status(400).json({
               message:"product already exist in cart"
           })
        }
        const cartItem = new cartModel({
            userId,
            productId,
            quantity:1
        })
        await cartItem.save();
        res.status(200).json({
            success: true,
            error: false,
            message:"Item added to cart"
        })
        
    }catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export const getCartItems =async(req, res) => {
    try {
        const userId = req.userId;
        const cartItems = await cartModel.find({ userId }).populate("productId")
        if (cartItems.length === 0) {
            return res.status(400).json({
                error: true,
                success: false,
                message:"there is no items in cart"
            })
        }
        return res.status(200).json({
            success: true,
            error: false,
            cartItems
        })
    } catch (error) {
      return res.status(500).json({
        message: error.message || error,
        error: true,
        success: false,
      });
    }
}

export const updateCartQuantity =async (req, res) => {
    try {
        const { id, qty } = req.body
        if(!id || !qty){
            return res.status(400).json({
                message:"provide id and quantity"
            })
        }
        const cart = await cartModel.findOneAndUpdate({ _id: id }, { quantity: qty }, { new: true })
        if (!cart) {
            throw new Error("cart did not updated")
        }
        return res.status(200).json({
            success: true,
            error: false,
            updated: cart,
            message:"cart updated"
        })

    } catch (error) {
      return res.status(500).json({
        message: error.message || error,
        error: true,
        success: false,
      });
    }
}

export const deleteCartItem =async (req, res) => {
    try {
        const id = req.body.id
        const deletedItem = await cartModel.findOneAndDelete({ _id: id })
        if (!deletedItem) {
            throw new Error ("item did not deleted")
        }
        return res.status(200).json({
            success: true,
            error: false,
            message: "item deleted",
            deletedItem
        })
    } catch (error) {
      return res.status(500).json({
        message: error.message || error,
        error: true,
        success: false,
      });
    }
}