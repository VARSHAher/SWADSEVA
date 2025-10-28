import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const ViewCart = () => {
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
 
  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    customerAddress: "",
    customerPhone: "",
  });
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const response = await axios.get("https://swadseva.onrender.com/api/cart");
      setCart(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error loading cart:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = async (itemId, change) => {
    try {
      await axios.patch("https://swadseva.onrender.com/api/cart", { itemId, quantity: change });

      const updatedCart = { ...cart };
      const itemToUpdate = updatedCart.items.find(item => item.itemId === itemId);

      if (itemToUpdate) {
        itemToUpdate.quantity += change;
        if (itemToUpdate.quantity <= 0) {
          updatedCart.items = updatedCart.items.filter(item => item.itemId !== itemId);
        }
        updatedCart.totalPrice = updatedCart.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
      }
      setCart(updatedCart);

    } catch (error) {
      console.error("Error updating quantity:", error.response?.data || error.message);
      setMessage("Failed to update item quantity.");
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`https://swadseva.onrender.com/api/cart/${itemId}`);

      const updatedCart = { ...cart };
      updatedCart.items = updatedCart.items.filter(item => item.itemId !== itemId);
      updatedCart.totalPrice = updatedCart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setCart(updatedCart);
      setMessage("Item removed from cart!");
    } catch (error) {
      console.error("Error removing item:", error.response?.data || error.message);
      setMessage("Failed to remove item.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleCheckout = async () => {
    try {
      if (!customerInfo.customerName || !customerInfo.customerAddress || !customerInfo.customerPhone) {
        setMessage("Please fill out all the fields before proceeding to payment.");
        return;
      }
      
      setMessage("Processing your payment...");
      await new Promise(resolve => setTimeout(resolve, 2000));

      const orderToSave = {
        items: cart.items.map(item => ({
          itemId: item.itemId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image
        })),
        totalPrice: cart.totalPrice,
        customerName: customerInfo.customerName,
        customerAddress: customerInfo.customerAddress,
        customerPhone: customerInfo.customerPhone,
      };

      await axios.post("https://swadseva.onrender.com/api/orders", orderToSave);

      await axios.delete("https://swadseva.onrender.com/api/cart/clear");

      setCart({ items: [], totalPrice: 0 });
      setMessage("Payment successful! Redirecting to orders...");
      
      setCustomerInfo({ customerName: "", customerAddress: "", customerPhone: "" });

      setTimeout(() => navigate("/orders"), 4000);

    } catch (error) {
      console.error("Error during checkout:", error.response?.data || error.message);
      setMessage("Payment failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-150px)]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#fff3eb] min-h-[calc(100vh-150px)] py-10 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Your Cart
        </h1>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 mb-4 text-center rounded-lg ${
              message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </motion.div>
        )}

        {/* rest of your JSX remains unchanged */}
      </div>
    </div>
  );
};

export default ViewCart;
