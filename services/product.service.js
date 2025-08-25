import { STATUS_CODES } from "http";
import AppError from "../middlewares/Error/appError.js";
import categoryModel from "../models/category.model.js";
import productModel from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import cartModel from "../models/cart.model.js";
import WishListModel from "../models/wishList.model.js";

export const addProductService = async (
  { name, description, brand, catName, subCatName, thirdCatName, discount, variants },
  files
) => {
  let parsedVariants = JSON.parse(variants);
  const options = { use_filename: true, unique_filename: false, overwrite: false };
  let productVariants = await Promise.all(
    parsedVariants.map(async (variant, i) => {
      let variantImages = [];
      if (files && files[`variant_${i}`]) {
        for (let file of files[`variant_${i}`]) {
          const result = await cloudinary.uploader.upload(file.path, options);
          variantImages.push(result.secure_url);
          fs.unlinkSync(file.path);
        }
      }
      return { ...variant, images: variantImages };
    })
  );
  let catId = await categoryModel.findOne({ name: catName });
  let subCatId = await categoryModel.findOne({ name: subCatName });
  let thirdCatId = await categoryModel.findOne({ name: thirdCatName });
  let newProduct = new productModel({
    name,
    description,
    brand,
    categoryId: catId?._id,
    subCatId: subCatId?._id,
    thirdSubCategoryId: thirdCatId?._id,
    discount,
    variants: productVariants,
  });
  const product = await newProduct.save();
  return product;
};


export const getAllProductsService = async (query,page,perPage) => {
  let filter = {};
  
    if (query.category) {
      const cat = await categoryModel.findOne({ name: query.category });
      if (cat) filter.categoryId = cat?._id;
    }
    if (query.subCategory) {
      const cat = await categoryModel.findOne({ name: query.subCategory });
      if (cat) filter.subCategoryId = cat?._id;
    }
    if (query.thirdCategory) {
      const cat = await categoryModel.findOne({ name: query.thirdCategory });
      if (cat) filter.thirdSubCategoryId = cat?._id;
    }
    if (query.rating) {
      filter.rating = query.rating;
    }
    if (query.minPrice || query.maxPrice) {
      filter["variants.price"] = {};
      if (query.minPrice) {
        filter["variants.price"].$gte = parseInt(query.minPrice);
      }
      if (query.maxPrice) {
        filter["variants.price"].$lte = parseInt(query.maxPrice);
      }
    }
    const totalPosts = await productModel.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / perPage);
    if (page > totalPages && totalPages > 0) {
      throw new AppError("Page not found", STATUS_CODES.BAD_REQUEST);
    }
  
    const products = await productModel
      .find(filter)
      .populate("categoryId")
      .skip((page - 1) * perPage)
      .limit(perPage)
    .exec();
  return {totalPages,products};
}

export const getAllFeaturedService = async() => {
    const products = await productModel.find({ isFeatured: true });
    if (products.length === 0) {
      throw new AppError("Featured products not found", STATUS_CODES.NOT_FOUND);
  }
  return products;
}

export const getProductByIdService = async(id) => {
    const product = await productModel.findById(id);
    if (!product) {
      throw new AppError("Product not found with this ID", STATUS_CODES.NOT_FOUND);
  }
  return product;
}

export const deleteProduct =async(id) => {
    const product = await productModel.findById(id);
  if (!product) {
    throw new AppError("Product not found", STATUS_CODES.NOT_FOUND);
  }
  if (product.variants && product.variants.length > 0) {
    for (let variant of product.variants) {
      if (variant.images) {
        for (let image of variant.images) {
          let url = image.split("/").pop().split(".")[0];
          await cloudinary.uploader.destroy(url);
        }
      }
    }
  }
  const existInCart = await cartModel.findOne({ productId: product._id });
  if (existInCart) {
    await cartModel.findOneAndDelete({ productId: product._id });
  }
  const existInWishList = await WishListModel.findOne({ productId: product._id });
  if (existInWishList) {
    await WishListModel.findOneAndDelete({ productId: product._id });
  }
  await productModel.findByIdAndDelete(id);
}

export const updateProductService = async(id,updates,files) => {
    const product = await productModel.findById(id);
  if (!product) {
    throw new AppError("Product not found", STATUS_CODES.NOT_FOUND);
  }
  const fieldsToUpdate = ["name", "description", "brand", "discount", "tags", "isFeatured"];
  fieldsToUpdate.forEach((field) => {
    if (updates[field] !== undefined) {
      product[field] = updates[field];
    }
  });
  if (updates["catName"]) {
    const cat = await categoryModel.findOne({ name: updates["catName"] });
    product.categoryId = cat?._id;
  }
  if (updates["SubCatName"]) {
    const cat = await categoryModel.findOne({ name: updates["SubCatName"] });
    product.subCategoryId = cat?._id;
  }
  if (updates["thirdCatName"]) {
    const cat = await categoryModel.findOne({ name: updates["thirdCatName"] });
    product.thirdSubCategoryId = cat?._id;
  }
  if (updates.variants && Array.isArray(updates.variants)) {
    updates.variants.forEach((variantData, index) => {
      if (product.variants[index]) {
        product.variants[index] = {
          ...product.variants[index]._doc,
          ...variantData,
        };
      } else {
        product.variants.push({
          ...variantData,
          images: [],
        });
      }
    });
  }
  for (let keys in files) {
    if (keys.startsWith("variants_")) {
      const index = parseInt(keys.split("_")[1]);
      const variant = product.variants[index];

      if (!variant) continue;
      if (variant.images && variant.images.length > 0) {
        for (let imgUrl of variant.images) {
          const publicId = imgUrl.split("/").pop().split(".")[0];
          await cloudinary.uploader.destroy(publicId);
        }
      }
      const imageArr = [];
      const options = { use_filename: true, unique_filename: false, overwrite: false };
      for (let file of files[keys]) {
        const uploaded = await cloudinary.uploader.upload(file.path, options);
        imageArr.push(uploaded.secure_url);
      }
      product.variants[index].images = imageArr;
    }
  }
  const updated = await product.save();
  return updated;
}