//Server Side authentication
const Joi = require('joi');

//Listing Schema
module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.object({ //changes done for image acceptance
            filename: Joi.string().allow("", null),
            url: Joi.string().uri().allow("", null)
        }).optional()
    }).required()
});

//Review Schema
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),//range of rating fixed
        comment: Joi.string().required(),
    }).required(),
});