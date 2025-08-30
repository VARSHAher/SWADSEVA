import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);

  // Filtered items based on category
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const categories = [
    { name: "All", img: "https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-fast-foods-item-png-image_10303953.png" },
    { name: "Burger", img: "https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-burger-food-sticker-png-png-image_10188397.png" },
    { name: "Pizza", img: "https://png.pngtree.com/png-clipart/20230916/original/pngtree-sticker-with-a-cartoon-pizza-sticker-isolated-on-white-vector-png-image_12229935.png" },
    { name: "Cake", img: "https://static.vecteezy.com/system/resources/thumbnails/046/484/390/small_2x/birthday-cake-with-chocolate-and-strawberry-ai-generative-free-png.png" },
    { name: "Dessert", img: "https://static.vecteezy.com/system/resources/previews/024/657/382/non_2x/trifle-cake-dessert-hand-drawn-sticker-sweet-and-delicious-with-fruit-topping-on-top-free-png.png" },
    { name: "Biriyani", img: "https://static.vecteezy.com/system/resources/previews/027/144/452/non_2x/delicious-chicken-biryani-isolated-on-transparent-background-png.png" },
    { name: "Beverages", img: "https://png.pngtree.com/png-clipart/20230916/original/pngtree-sticker-with-a-cocacola-drink-spilling-in-it-clipart-vector-png-image_12234714.png" },
  ];

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
        {filteredItems.map((item) => (
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
              {/* Name + ⭐ Rating + (reviews) */}
              <div className="name-reviews flex items-center gap-3">
                <h2 className="text-[18px] font-semibold leading-snug">
                  {item.name}
                </h2>
                <div className="reviews text-[#ff9800] text-[13px]">
                  ⭐ {Number(item.rating ?? 0).toFixed(1)}{" "}
                  <span className="text-[#555] ml-2">
                    ({(item.reviews ?? 0).toLocaleString()} reviews)
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[14px] text-[#555] leading-[1.4] mt-2">
                {item.description}
              </p>

              {/* Price */}
              <div className="price mt-3 font-bold">
                ${Number(item.price ?? 0).toFixed(2)}
              </div>
            </div>

            {/* Button */}
            <button className="cart-btn bg-[#e96610] text-white rounded-b-[8px] py-2 hover:bg-[#c85b12]">
              Add to cart
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
