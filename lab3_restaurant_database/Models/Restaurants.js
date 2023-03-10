const mongoose = require("mongoose");

const RestaurantsSchema = new mongoose.Schema({
  address: {
    building: {
      type: Number,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    zipcode: {
      type: Number,
      required: true,
    },
  },
  city: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  restaurant_id: {
    type: Number,
    required: true,
  }
});

const Restaurants = mongoose.model("Restaurants", RestaurantsSchema);
module.exports = Restaurants;
