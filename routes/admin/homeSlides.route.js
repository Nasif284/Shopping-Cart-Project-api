import { Router } from "express";
import adminAuth from "../../middlewares/auth/adminAuth.js";
import { asyncHandler } from "../../middlewares/Error/asyncHandler.js";
import { homeSlidesAddController } from "../../controllers/homeSlides.controller.js";

const homeSlidesRouter = Router()

homeSlidesRouter.post("/",adminAuth,asyncHandler(homeSlidesAddController))

export default homeSlidesRouter;