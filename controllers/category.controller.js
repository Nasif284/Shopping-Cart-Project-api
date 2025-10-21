import AppError from "../middlewares/Error/appError.js";
import {
  blockCategoryService,
  createCategoryService,
  getCategoriesService,
  getCatsByLevelService,
  updateCategoryService,
} from "../services/categories.service.js";
import { STATUS_CODES } from "../utils/statusCodes.js";

export const createCategory = async (req, res) => {
  const image = req.file;
  const category = await createCategoryService(image, req.body);
  if (!category) {
    throw new AppError("Category creation failed", STATUS_CODES.BAD_REQUEST);
  }
  return res.status(STATUS_CODES.CREATED).json({
    category: category,
    message: "category created",
    success: true,
    error: false,
  });
};

export const getAllCategories = async (req, res) => {
  const query = req.query
  let { categoryMap, rootTree:rootCategories } = await getCategoriesService(query);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    rootCategories,
    categoryMap,
  });
};

export const updateCategory = async (req, res) => {
  const image = req.file;
  
  const updated = await updateCategoryService(req.params.id, image, req.body);
  if (!updated) {
    throw new AppError("Category could not be updated", STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
  return res.status(STATUS_CODES.OK).json({
    message: "category updated successfully",
    success: true,
    error: false,
    category: updated,
  });
};

export const getCategoriesByLevel = async(req,res) => {
  const level = req.params.level;
  const perPage = req?.query?.perPage
  const page = req?.query?.page
  const search = req?.query?.search;
  if (perPage, page) {
    const { categories, totalPosts, totalPages,} = await getCatsByLevelService(level, page, perPage,search);
    return res.status(STATUS_CODES.OK).json({
      success: true,
      error: false,
      categories,
      totalPosts,
      totalPages,
      page,
      perPage,
    });
  } else {
    const categories = await getCatsByLevelService(level, page, perPage);
     return res.status(STATUS_CODES.OK).json({
       success: true,
       error: false,
       categories,
     });
  }
}


export const blockCategory = async (req, res) => {
  const id = req.params.id;
  const category = await blockCategoryService(id);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    category,
    message: category.isBlocked
      ? "Category Blocked Successfully "
      : "Category Unblocked Successfully",
  });
};



