const mongoose = require("mongoose");
// const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review");


//Schema Declaration
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        url: String,
        filename: String,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    category: {
    type: String,
    enum: [
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
    ],
    default: "Trending",
    required: true,
},


    //For reviews
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],


    //For authorisation
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },


    //Maps
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});


//Mongoose middleware
listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;