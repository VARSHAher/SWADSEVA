

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const AdminMenuForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const itemToUpdate = location.state?.itemToUpdate;

  const [formData, setFormData] = useState({
    foodName: "",
    imageURL: "",
    rating: "",
    reviews: "",
    description: "",
    price: "",
    category: "",
    restaurantName: "",
    restaurantLogo: "",
  });

  useEffect(() => {
    if (itemToUpdate) {
      setFormData({
        foodName: itemToUpdate.name || "",
        imageURL: itemToUpdate.image || "",
        rating: itemToUpdate.ratings || "",
        reviews: itemToUpdate.reviews || "",
        description: itemToUpdate.description || "",
        price: itemToUpdate.price || "",
        category: itemToUpdate.category || "",
        restaurantName: itemToUpdate.restaurantName || "",
        restaurantLogo: itemToUpdate.restaurantLogo || "",
      });
    }
  }, [itemToUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.foodName,
        image: formData.imageURL,
        ratings: formData.rating,
        reviews: formData.reviews,
        description: formData.description,
        price: formData.price,
        category: formData.category,
        restaurantName: formData.restaurantName,
        restaurantLogo: formData.restaurantLogo,
      };

      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };

      if (itemToUpdate) {
  await axios.put(
    `https://swadseva.onrender.com/api/menu/${itemToUpdate._id}`,
    payload,
    config
  );
  toast.success("Menu item updated successfully!");
} else {
  await axios.post("https://swadseva.onrender.com/api/menu", payload, config);
  toast.success("Menu item created successfully!");
}


      setFormData({
        foodName: "",
        imageURL: "",
        rating: "",
        reviews: "",
        description: "",
        price: "",
        category: "",
        restaurantName: "",
        restaurantLogo: "",
      });

      navigate("/menu");
    } catch (err) {
      console.error(err);
      toast.error("Failed to save menu item.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fff3eb] p-8">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">
          {itemToUpdate ? "Update Menu Item" : "Create Menu Item"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Your form JSX here, with input values tied to formData */}
          {/* Food Name */}
          <div>
            <label className="block text-gray-700 font-medium">Food Name</label>
            <input
              type="text"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              placeholder="e.g., Chicken Biryani"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-medium">Image URL</label>
            <input
              type="text"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              placeholder="e.g., https://example.com/image.jpg"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">Select a Category</option>
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Cake">Cake</option>
              <option value="Dessert">Dessert</option>
              <option value="Biriyani">Biriyani</option>
              <option value="Beverage">Beverage</option>
            </select>
          </div>
          {/* Rating */}
          <div>
            <label className="block text-gray-700 font-medium">
              Rating (1-5)
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="e.g., 4.5"
              step="0.1"
              min="0"
              max="5"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          {/* Reviews */}
          <div>
            <label className="block text-gray-700 font-medium">Reviews</label>
            <input
              type="number"
              name="reviews"
              value={formData.reviews}
              onChange={handleChange}
              placeholder="e.g., 120"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="A short description of the item."
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="4"
            ></textarea>
          </div>
          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., 9.99"
              step="0.01"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          {/* Restaurant Name */}
          <div>
            <label className="block text-gray-700 font-medium">
              Restaurant Name
            </label>
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              placeholder="e.g., SwadSeva Restaurant"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          {/* Restaurant Logo */}
          <div>
            <label className="block text-gray-700 font-medium">
              Restaurant Logo URL
            </label>
            <input
              type="text"
              name="restaurantLogo"
              value={formData.restaurantLogo}
              onChange={handleChange}
              placeholder="e.g., https://example.com/logo.png"
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors hover:bg-orange-700"
          >
            {itemToUpdate ? "Update Item" : "Create Menu Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminMenuForm;
