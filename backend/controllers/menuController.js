const MenuItem = require("../models/MenuItem");

// Get all menu items
const getMenu = async (req, res) => {
  try {
    const menu = await MenuItem.find(); // fetch everything
    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new menu item
const addMenuItem = async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



// Delete a menu item by ID
const deleteMenuItem = async (req, res) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a menu item by ID
const updateMenuItem = async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(
      req.params.id,   // id from URL
      req.body,        // new data
      { new: true }    // return updated doc
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getMenu,
  addMenuItem,
  deleteMenuItem,
  updateMenuItem,  
};
