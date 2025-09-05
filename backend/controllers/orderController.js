const Order = require("../models/Order");

// Create new order
const createOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ msg: "Order must have at least one item" });
    }

    const order = new Order({ items, totalPrice });
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
