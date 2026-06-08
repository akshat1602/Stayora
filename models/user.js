const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    wishlist: [
        {
            type: Schema.Types.ObjectId,
            ref: "Listing",
        }
    ],
});

// Some installs/export styles expose the plugin as a default property.
const passportLocalMongoosePlugin =
    passportLocalMongoose && passportLocalMongoose.default
        ? passportLocalMongoose.default
        : passportLocalMongoose;

userSchema.plugin(passportLocalMongoosePlugin); //It automates salting, hashing and other things.

module.exports = mongoose.model("User", userSchema);