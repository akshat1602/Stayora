const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

//Defining storage on cloudinary
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'stayora_DEV',
  allowedFormats: ["png", "jpg", "jpeg"],
  filename: function (req, file, cb) {
    cb(undefined, `${Date.now()}-${file.originalname}`);
  },
});

module.exports = {
    cloudinary,
    storage
};