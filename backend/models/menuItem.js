const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  ratings: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  restaurantName: { type: String },
  restaurantLogo: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true } 
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema, "menu");

module.exports = MenuItem;

