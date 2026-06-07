const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/stayora";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

//Initializing DB
const initDB = async () => {
  await Listing.deleteMany({});

  const ownerId = "6a1b140639a0be43b3e2c0da";

  const listingsWithOwner = initData.data.map((obj) => ({
    ...obj,
    owner: ownerId,
    geometry: {
      type: "Point",
      coordinates: [77.2090, 28.6139], // default coordinates
    },
  }));

  await Listing.insertMany(listingsWithOwner);
  console.log("Data was initialized");
};

initDB();