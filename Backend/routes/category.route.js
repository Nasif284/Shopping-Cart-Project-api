import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import { createCategory, getCategories , } from "../controllers/category.controller.js";

const categoryRouter = Router()

categoryRouter.post('/create', auth, upload.array('images'), createCategory)
categoryRouter.get('/get',getCategories)

export default categoryRouter