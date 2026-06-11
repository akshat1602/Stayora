const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const { cloudinary } = require("../cloudConfig.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

//Index Route
module.exports.index = async (req, res) => {
    let { q, search, category, minPrice, maxPrice, sort } = req.query;

    const rawSearch = (q || search || "").trim();

    let filter = {};

    if (rawSearch !== "") {
        const escapedSearch = rawSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        filter.$or = [
            { title: { $regex: escapedSearch, $options: "i" } },
            { location: { $regex: escapedSearch, $options: "i" } },
            { country: { $regex: escapedSearch, $options: "i" } }
        ];
    }

    if (category && category.trim() !== "") {
        filter.category = category;
    }

    if (minPrice || maxPrice) {
        filter.price = {};

        if (minPrice && !isNaN(minPrice)) {
            filter.price.$gte = Number(minPrice);
        }

        if (maxPrice && !isNaN(maxPrice)) {
            filter.price.$lte = Number(maxPrice);
        }

        if (Object.keys(filter.price).length === 0) {
            delete filter.price;
        }
    }

    let query = Listing.find(filter);

    if (sort === "price_asc") {
        query = query.sort({ price: 1 });
    } else if (sort === "price_desc") {
        query = query.sort({ price: -1 });
    } else {
        query = query.sort({ _id: -1 });
    }

    const allListings = await query;
    const hasActiveFilters =
        rawSearch !== "" ||
        (category && category.trim() !== "") ||
        (minPrice && !isNaN(minPrice)) ||
        (maxPrice && !isNaN(maxPrice)) ||
        (sort && sort.trim() !== "");

    res.render("listings/index.ejs", {
        allListings,
        searchQuery: rawSearch,
        hasActiveFilters,
        filters: {
            search: rawSearch,
            category: category || "",
            minPrice: minPrice || "",
            maxPrice: maxPrice || "",
            sort: sort || ""
        }
    });
};

//New Route
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs", { listing: {}, error: null });
};

//Show Route
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({ path: "reviews", populate: { path: "author" } })
        .populate("owner")
        .populate("bookings");

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    let isWishlisted = false;

    if (req.user) {
        const user = await User.findById(req.user._id);

        isWishlisted = user.wishlist.some(
            (wishlistId) => wishlistId.toString() === listing._id.toString()
        );
    }

    res.render("listings/show.ejs", {
        listing,
        isWishlisted
    });
};

//Create Route
module.exports.createListing = async (req, res, next) => {
    const locationQuery = [req.body.listing.location, req.body.listing.country]
        .filter(Boolean)
        .join(", ");

    let response = await geocodingClient.forwardGeocode({
        query: locationQuery,
        limit: 1,
    }).send();

    if (!response.body.features.length) {
        req.flash("error", "Could not find that location on the map.");
        return res.redirect("/listings/new");
    }

    if (!req.file) {
        req.flash("error", "Please upload an image for the listing.");
        return res.redirect("/listings/new");
    }

    const imageUrl = req.file.secure_url || req.file.url || req.file.path || req.file.location;
    const imageId = req.file.public_id || req.file.filename || "";

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url: imageUrl, filename: imageId };
    newListing.geometry = response.body.features[0].geometry;

    await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

//Edit Route
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = "";
    if (listing.image && listing.image.url) {
        originalImageUrl = listing.image.url;
        if (originalImageUrl.includes("/upload")) {
            originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
        }
    }

    res.render("listings/edit.ejs", { listing, originalImageUrl, error: null });
};

//Update Route
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    const locationQuery = [req.body.listing.location, req.body.listing.country]
        .filter(Boolean)
        .join(", ");

    const response = await geocodingClient.forwardGeocode({
        query: locationQuery,
        limit: 1,
    }).send();

    if (!response.body.features.length) {
        req.flash("error", "Could not find that location on the map.");
        return res.redirect(`/listings/${id}/edit`);
    }

    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { runValidators: true, returnDocument: "after", context: "query" }
    );

    listing.geometry = response.body.features[0].geometry;

    if (req.file) {
        const oldImageId = listing.image && (listing.image.filename || listing.image.public_id);

        if (oldImageId) {
            await cloudinary.v2.uploader.destroy(oldImageId);
        }

        const imageUrl = req.file.secure_url || req.file.url || req.file.path;
        const imageId = req.file.public_id || req.file.filename;
        listing.image = { url: imageUrl, filename: imageId };
    }

    await listing.save();

    req.flash("success", "Listing updated!");
    res.redirect("/listings");
};

//Delete Route
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted!");
    res.redirect("/listings");
};