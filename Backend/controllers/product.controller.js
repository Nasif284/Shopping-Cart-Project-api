import { v2 as cloudinary } from "cloudinary";
import {
  addProductService,
} from "../services/product.service.js";
import productModel from "../models/product.model.js";
import categoryModel from "../models/category.model.js";
import cartModel from "../models/cart.model.js";
import WishListModel from "../models/wishList.model.js";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRETE_KEY,
  secure: true,
});

export const addProductsController = async (req, res) => {
  try {
    const { body, files } = req;
    let product = await addProductService(body, files);
    res.status(200).json({
      success: true,
      error: false,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// export const getAllProductsController = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const perPage = parseInt(req.query.perPage);
//     const totalPosts = await productModel.countDocuments();
//     const totalPages = Math.ceil(totalPosts / perPage);

//     if (page > totalPages) {
//       return res.status(400).json({
//         error: true,
//         success: false,
//         message: "Page not found",
//       });
//     }
//     const products = await getAllProductsService(page, perPage);
//     return res.status(200).json({
//       success: true,
//       error: false,
//       products,
//       page,
//       totalPages,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message || error,
//       error: true,
//       success: false,
//     });
//   }
// };

// export const getAllProductsByCategoryNameController = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const perPage = parseInt(req.query.perPage);
//     const totalPosts = await productModel.countDocuments();
//     const totalPages = Math.ceil(totalPosts / perPage);
//     const catName = req.query.category;
//     if (page > totalPages) {
//       return res.status(400).json({
//         error: true,
//         success: false,
//         message: "Page not found",
//       });
//     }
//     const products = await getAllProductsByCatNameService(page, perPage, catName);
//     return res.status(200).json({
//       success: true,
//       error: false,
//       products,
//       page,
//       totalPages,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message || error,
//       error: true,
//       success: false,
//     });
//   }
// };

// export const getAllProductsBySubCategoryNameController = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const perPage = parseInt(req.query.perPage);
//     const totalPosts = await productModel.countDocuments();
//     const totalPages = Math.ceil(totalPosts / perPage);
//     const catName = req.query.subCategory;
//     if (page > totalPages) {
//       return res.status(400).json({
//         error: true,
//         success: false,
//         message: "Page not found",
//       });
//     }
//     const products = await getAllProductsBySubCatNameService(page, perPage, catName);
//     return res.status(200).json({
//       success: true,
//       error: false,
//       products,
//       page,
//       totalPages,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message || error,
//       error: true,
//       success: false,
//     });
//   }
// };

// export const getAllProductsByThirdCategoryNameController = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const perPage = parseInt(req.query.perPage);
//     const totalPosts = await productModel.countDocuments();
//     const totalPages = Math.ceil(totalPosts / perPage);
//     const catName = req.query.thirdCategory;
//     if (page > totalPages) {
//       return res.status(400).json({
//         error: true,
//         success: false,
//         message: "Page not found",
//       });
//     }
//     const products = await getAllProductsByThirdCatNameService(page, perPage, catName);
//     return res.status(200).json({
//       success: true,
//       error: false,
//       products,
//       page,
//       totalPages,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message || error,
//       error: true,
//       success: false,
//     });
//   }
// };

// export const filterProductsByPriceController = async (req, res) => {
//   try {
//     let productList = [];
//     if (req.query.category) {
//       const productListArr = await productModel
//         .find({ categoryId: req.query.category })
//         .populate("category");
//       productList = productListArr;
//     }
//     if (req.query.subCategory) {
//       const productListArr = await productModel
//         .find({ categoryId: req.query.category })
//         .populate("category");
//       productList = productListArr;
//     }
//     if (req.query.subCategory) {
//       const productListArr = await productModel
//         .find({ subCategoryId: req.query.subCategory })
//         .populate("category");
//       productList = productListArr;
//     }
//     if (req.query.thirdCategory) {
//       const productListArr = await productModel
//         .find({ thirdSubCategoryId: req.query.thirdCategory })
//         .populate("category");
//       productList = productListArr;
//     }

//     const filteredProducts = productList.filter((product) => {
//       if (req.query.minPrice && product.price < parseInt(req.query.minPrice)) {
//         return false;
//       }
//       if (req.query.maxPrice && product.price > parseInt(req.query.maxPrice)) {
//         return false;
//       }
//       return true
//     })
//     return res.status(200).json({
//       success: true,
//       error: false,
//       products: filteredProducts
//     })
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message || error,
//       error: true,
//       success: false,
//     });
//   }
// };

export const getAllProductsController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;

    let filter = {};

    if (req.query.category) {
      const cat = await categoryModel.findOne({ name: req.query.category });
      if (cat) filter.categoryId = cat?._id;
    }
    if (req.query.subCategory) {
      const cat = await categoryModel.findOne({ name: req.query.subCategory });
      if (cat) filter.subCategoryId = cat?._id;
    }
    if (req.query.thirdCategory) {
      const cat = await categoryModel.findOne({ name: req.query.thirdCategory });
      if (cat) filter.thirdSubCategoryId = cat?._id;
    }
    if (req.query.rating) {
      filter.rating = req.query.rating;
    }
    if (req.query.minPrice || req.query.maxPrice) {
      filter["variants.price"] = {};
      if (req.query.minPrice) {
        filter["variants.price"].$gte = parseInt(req.query.minPrice);
      }
      if (req.query.maxPrice) {
        filter["variants.price"].$lte = parseInt(req.query.maxPrice);
      }
    }
    const totalPosts = await productModel.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / perPage);
    if (page > totalPages && totalPages > 0) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "Page not found",
      });
    }

    const products = await productModel
      .find(filter)
      .populate("categoryId")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();
    return res.status(200).json({
      success: true,
      error: false,
      products,
      page,
      totalPages,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getAllFeaturedProductsController = async (req, res) => {
  try {
    const products = await productModel.find({ isFeatured: true });
    if (products.length === 0) {
      return res.status(200).json({
        success: false,
        error: true,
        message: "featured products not found",
      });
    }
    return res.status(200).json({
      success: true,
      error: false,
      featuredProducts: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "Product do not found in this id",
      });
    }
    return res.status(200).json({
      success: true,
      error: false,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
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
    const existInCart = await cartModel.findOne({ productId: product._id }) 
    if (existInCart) {
      await cartModel.findOneAndDelete({ productId: product._id });
    }
    const existInWishList = await WishListModel.findOne({ productId: product._id })
       if (existInWishList) {
         await WishListModel.findOneAndDelete({ productId: product._id });
       }
    await productModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      error: false,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const updates = req.body;
    const files = req.files;
    const id = req.params.id;
    const product = await productModel.findById(id);
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
            ...variantData
          }
        } else {
          product.variants.push({
            ...variantData,
            images:[]
          })
        }
      })
    }
    for (let keys in files) {
      if (keys.startsWith("variants_")) {
        const index = parseInt(keys.split("_")[1])
        const variant = product.variants[index]

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
          const uploaded= await cloudinary.uploader.upload(file.path, options)
          imageArr.push(uploaded.secure_url)
        }
        product.variants[index].images = imageArr; 
      }
    }
       await product.save();
      return res.status(200).json({
        success: true,
        message: "Product updated successfully",
        product,
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
