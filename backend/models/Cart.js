const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      name: String,
      price: Number,
      quantity: { type: Number, default: 1 },
      image: String,
    },
  ],
  totalPrice: { type: Number, default: 0 },
});

const Cart = mongoose.model("Cart", cartSchema, "cart");
module.exports = Cart;
