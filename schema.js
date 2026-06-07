const Joi = require('joi');

//Listing Schema
module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        category: Joi.string()
            .valid(
                "Trending",
                "Rooms",
                "Iconic cities",
                "Mountains",
                "Castles",
                "Amazing Pools",
                "Camping",
                "Farms",
                "Arctic",
                "Domes",
                "Beaches"
            )
            .required(),
        image: Joi.object({
            filename: Joi.string().allow("", null),
            url: Joi.string().uri().allow("", null)
        }).optional()
    }).required()
});

//Review Schema
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});