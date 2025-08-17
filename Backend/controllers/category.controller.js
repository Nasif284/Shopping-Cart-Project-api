import categoryModel from "../models/category.model.js";
import { v2 as cloudinary } from "cloudinary";
import { error } from "console";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRETE_KEY,
  secure: true,
});

export const createCategory = async (req, res) => {
  try {
    const { name, parentId, parentName } = req.body;
    let imageArr = [];

    const image = req.files;

    for (let i = 0; i < image?.length; i++) {
      const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: false,
      };
      await cloudinary.uploader.upload(image[i].path, options, function (error, result) {
        imageArr.push(result.secure_url);
        fs.unlinkSync(`uploads/${image[i].filename}`);
        console.log(image[i].filename);
      });
    }

    const category = new categoryModel({
      name: name,
      parentId: parentId,
      image: imageArr[0],
      parentCatName: parentName,
    });

    await category.save();
    return res.status(200).json({
      category: category,
      message: "category created",
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find()
        const categoryMap = {}
        categories.forEach((cat) => {
            categoryMap[cat._id]= {...cat._doc, children:[]}
        })
        const rootCategories = []
        categories.forEach((cat) => {
            if (cat.parentId) {
                categoryMap[cat.parentId].children.push(categoryMap[cat._id])
            } else {
                rootCategories.push(categoryMap[cat._id])
            }
        })
        return res.status(200).json({
            success: true,
            error: false,
            data: {
                rootCategories,
                categoryMap
            }
        })
    } catch (error) {
      return res.status(500).json({
        message: error.message || error,
        error: true,
        success: false,
      });
    }
}