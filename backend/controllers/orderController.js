const Order = require("../models/Order");

// Create new order
const createOrder = async (req, res) => {
  try {
    // Destructure new fields from the request body
    const { items, totalPrice, customerName, customerAddress, customerPhone } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ msg: "Order must have at least one item" });
    }

    // Pass the new fields to the Order constructor
    const order = new Order({ items, totalPrice, customerName, customerAddress, customerPhone });
    await order.save();

    res.status(201).json(order);
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Get orders error:", err);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createOrder, getOrders };