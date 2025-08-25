import AppError from "../middlewares/Error/appError.js";
import {
  createCategoryService,
  deleteCategoryService,
  getCategoriesService,
  getCategoryCountService,
  getCategoryService,
  removeCatImgFromCloudinaryService,
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

export const getCategories = async (req, res) => {
  const { categoryMap, rootCategories } = await getCategoriesService();
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    data: {
      rootCategories,
      categoryMap,
    },
  });
};

export const getCategoryCount = async (req, res) => {
  const categoryCount = await getCategoryCountService();
  return res.status(STATUS_CODES.OK).json({
    categoryCount: categoryCount,
  });
};

export const getSubCategoryCount = async (req, res) => {
  const count = await getSubCategoryCount();
  return res.status(STATUS_CODES.OK).json({
    subCategoryCount: count,
  });
};

export const getCategory = async (req, res) => {
  const category = await getCategoryService(req.params.id);
  if (!category) {
    throw new AppError("Category not found with given ID", STATUS_CODES.NOT_FOUND);
  }
  return res.status(STATUS_CODES.OK).json({
    error: false,
    success: true,
    category: category,
  });
};

export const removeCatImgFromCloudinary = async (req, res) => {
  const catImage = req.query.img;
  if (!catImage) {
    throw new AppError("Image URL is required", STATUS_CODES.BAD_REQUEST);
  }
  const del = await removeCatImgFromCloudinaryService(catImage);
  return res.status(STATUS_CODES.OK).send(del);
};

export const deleteCategory = async (req, res) => {
  const deleted = await deleteCategoryService(req.params.id);
  if (!deleted) {
    throw new AppError("Category not found or could not be deleted", STATUS_CODES.NOT_FOUND);
  }
  return res.status(STATUS_CODES.OK).json({
    message: "Category deleted successfully",
    error: false,
    success: true,
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
