import homeSlidesModel from "../models/homeSlides.model.js"

export const homeSlidesAddService = (image, body) => {
    const homeSlide = homeSlidesModel.create({
        description: body.description,
        banner: image,
        link: body.linkTo        
    })
    return homeSlide;
}