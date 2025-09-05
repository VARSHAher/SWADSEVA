const express = require("express");
const { getCart, addToCart, updateQuantity, removeItem, clearCart } = require("../controllers/cartController");
const router = express.Router();

router.get("/", getCart);
router.post("/", addToCart);
router.patch("/", updateQuantity);
router.delete("/:id", removeItem);
router.delete("/clear", clearCart);

module.exports = router;
