import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import AddToCartButton from "../components/AddToCart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// The Menu component now receives the menuItems and searchQuery props
const Menu = ({ isAdmin, searchQuery, menuItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const navigate = useNavigate();

  const categories = [
    {
      name: "All",
      img: "https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-fast-foods-item-png-image_10303953.png",
    },
    {
      name: "Burger",
      img: "https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-burger-food-sticker-png-png-image_10188397.png",
    },
    {
      name: "Pizza",
      img: "https://png.pngtree.com/png-clipart/20230916/original/pngtree-sticker-with-a-cartoon-pizza-sticker-isolated-on-white-vector-png-image_12229935.png",
    },
    {
      name: "Cake",
      img: "https://static.vecteezy.com/system/resources/thumbnails/046/484/390/small_2x/birthday-cake-with-chocolate-and-strawberry-ai-generative-free-png.png",
    },
    {
      name: "Dessert",
      img: "https://static.vecteezy.com/system/resources/previews/024/657/382/non_2x/trifle-cake-dessert-hand-drawn-sticker-sweet-and-delicious-with-fruit-topping-on-top-free-png.png",
    },
    {
      name: "Biriyani",
      img: "https://static.vecteezy.com/system/resources/previews/027/144/452/non_2x/delicious-chicken-biryani-isolated-on-transparent-background-png.png",
    },
    {
      name: "Beverage",
      img: "https://png.pngtree.com/png-clipart/20230916/original/pngtree-sticker-with-a-cocacola-drink-spilling-in-it-clipart-vector-png-image_12234714.png",
    },
  ];

  // Use useMemo for performance optimization
  const filteredItems = useMemo(() => {
    // Filter items based on the search query first
    const searchedItems =
      searchQuery.length > 0
        ? menuItems.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : menuItems;

    // Then filter by category (case-insensitive)
    const categoryFiltered = selectedCategory === "All"
      ? searchedItems
      : searchedItems.filter(
          (item) =>
            item.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

    // Create a map of category to its order index
    const categoryOrder = {};
    categories.forEach((cat, index) => {
      categoryOrder[cat.name] = index;
    });

    // Sort by category order first, then by name within category
    return categoryFiltered.sort((a, b) => {
      const orderA = categoryOrder[a.category] ?? 999;
      const orderB = categoryOrder[b.category] ?? 999;

      // If categories have different order, sort by order
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      // If same category, sort by name
      return a.name.localeCompare(b.name);
    });
  }, [menuItems, searchQuery, selectedCategory]);

  const handleDelete = (itemId) => {
    setItemToDelete(itemId);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };
      await axios.delete(
        `http://localhost:5000/api/menu/${itemToDelete}`,
        config
      );
      toast.success("Menu item deleted successfully!");
      // Refetch menu items after deletion
      window.location.reload(); // Simple way to refresh, or better to update state
    } catch (err) {
      console.error("Error deleting menu item:", err);
      toast.error("Failed to delete menu item.");
    } finally {
      setIsModalOpen(false);
      setItemToDelete(null);
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const handleUpdate = (item) => {
    navigate("/admin/create-menu", { state: { itemToUpdate: item } });
  };

  return (
    <section className="bg-[#fff3eb] py-[40px]">
      {/* Heading */}
      <h1 className="text-[2rem] font-bold text-center mb-6">
        Explore Our{" "}
        <span className="brand text-[color:#e96610] italic">
          Delicious Offerings
        </span>
      </h1>

      {/* Categories */}
      <div className="categories flex justify-center items-center gap-5 overflow-x-auto px-6 py-2 mb-10">
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedCategory(cat.name)}
            className={`category flex flex-col items-center bg-[#fff3eb] p-2 rounded-[12px] cursor-pointer border-2 ${
              selectedCategory === cat.name
                ? "border-[orange] shadow-lg shadow-orange-300"
                : "border-transparent"
            } transition`}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-[80px] h-[80px] mb-2"
            />
            <p className="font-medium">{cat.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Menu Items */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(filteredItems) && filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="card bg-white rounded-[12px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col"
            >
              {/* Image */}
              <img
                src={
                  item.image ||
                  "https://via.placeholder.com/600x400?text=No+Image"
                }
                alt={item.name}
                className="w-full h-[155px] object-cover"
              />

              {/* Details */}
              <div className="card-info p-3 flex-1">
                {/* Food Name */}
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-[18px] font-semibold leading-snug flex-1">
                    {item.name}
                  </h2>

                  {/* Restaurant Info on the right */}
                  {(item.restaurantName || item.restaurantLogo) && (
                    <div className="flex items-center gap-2 ml-4">
                      {item.restaurantLogo && (
                        <img
                          src={item.restaurantLogo}
                          alt={`${item.restaurantName} logo`}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                      )}
                      {item.restaurantName && (
                        <p className="text-sm text-gray-600 font-medium">
                          {item.restaurantName}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Rating and Reviews */}
                <div className="reviews text-[#ff9800] text-[13px] mb-2">
                  ⭐ {Number(item.ratings ?? 0).toFixed(1)}{" "}
                  <span className="text-[#555] ml-2">
                    ({(item.reviews ?? 0).toLocaleString()} reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-[14px] text-[#555] leading-[1.4] mb-3">
                  {item.description}
                </p>

                {/* Price */}
                <div className="price font-bold text-lg">
                  ${Number(item.price ?? 0).toFixed(2)}
                </div>
              </div>

              {/* Conditional rendering of buttons based on isAdmin prop */}
              {isAdmin ? (
                <div className="flex justify-between p-3 gap-3">
                  <button
                    onClick={() => handleUpdate(item)}
                    className="flex-1 bg-blue-500 text-white rounded-md py-2 px-4 transition-colors hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="flex-1 bg-red-500 text-white rounded-md py-2 px-4 transition-colors hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <AddToCartButton item={item} />
              )}
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No menu items to display.
          </p>
        )}
      </div>

      {/* Custom Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
