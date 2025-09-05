import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders");
        setOrders(response.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);


  const formatDeliveryTime = (createdAt) => {
    const orderDate = new Date(createdAt);
    const deliveryDate = new Date(orderDate.getTime() + 10 * 60000); 
    return deliveryDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
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
              const isDelivered = new Date() > new Date(order.createdAt).getTime() + 10 * 60000;
              
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
                          <p className="text-sm text-gray-600">
                            ${Number(item.price).toFixed(2)} each
                          </p>
                        </div>
                        <p className="font-bold text-gray-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t flex justify-between items-center">
                    <p className="text-lg font-bold">
                      Total:{" "}
                      <span className="text-orange-500">
                        ${Number(order.totalPrice).toFixed(2)}
                      </span>
                    </p>
                    <span
                      className={`py-1 px-3 rounded-full text-sm font-medium ${
                        isDelivered
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {isDelivered ? "Delivered" : "Delivering"}
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
