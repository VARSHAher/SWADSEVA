

const asyncHandler = require("express-async-handler");
const MenuItem = require("../models/menuItem");


const getMenu = asyncHandler(async (req, res) => {
  const menuItems = await MenuItem.find({});
  res.json(menuItems);
});


const addMenuItem = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    image,
    category,
    ratings,
    reviews,
    restaurantName,
    restaurantLogo,
  } = req.body;

  
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
    ratings: ratings || 0,
    reviews: reviews || 0,
    restaurantName,
    restaurantLogo,
    createdBy: req.user._id,
  });

  if (menuItem) {
    res.status(201).json({
      success: true,
      message: "Menu item added successfully",
      data: menuItem,
    });
  } else {
    res.status(500);
    throw new Error("Failed to add menu item.");
  }
});


const deleteMenuItem = asyncHandler(async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id);

  if (!menuItem) {
    res.status(404);
    throw new Error("Menu item not found.");
  }


  if (req.user.role !== "admin") {
    res.status(401);
    throw new Error("Not authorized to delete this item.");
  }

  await menuItem.deleteOne();
  res.status(200).json({ message: "Menu item deleted successfully." });
});


const updateMenuItem = asyncHandler(async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id);

  if (!menuItem) {
    res.status(404);
    throw new Error("Menu item not found");
  }

  const {
    name,
    description,
    price,
    image,
    category,
    ratings,
    reviews,
    restaurantName,
    restaurantLogo,
  } = req.body;

  menuItem.name = name || menuItem.name;
  menuItem.description = description || menuItem.description;
  menuItem.price = price || menuItem.price;
  menuItem.image = image || menuItem.image;
  menuItem.category = category || menuItem.category;
  menuItem.ratings = ratings || menuItem.ratings;
  menuItem.reviews = reviews || menuItem.reviews;
  menuItem.restaurantName = restaurantName || menuItem.restaurantName;
  menuItem.restaurantLogo = restaurantLogo || menuItem.restaurantLogo;

  const updatedItem = await menuItem.save();
  res.json(updatedItem);
});


const updateAllMenuItems = asyncHandler(async (req, res) => {
  
  const restaurantData = {
    Burger: [
      {
        name: "Burger King",
        logo: "https://tse1.mm.bing.net/th/id/OIP.eJZarRJ_GKyMmwTb9Zdq3wHaIE?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        name: "McDonald's",
        logo: "https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png",
      },
    ],
    Pizza: [
      {
        name: "Domino's Pizza",
        logo: "https://th.bing.com/th/id/R.e27ecfb0b927672e65c6549cdbc4caa1?rik=NAAPOspR7JUGZw&riu=http%3a%2f%2fwww.voucherbox.co.uk%2fuploads%2flogos%2fdomino-s-pizza.jpg&ehk=efh4hSue2NxaQNJ7SrXyt6szUYeZoCbGQ6Nnc%2fNCG4U%3d&risl=&pid=ImgRaw&r=0",
      },
      { name: "Pizza Hut", logo: "https://logodix.com/logo/29085.jpg" },
    ],
    Cake: [
      {
        name: "Mio Amore",
        logo: "https://tse4.mm.bing.net/th/id/OIP.wVRGzkzF8YG7jOcCwljXdQHaHa?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    ],
    Dessert: [
      {
        name: "Bhikharam Chandmal",
        logo: "https://tiimg.tistatic.com/gd/co_logos/ASHISH-PROTEINS-FOOD-P-LTD--v1-84283.jpeg",
      },
    ],
    Biriyani: [
      {
        name: "Arsalan",
        logo: "https://image3.mouthshut.com/images/imagesp/925697258s.png",
      },
    ],
    Beverage: [
      {
        name: "Starbucks",
        logo: "https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png",
      },
      {
        name: "Dunkin' Donuts",
        logo: "https://4.bp.blogspot.com/-PAwSm_hV4eI/W-qnQnesGSI/AAAAAAAAAoI/Sgc_rKpXNvo-PkkkBk1SIu5DjHdxkW5oACEwYBhgL/s1600/Dunkin%2BDonuts%2BNew.png",
      },
    ],
  };

  try {
    const menuItems = await MenuItem.find({});
    console.log(`Found ${menuItems.length} menu items to update`);

    let updatedCount = 0;

    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i];
      const category = item.category;

      if (restaurantData[category] && restaurantData[category].length > 0) {
        const restaurantIndex = i % restaurantData[category].length;
        const restaurantInfo = restaurantData[category][restaurantIndex];

        await MenuItem.findByIdAndUpdate(item._id, {
          restaurantName: restaurantInfo.name,
          restaurantLogo: restaurantInfo.logo,
        });

        updatedCount++;
        console.log(`Updated ${item.name} with ${restaurantInfo.name}`);
      }
    }

    res.json({
      success: true,
      message: `Successfully updated ${updatedCount} menu items with restaurant information`,
      data: { updatedCount },
    });
  } catch (error) {
    console.error("Error updating menu items:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating menu items.",
    });
  }
});

module.exports = {
  getMenu,
  addMenuItem,
  deleteMenuItem,
  updateMenuItem,
  updateAllMenuItems,
};
