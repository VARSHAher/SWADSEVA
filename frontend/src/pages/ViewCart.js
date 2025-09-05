import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const ViewCart = () => {
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart");
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
      await axios.patch("http://localhost:5000/api/cart", { itemId, quantity: change });

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
      await axios.delete(`http://localhost:5000/api/cart/${itemId}`);

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

const handleCheckout = async () => {
  try {
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
    };

    // Save order
    await axios.post("http://localhost:5000/api/orders", orderToSave);

    // Clear cart
    await axios.delete("http://localhost:5000/api/cart/clear");

    // Update state
    setCart({ items: [], totalPrice: 0 });
    setMessage("Payment successful! Redirecting to orders...");

    // Redirect after 4s
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

        {cart.items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <p className="text-2xl font-semibold text-gray-500 mb-4">
              Your cart is empty.
            </p>
            <p className="text-gray-400 mb-8 max-w-sm">
              Looks like you haven't added any items to your cart yet. Head back to the menu to explore delicious options!
            </p>
            <Link 
              to="/menu"
              className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-colors"
            >
              Start Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {cart.items.map((item) => (
              <motion.div
                key={item.itemId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-lg p-4"
              >
                <img
                  src={item.image || "https://via.placeholder.com/100?text=No+Image"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4 mb-4 sm:mb-0"
                />
                
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${Number(item.price).toFixed(2)} per item</p>
                </div>

                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                  <button
                    onClick={() => handleQuantityChange(item.itemId, -1)}
                    className="p-2 w-8 h-8 flex justify-center items-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.itemId, 1)}
                    className="p-2 w-8 h-8 flex justify-center items-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                  >
                    +
                  </button>
                </div>

                <div className="text-lg font-bold w-full sm:w-auto text-center sm:text-right mt-4 sm:mt-0 ml-0 sm:ml-8">
                  ${(Number(item.price) * item.quantity).toFixed(2)}
                </div>

                <button
                  onClick={() => handleRemoveItem(item.itemId)}
                  className="mt-4 sm:mt-0 sm:ml-4 text-red-500 hover:text-red-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.035 21H7.965a2 2 0 01-1.996-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </motion.div>
            ))}

            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 p-6 bg-white rounded-xl shadow-lg">
              <p className="text-2xl font-bold mb-4 sm:mb-0">
                Total: <span className="text-orange-500">${Number(cart.totalPrice).toFixed(2)}</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCheckout}
                className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-colors transform hover:shadow-xl hover:translate-y-[-2px] focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Proceed to Pay
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCart;
