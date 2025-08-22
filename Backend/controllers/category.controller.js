import {
  createCategoryService,
  deleteCategoryService,
  getCategoriesService,
  getCategoryCountService,
  getCategoryService,
  removeCatImgFromCloudinaryService,
  updateCategoryService,
} from "../services/categories.service.js";

export const createCategory = async (req, res) => {
  try {
    const image = req.file;
    const category = await createCategoryService(image, req.body);
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
    const { categoryMap, rootCategories } = await getCategoriesService();
    return res.status(200).json({
      success: true,
      error: false,
      data: {
        rootCategories,
        categoryMap,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getCategoryCount = async (req, res) => {
  try {
    const categoryCount = await getCategoryCountService();
    return res.status(200).json({
      categoryCount: categoryCount,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getSubCategoryCount = async (req, res) => {
  try {
    const count = await getSubCategoryCount();
    return res.status(200).json({
      subCategoryCount: count,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getCategory = async (req, res) => {
  try {
    const category = await getCategoryService(req.params.id);
    if (!category) {
      return res.status(400).json({
        message: "Category does not found in given id",
        error: true,
        success: false,
      });
    }
    return res.status(200).json({
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const removeCatImgFromCloudinary = async (req, res) => {
  try {
    const catImage = req.query.img;
    const del = await removeCatImgFromCloudinaryService(catImage);
    return res.status(200).send(del);
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await deleteCategoryService(req.params.id);
    return res.status(200).json({
      message: "Category deleted successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const image = req.file;
    const updated = await updateCategoryService(req.params.id, image, req.body);
    if (!updated) {
      return res.status(500).json({
        message: "category can not be updated",
        success: false,
        error: true,
      });
    }
    return res.status(200).json({
      message: "category updated successfully",
      success: true,
      error: false,
      category: updated,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
