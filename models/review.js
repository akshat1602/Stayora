const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String, 

    //Rating 
    rating: { 
        type: Number,
        min: 1,
        max: 5
    },

    //Time of creation
    createdAt: { 
        type: Date,
        default: Date.now()
    },

    //Author of review
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});


module.exports = mongoose.model("Review", reviewSchema);