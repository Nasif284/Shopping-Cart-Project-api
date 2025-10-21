import { homeSlidesAddService } from "../services/homeSlides.service.js"
import { STATUS_CODES } from "../utils/statusCodes.js"

export const homeSlidesAddController = (req, res) => {
    const image = req.files
    const body = req.body
    const { homeSlide } = homeSlidesAddService(image, body)
    return res.status(STATUS_CODES.OK).json({
        success: true,
        error: false,
        homeSlide
    })
}