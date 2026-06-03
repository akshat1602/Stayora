const User = require("../models/user.js");

// SIGNUP
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs", { formData: {} });
};

module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Stayora!");
            return res.redirect("/listings");
        });
    } catch (err) {
        let errorMessage = "Signup failed. Please try again.";

        if (err && err.name === "UserExistsError") {
            errorMessage = "This username is already registered. Please choose another one.";
        } else if (err && err.code === 11000) {
            errorMessage = "This email is already registered. Please use another email.";
        } else if (err && err.message) {
            errorMessage = err.message;
        }

        req.flash("error", errorMessage);
        return res.status(400).render("users/signup.ejs", {
            formData: {
                username: req.body.username || "",
                email: req.body.email || "",
            },
        });
    }
};


// LOGIN
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs", { formData: {} });
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to Stayora!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    return res.redirect(redirectUrl);
};


// LOGOUT
module.exports.logout = (req, res) => {
    req.logout((err) => {
        if(err){
            next(err);
        }
        req.flash("success", "You are logged out!");
        return res.redirect("/listings");
    })
};