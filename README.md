# Stayora

Stayora is a full-stack Airbnb-inspired rental listing web application built with Node.js, Express.js, MongoDB Atlas, EJS, Passport, Mapbox, Cloudinary, and Bootstrap. It allows users to explore listings, create and manage properties, leave reviews, and authenticate securely.

## Live Demo

[Visit Stayora](https://major-project-stayora.onrender.com)

## Features

- User authentication with Passport.js
- Create, edit, and delete property listings
- Add and manage reviews and ratings
- Interactive maps with Mapbox
- Image upload and hosting with Cloudinary
- Flash messages and session management
- MongoDB Atlas database integration
- Responsive UI with Bootstrap

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Frontend:** EJS, Bootstrap, CSS
- **Authentication:** Passport.js, passport-local, passport-local-mongoose
- **Maps:** Mapbox GL JS
- **Image Hosting:** Cloudinary
- **Session Store:** connect-mongo
- **Deployment:** Render

## Project Structure

```bash
Stayora/
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

3. Create a `.env` file and add the required environment variables:
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

5. Open in browser:
   ```
   http://localhost:8080
   ```

## Environment Variables

Make sure the following variables are configured in your `.env` file:

- `ATLASDB_URL`
- `SECRET`
- `CLOUD_NAME`
- `CLOUD_API_KEY`
- `CLOUD_API_SECRET`
- `MAP_TOKEN`

## Future Improvements

- Booking and reservation flow
- Wishlist / favorites feature
- Search filters and category-based browsing
- User profile pages
- Payment integration

## Author

Developed by **Akshat**.

## License

This project is built for learning and portfolio purposes.
