// src/pages/Orders.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

// User Orders Component
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/orders");
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();

    // Set an interval to update the status every 10 seconds
    const intervalId = setInterval(() => {
      setOrders(prevOrders => [...prevOrders]);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const getOrderStatus = (createdAt) => {
    const orderTime = new Date(createdAt).getTime();
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - orderTime) / 1000 / 60; // elapsed time in minutes

    if (elapsedTime < 3) {
      return "Preparing";
    } else if (elapsedTime < 10) {
      return "Out for Delivery";
    } else {
      return "Delivered";
    }
  };

  const formatDeliveryTime = (createdAt) => {
    const orderDate = new Date(createdAt);
    const deliveryDate = new Date(orderDate.getTime() + 10 * 60000); // 10 minutes after order
    return deliveryDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-150px)]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );

  return (
    <div className="bg-[#fff3eb] min-h-[calc(100vh-150px)] py-10 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Your Orders
        </h1>
        {orders.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center text-lg text-gray-500 py-20"
          >
            You have no past orders. Order something delicious!
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {orders.map((order) => {
              const currentStatus = getOrderStatus(order.createdAt);
              return (
                <motion.div
                  key={order._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
                >
                  <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h2 className="text-xl font-bold text-gray-800">
                      Order #{order._id.slice(-6)}
                    </h2>
                    <div className="text-sm text-gray-500">
                      <p>Order Placed: {new Date(order.createdAt).toLocaleString()}</p>
                      <p className="text-orange-500 font-semibold">
                        Estimated Delivery: {formatDeliveryTime(order.createdAt)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Display Customer Info */}
                  <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Customer Details</h3>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Name:</span> {order.customerName}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Address:</span> {order.customerAddress}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Phone:</span> {order.customerPhone}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item._id} className="flex items-center gap-4">
                        <img
                          src={item.image || "https://via.placeholder.com/60?text=No+Image"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">
                            {item.name} <span className="text-gray-500">x{item.quantity}</span>
                          </p>
                          <p className="text-sm text-gray-600">${Number(item.price).toFixed(2)} each</p>
                        </div>
                        <p className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t flex justify-between items-center">
                    <p className="text-lg font-bold">
                      Total: <span className="text-orange-500">${Number(order.totalPrice).toFixed(2)}</span>
                    </p>
                    <span
                      className={`py-1 px-3 rounded-full text-sm font-medium ${
                        currentStatus === "Delivered" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {currentStatus}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;