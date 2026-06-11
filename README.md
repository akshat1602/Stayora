# Stayora

Stayora is a full-stack Airbnb-inspired rental listing web application built with Node.js, Express.js, MongoDB Atlas, EJS, Passport.js, Mapbox, Cloudinary, and Bootstrap. It allows users to discover stays, search and filter listings, save favorites to a wishlist, book available dates, leave reviews, and manage their own property listings. A strong project README should clearly explain what the project does, highlight its main features, provide a live demo, and include copy-paste-ready setup steps.[1][2][3]

## Live Demo

[Visit Stayora](https://major-project-stayora.onrender.com)

## Overview

Stayora was built as a portfolio-ready full-stack project to demonstrate practical web development skills across authentication, CRUD operations, server-side rendering, database relationships, third-party API integration, image hosting, search and filter UX, wishlist handling, and booking validation. GitHub portfolio READMEs are strongest when they include a concise overview, a project demo, the main technologies used, and a clear explanation of the problem the project solves.[4][5][6]

## Features

- Secure user authentication with Passport.js.
- Create, edit, and delete property listings.
- Upload and manage listing images with Cloudinary.
- Interactive location maps with Mapbox.
- Add and delete reviews with star ratings.
- Wishlist feature to save favorite listings.
- Real backend search by title, location, and country.
- Filters for category, minimum price, maximum price, and sorting.
- Category filter state preservation with existing search and filter parameters.
- Booking feature with date availability validation.
- Unavailable booked dates shown on listing pages.
- Flash messages and session management.
- Responsive UI with Bootstrap and custom CSS, including the latest empty-state and interface polish updates.

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

- **Authentication:** Signup, login, logout, and route protection.
- **Listings:** Full CRUD for rental properties.
- **Reviews:** Add ratings and comments for listings.
- **Wishlist:** Save and remove favorite stays.
- **Search & Filters:** Search by keywords and refine results with category, price, and sorting filters.
- **Bookings:** Reserve listings with date conflict prevention.
- **Maps:** Geocoded listing locations with interactive map display.

## Recent Updates

- Improved search and filter flow for a smoother browsing experience.
- Added booking validation and unavailable date handling on listing pages.
- Refined responsive create and edit listing forms.[7]
- Polished empty states and UI consistency across updated screens.[7]
- Shipped the latest updates to the live project.[7]

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

Project documentation is easier to scan when it includes a short structure section showing where the main app files live.[2][6]

## Screens to Highlight

- Home page with search and filters.
- Listing detail page with map, reviews, wishlist, and booking section.
- New listing form.[7]
- Edit listing form.[7]
- Wishlist page.
- Authentication pages.

README guides for portfolio projects often recommend adding screenshots or demo visuals so visitors can quickly understand the product before running it locally.[8][4][5]

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

Good READMEs should include clear installation steps, minimal setup friction, and copy-paste-ready commands for local development.[1][2][3]

## Environment Variables

The project requires these environment variables:

- `ATLASDB_URL` — MongoDB Atlas connection string.
- `SECRET` — Session secret.
- `CLOUD_NAME` — Cloudinary cloud name.
- `CLOUD_API_KEY` — Cloudinary API key.
- `CLOUD_API_SECRET` — Cloudinary API secret.
- `MAP_TOKEN` — Mapbox access token.

Configuration details are a recommended README section because they help others run the project without guessing missing setup values.[3][6]

## Usage

- Browse listings from the home page.
- Search stays by title, location, or country.
- Apply category and price filters to narrow results.
- Open a listing to view its images, map, reviews, wishlist button, and booking section.
- Sign in to create listings, save favorites, leave reviews, and make bookings.

## Why This Project Matters

Stayora demonstrates full-stack application design beyond basic CRUD by combining authentication, media uploads, geolocation, search, filtering, wishlist flows, and booking validation in one project. Portfolio-focused GitHub projects are stronger when they explain both what was built and what skills the project proves to recruiters or collaborators.[5][6]

## Author

Developed by **Akshat Trivedi**.

## License

This project is built for learning and portfolio purposes.
