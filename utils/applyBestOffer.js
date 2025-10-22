import offerModel from "../models/offers.model.js"
import productModel from "../models/product.model.js"

export const applyBestOffer = async(variant) => {
    const product = await productModel.findById(variant.productId)
    const offers = await offerModel.find({
      isActive: true,
      $or: [
        { scope: "global", startDate: { $lte: new Date() }, expiryDate: { $gte: new Date() } },
        { scope: "product", product: product._id },
        {
          scope: "category",
          category: {
            $in: [product.categoryId, product.subCategoryId, product.thirdSubCategoryId],
          },
        },
      ],
    });
  if (!offers.length) {
     return variant;
  }
    const bestOffer = offers.reduce((max, offer) => 
       max.discountValue < offer.discountValue ? offer : max
    )
    const bestDiscount = Math.max(bestOffer.discountValue, variant.discount)
    const finalPrice = Math.round(variant.oldPrice - (variant.oldPrice*(bestDiscount/100)))
    variant.discount = bestDiscount;
    variant.price = finalPrice
    return variant
}