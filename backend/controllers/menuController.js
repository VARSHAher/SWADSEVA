const asyncHandler = require("express-async-handler");
const MenuItem = require("../models/menuItem");

// @desc    Get all menu items
// @route   GET /api/menu
// @access  Public
const getMenu = asyncHandler(async (req, res) => {
  const menuItems = await MenuItem.find({});
  res.json(menuItems);
});



// @desc    Add a new menu item
// @route   POST /api/admin/menu
// @access  Private/Admin
const addMenuItem = asyncHandler(async (req, res) => {
  const { name, description, price, image, category } = req.body;

  // Ensure all required fields are present
  if (!name || !price) {
    res.status(400);
    throw new Error("Please fill in all required fields.");
  }

  const menuItem = await MenuItem.create({
    name,
    description,
    price,
    image,
    category,
    createdBy: req.user._id,
  });

  if (menuItem) {
    res.status(201).json({
      success: true,
      message: "Menu item added successfully",
      data: menuItem,
    });
  } else {
    res.status(400);
    throw new Error("Invalid menu item data");
  }
});

// @desc    Update a menu item
// @route   PUT /api/admin/menu/:id
// @access  Private/Admin
const updateMenuItem = asyncHandler(async (req, res) => {
  const { name, description, price, image, category } = req.body;
  const menuItem = await MenuItem.findById(req.params.id);

  if (menuItem) {
    menuItem.name = name || menuItem.name;
    menuItem.description = description || menuItem.description;
    menuItem.price = price || menuItem.price;
    menuItem.image = image || menuItem.image;
    menuItem.category = category || menuItem.category;

    const updatedItem = await menuItem.save();
    res.json({
      success: true,
      message: "Menu item updated successfully",
      data: updatedItem,
    });
  } else {
    res.status(404);
    throw new Error("Menu item not found");
  }
});

// @desc    Delete a menu item
// @route   DELETE /api/admin/menu/:id
// @access  Private/Admin
const deleteMenuItem = asyncHandler(async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id);

  if (menuItem) {
    await menuItem.deleteOne();
    res.json({ success: true, message: "Menu item removed" });
  } else {
    res.status(404);
    throw new Error("Menu item not found");
  }
});

module.exports = {
  getMenu,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
