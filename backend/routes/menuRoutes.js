// menuRoutes.js

const express = require("express");
const { getMenu, addMenuItem, deleteMenuItem, updateMenuItem, updateAllMenuItems } = require("../controllers/menuController"); // <-- Add updateAllMenuItems here
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Protect admin routes
const protectAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized, admin access required' });
  }
};

router.get("/", getMenu);
router.post("/", protect, protectAdmin, addMenuItem);
router.post("/update-all", protect, protectAdmin, updateAllMenuItems); // <-- Add this new route
router.delete("/:id", protect, protectAdmin, deleteMenuItem);
router.put("/:id", protect, protectAdmin, updateMenuItem);

module.exports = router;
