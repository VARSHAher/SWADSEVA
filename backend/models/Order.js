const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      name: String,
      price: Number,
      quantity: Number,
      image: String,
    },
  ],
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema, "orders");
module.exports = Order;
