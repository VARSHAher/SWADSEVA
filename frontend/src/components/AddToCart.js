import React from "react";
import axios from "axios";

const AddToCartButton = ({ item }) => {
  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:5000/api/cart", {
        itemId: item._id,
        name: item.name,
        price: item.price,
        image: item.image,
      });
      alert(`${item.name} added to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error.message);
      alert("Failed to add item to cart");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="cart-btn bg-[#e96610] text-white rounded-b-[8px] py-2 hover:bg-[#c85b12]"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
