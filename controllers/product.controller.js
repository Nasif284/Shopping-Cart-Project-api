import { v2 as cloudinary } from "cloudinary";
import { addProductService, getAllFeaturedService, getAllProductsService, updateProductService } from "../services/product.service.js";
import { STATUS_CODES } from "../utils/statusCodes.js";
import { deleteCategoryService } from "../services/categories.service.js";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRETE_KEY,
  secure: true,
});

export const addProductsController = async (req, res) => {
  const { body, files } = req;
  let product = await addProductService(body, files);
  res.status(STATUS_CODES.CREATED).json({
    success: true,
    error: false,
    product,
  });
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
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;

  const { totalPages, products } = await getAllProductsService(req.query, page, perPage);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    products,
    page,
    totalPages,
  });
};

export const getAllFeaturedProductsController = async (req, res) => {
const products = getAllFeaturedService()
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    featuredProducts: products,
  });
};

export const getProductById = async (req, res) => {
  const id = req.params.id
const product = await getProductById(id)
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    product,
  });
};

export const deleteProductController = async (req, res) => {
  const id = req.params.id;
  await deleteCategoryService(id)
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    message: "Product deleted successfully",
  });
};

export const updateProductController = async (req, res) => {
  const updates = req.body;
  const files = req.files;
  const id = req.params.id;
const updated = await updateProductService(id,updates,files)
  return res.status(STATUS_CODES.OK).json({
    success: true,
    message: "Product updated successfully",
    updated
  });
};
