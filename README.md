# Stayora

Stayora is a full-stack Airbnb-inspired rental listing web application built with Node.js, Express.js, MongoDB Atlas, EJS, Passport.js, Mapbox, Cloudinary, and Bootstrap. It allows users to discover stays, search and filter listings, save favorites to a wishlist, book available dates, leave reviews, and manage their own property listings. A strong project README should clearly explain what the project does, highlight its main features, provide a live demo, and include copy-paste-ready setup steps.

## Live Demo

[Visit Stayora](https://major-project-stayora.onrender.com)

## Overview

Stayora was built as a portfolio-ready full-stack project to demonstrate practical web development skills across authentication, CRUD operations, server-side rendering, database relationships, third-party API integration, image hosting, search and filter UX, wishlist handling, and booking validation. GitHub portfolio READMEs are strongest when they include a concise overview, a project demo, the main technologies used, and a clear explanation of the problem the project solves.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Frontend:** EJS, Bootstrap, CSS
- **Authentication:** Passport.js, passport-local, passport-local-mongoose
- **Maps & Geocoding:** Mapbox GL JS, Mapbox SDK
- **Image Hosting:** Cloudinary, Multer, Multer-Storage-Cloudinary
- **Session Store:** connect-mongo
- **Deployment:** Render

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

- `ATLASDB_URL` — MongoDB Atlas connection string.
- `SECRET` — Session secret.
- `CLOUD_NAME` — Cloudinary cloud name.
- `CLOUD_API_KEY` — Cloudinary API key.
- `CLOUD_API_SECRET` — Cloudinary API secret.
- `MAP_TOKEN` — Mapbox access token.

## Preview

<img width="1894" height="911" alt="image" src="https://github.com/user-attachments/assets/16e7637a-d46a-487e-b848-0ecd1ad8285a" />

<img width="1891" height="909" alt="image" src="https://github.com/user-attachments/assets/9a910cce-a597-490e-82fe-dea9c14a5f4c" />

<img width="1895" height="911" alt="image" src="https://github.com/user-attachments/assets/5bff7af4-5767-4a20-8d3b-cbd927618934" />

<img width="1891" height="910" alt="image" src="https://github.com/user-attachments/assets/c9fe78d1-8046-4265-92d1-3281ebeab770" />





## Author

Developed by **Akshat Trivedi**.
