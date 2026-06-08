# Stayora

Stayora is a full-stack Airbnb-inspired rental listing web application built with Node.js, Express.js, MongoDB Atlas, EJS, Passport.js, Mapbox, Cloudinary, and Bootstrap. It allows users to discover stays, search and filter listings, save favorites to a wishlist, book available dates, leave reviews, and manage their own property listings.

## Live Demo

[Visit Stayora](https://major-project-stayora.onrender.com)

## Features

- Secure user authentication with Passport.js
- Create, edit, and delete property listings
- Upload and manage listing images with Cloudinary
- Interactive location maps with Mapbox
- Add and delete reviews with star ratings
- Wishlist feature to save favorite listings
- Real backend search by title, location, and country
- Filters for category, minimum price, maximum price, and sorting
- Category filter state preservation with existing search and filter params
- Booking feature with date availability validation
- Unavailable booked dates shown on listing pages
- Flash messages and session management
- Responsive UI with Bootstrap and custom CSS

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Frontend:** EJS, Bootstrap, CSS
- **Authentication:** Passport.js, passport-local, passport-local-mongoose
- **Maps & Geocoding:** Mapbox GL JS, Mapbox SDK
- **Image Hosting:** Cloudinary, Multer, Multer-Storage-Cloudinary
- **Session Store:** connect-mongo
- **Deployment:** Render

## Core Modules

- **Authentication:** Signup, login, logout, route protection
- **Listings:** Full CRUD for rental properties
- **Reviews:** Add ratings and comments for listings
- **Wishlist:** Save and remove favorite stays
- **Search & Filters:** Search by keywords and refine results with filters
- **Bookings:** Reserve listings with date conflict prevention
- **Maps:** Geocoded listing locations with interactive map display

## Project Structure

```bash
Stayora/
│── controllers/
│── models/
│── routes/
│── views/
│── public/
│── utils/
│── app.js
│── cloudConfig.js
│── middleware.js
│── schema.js
│── package.json
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Stayora.git
   cd Stayora
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add:
   ```env
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_mapbox_token
   ```

4. Start the development server:
   ```bash
   nodemon app.js
   ```

5. Open the app in your browser:
   ```bash
   http://localhost:8080
   ```

## Environment Variables

The project requires these environment variables:

- `ATLASDB_URL` — MongoDB Atlas connection string
- `SECRET` — session secret
- `CLOUD_NAME` — Cloudinary cloud name
- `CLOUD_API_KEY` — Cloudinary API key
- `CLOUD_API_SECRET` — Cloudinary API secret
- `MAP_TOKEN` — Mapbox access token

## Screens to Highlight

For portfolio presentation, these are the best pages to showcase:

- Home page with search and filters
- Listing detail page with map, reviews, wishlist, and booking section
- New listing form
- Edit listing form
- Wishlist page
- Auth pages

## Why this project matters

Stayora was built as a portfolio-ready full-stack project to demonstrate practical web development skills across authentication, CRUD operations, server-side rendering, database relationships, third-party API integration, image hosting, search/filter UX, and booking validation.

## Author

Developed by **Akshat Trivedi**.

## License

This project is built for learning and portfolio purposes.
