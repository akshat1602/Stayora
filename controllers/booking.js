const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");

module.exports.createBooking = async (req, res) => {
    const { id } = req.params;
    const { checkIn, checkOut } = req.body;

    if (!checkIn || !checkOut) {
        req.flash("error", "Please select both check-in and check-out dates.");
        return res.redirect(`/listings/${id}`);
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (
        Number.isNaN(checkInDate.getTime()) ||
        Number.isNaN(checkOutDate.getTime())
    ) {
        req.flash("error", "Please enter valid booking dates.");
        return res.redirect(`/listings/${id}`);
    }

    if (checkInDate >= checkOutDate) {
        req.flash("error", "Check-out date must be after check-in date.");
        return res.redirect(`/listings/${id}`);
    }

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    const overlappingBooking = await Booking.findOne({
        listing: id,
        checkIn: { $lt: checkOutDate },
        checkOut: { $gt: checkInDate },
    });

    if (overlappingBooking) {
        req.flash("error", "These dates are not available for this listing.");
        return res.redirect(`/listings/${id}`);
    }

    const booking = new Booking({
        listing: id,
        user: req.user._id,
        checkIn: checkInDate,
        checkOut: checkOutDate,
    });

    await booking.save();

    await Listing.findByIdAndUpdate(id, {
        $push: { bookings: booking._id },
    });

    req.flash("success", "Booking created successfully!");
    res.redirect(`/listings/${id}`);
};