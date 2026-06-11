const User = require("../models/user.js");

module.exports.renderWishlist = async (req, res) => {
    const user = await User.findById(req.user._id).populate("wishlist");
    const wishlist = user?.wishlist || [];
    res.render("listings/wishlist.ejs", { wishlist });
};

module.exports.addToWishlist = async (req, res) => {
    const { id } = req.params;

    await User.findByIdAndUpdate(req.user._id, {
        $addToSet: { wishlist: id },
    });

    req.flash("success", "Listing added to wishlist!");
    res.redirect(`/listings/${id}`);
};

module.exports.removeFromWishlist = async (req, res) => {
    const { id } = req.params;

    await User.findByIdAndUpdate(req.user._id, {
        $pull: { wishlist: id },
    });

    req.flash("success", "Listing removed from wishlist!");

    const redirectUrl = req.get("Referer") || "";

    if (redirectUrl.includes("/listings/wishlist")) {
        return res.redirect("/listings/wishlist");
    }

    res.redirect(`/listings/${id}`);
};