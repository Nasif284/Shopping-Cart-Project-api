import categoryModel from "../models/category.model.js";
import productModel from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

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

export const getAllProductsService = async (page, perPage) => {
  const products = await productModel
    .find()
    .populate("categoryId")
    .skip((page - 1) * perPage)
    .limit(perPage)
    .exec();

  return products;
};

export const getAllProductsByCatNameService = async (page, perPage, catName) => {
  const category = await categoryModel.findOne({ name: catName });
  const products = await productModel
    .find({ categoryId: category._id })
    .populate("categoryId")
    .skip((page - 1) * perPage)
    .limit(perPage)
    .exec();
  return products;
};

export const getAllProductsBySubCatNameService = async (page, perPage, subCatName) => {
  const category = await categoryModel.findOne({ name: subCatName });
  const products = await productModel
    .find({ subCategoryId: category._id })
    .populate("categoryId")
    .skip((page - 1) * perPage)
    .limit(perPage)
    .exec();
  return products;
};

export const getAllProductsByThirdCatNameService = async (page, perPage, thirdCatName) => {
  const category = await categoryModel.findOne({ name: thirdCatName });
  const products = await productModel
    .find({ thirdSubCategoryId: category._id })
    .populate("categoryId")
    .skip((page - 1) * perPage)
    .limit(perPage)
    .exec();
  return products;
};