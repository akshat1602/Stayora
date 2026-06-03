const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");

//User authentication
module.exports.isLoggedIn = (req, res, next) =>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create listing!");
        return res.redirect("/login");
    }
    next(); //if user authenticated
};

//For saving redirectUrl
module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

//For authorisation
module.exports.isOwner = async (req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error", "You are not the owner of this listing.");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

//For Schema (listing validation)
module.exports.validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body); //directly validating using joi.

    if(error){
        let errMsg = error.details.map((el) => el.message).join(","); //to display additional details associated with errors
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
};

//For Schema (review validation)
module.exports.validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body); //directly validating using joi.

    if(error){
        let errMsg = error.details.map((el) => el.message).join(","); //to display additional details associated with errors
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
};

//For review authorisation
module.exports.isReviewAuthor = async (req, res, next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error", "You are not the author of this review.");
        return res.redirect(`/listings/${id}`);
    }
    next();
};
