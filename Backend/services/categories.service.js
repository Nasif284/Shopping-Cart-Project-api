import categoryModel from "../models/category.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRETE_KEY,
  secure: true,
});

export const createCategoryService = async (image, { name, parentId, parentName }) => {
  let imageUrl = "";
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: false,
  };
  await cloudinary.uploader.upload(image.path, options, function (error, result) {
    imageUrl = result.secure_url;
    fs.unlinkSync(`uploads/${image.filename}`);
    console.log(image.filename);
  });

  const category = new categoryModel({
    name: name,
    parentId: parentId,
    image: imageUrl,
    parentCatName: parentName,
  });

  await category.save();
  return category;
};

export const getCategoriesService = async () => {
  const categories = await categoryModel.find();
  const categoryMap = {};
  categories.forEach((cat) => {
    categoryMap[cat._id] = { ...cat._doc, children: [] };
  });
  const rootCategories = [];
  categories.forEach((cat) => {
    if (cat.parentId) {
      categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
    } else {
      rootCategories.push(categoryMap[cat._id]);
    }
  });
  return { categoryMap, rootCategories };
};

export const getCategoryCountService = async () => {
  const categoryCount = await categoryModel.countDocuments({ parentId: undefined });
  return categoryCount;
};

export const getSubCategoryCount = async () => {
  const categories = await categoryModel.find();
  const subCatList = [];
  for (let cat of categories) {
    if (cat.parentId !== undefined) {
      subCatList.push(cat);
    }
  }
  const count = subCatList.length;
  return count;
};

export const getCategoryService = async (id) => {
  const category = await categoryModel.findById(id);
  return category;
};

export const removeCatImgFromCloudinaryService = async (catImage) => {
  const imageName = catImage.split("/").pop().split(".")[0];
  const del = await cloudinary.uploader.destroy(imageName);
  return del;
};

export const deleteCategoryService = async (id) => {
  const category = await categoryModel.findById(id);
  const catImage = category.image;
  if (catImage) {
    const imageName = catImage.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(imageName);
  }
  const subCategories = await categoryModel.find({
    parentId: id,
  });
  if (subCategories.length > 0) {
    for (let cat of subCategories) {
      const thirdSubCategory = await categoryModel.find({
        parentId: cat._id,
      });
      if (thirdSubCategory.length > 0) {
        for (let tCat of thirdSubCategory) {
          await categoryModel.findByIdAndDelete(tCat._id);
        }
      }
      await categoryModel.findByIdAndDelete(cat._id);
    }
  }

  await categoryModel.findByIdAndDelete(category._id);
};

export const updateCategoryService = async (id, image, { name, parentName, parentId }) => {
  const category = await categoryModel.findById(id);

  let imageUrl = "";
  if (image) {
    const catImage = category.image;
    const imageName = catImage.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(imageName);

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };
    await cloudinary.uploader.upload(image.path, options, function (error, result) {
      imageUrl = result.secure_url;
      fs.unlinkSync(`uploads/${image.filename}`);
    });
  }
  const updated = await categoryModel.findByIdAndUpdate(
    id,
    {
      name: name,
      image: imageUrl,
      parentId: parentId,
      parentCatName: parentName,
    },
    { new: true }
  );
  return updated;
};
