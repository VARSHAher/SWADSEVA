import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faUtensils,
  faTruckFast,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify'; 

export default function Contact({ isAdmin }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

 const handleSubmit = (event) => {
    event.preventDefault();
console.log('Form submitted!');

   
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000, 
    });

    
    setTimeout(() => {
      event.target.reset();
    }, 500);
  };

  // Function to determine the status of an order
  const getOrderStatus = (createdAt) => {
    const orderTime = new Date(createdAt).getTime();
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - orderTime) / 1000 / 60; // elapsed time in minutes

    if (elapsedTime < 3) {
      return {
        status: "In Preparation",
        icon: faUtensils,
        color: "text-blue-500",
        steps: [true, false, false],
      };
    } else if (elapsedTime < 10) {
      return {
        status: "Out for Delivery",
        icon: faTruckFast,
        color: "text-red-500",
        steps: [true, true, false],
      };
    } else {
      return {
        status: "Delivered",
        icon: faCheckCircle,
        color: "text-green-500",
        steps: [true, true, true],
      };
    }
  };

  useEffect(() => {
    // Only fetch and track orders if the user is an admin
    if (isAdmin) {
      const fetchOrders = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/orders");
          const activeOrders = res.data.filter(
            (order) => getOrderStatus(order.createdAt).status !== "Delivered"
          );
          setOrders(activeOrders);
        } catch (err) {
          console.error("Error fetching orders:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchOrders();

      // Set an interval to re-fetch orders and update status every 30 seconds
      const intervalId = setInterval(fetchOrders, 30000);

      // Clean up the interval when the component unmounts or isAdmin status changes
      return () => clearInterval(intervalId);
    }
  }, [isAdmin]);

  const formatOrderTime = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleString();
  };

  const timelineSteps = ["In Preparation", "Out for Delivery", "Delivered"];

  // Conditional Rendering: If admin, show track order page
  if (isAdmin) {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-[calc(100vh-150px)]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      );
    }

    return (
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          <FontAwesomeIcon icon={faTruckFast} className="text-orange-600 mr-4" />
          Track All Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center p-10 bg-gray-50 rounded-lg shadow-inner">
            <p className="text-xl font-semibold text-gray-600">
              No active orders to track.
            </p>
            <p className="text-gray-500 mt-2">All orders are currently delivered.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => {
              const currentStatus = getOrderStatus(order.createdAt);
              return (
                <motion.div
                  key={order._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-600"
                >
                  <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        Order ID:{" "}
                        <span className="text-orange-600 font-normal">
                          #{order._id.slice(0, 8)}
                        </span>
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Placed on {formatOrderTime(order.createdAt)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xl font-bold">
                      <FontAwesomeIcon
                        icon={currentStatus.icon}
                        className={`${currentStatus.color}`}
                      />
                      <span className={`${currentStatus.color}`}>
                        {currentStatus.status}
                      </span>
                    </div>
                  </div>

                  {/* User Information */}
                  <div className="mb-6 bg-gray-50 p-4 rounded-md shadow-sm">
                    <h3 className="font-semibold text-lg text-gray-700">
                      Customer Details
                    </h3>
                    <p className="text-gray-600 mt-1">
                      <span className="font-medium">Name:</span>{" "}
                      {order.customerName}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Address:</span>{" "}
                      {order.customerAddress}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Phone:</span>{" "}
                      {order.customerPhone}
                    </p>
                  </div>

                  {/* Order Details and Timeline */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Order Items */}
                    <div>
                      <h3 className="font-semibold text-lg text-gray-700 mb-3">
                        Order Items
                      </h3>
                      <div className="space-y-3">
                        {order.items.map((item) => (
                          <div key={item.itemId} className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg shadow"
                            />
                            <div className="flex-1">
                              <p className="font-semibold text-gray-800">
                                {item.name}{" "}
                                <span className="text-gray-500">x{item.quantity}</span>
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
                      </div>
                    </div>

                    {/* Order Timeline */}
                    <div className="relative pt-4">
                      <h3 className="font-semibold text-lg text-gray-700 mb-6 pl-8">
                        Delivery Timeline
                      </h3>
                      <div className="absolute left-3 top-0 bottom-0 w-1 bg-gray-200 rounded-full h-full"></div>
                      <div
                        className="absolute left-3 top-4 w-1 bg-orange-600 rounded-full transition-all duration-500"
                        style={{
                          height: `${
                            (currentStatus.steps.filter((s) => s).length / 3) * 90
                          }%`,
                        }}
                      ></div>
                      <div className="flex flex-col space-y-8 pl-8">
                        {timelineSteps.map((step, index) => (
                          <div key={index} className="flex items-center gap-4 relative">
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                                currentStatus.steps[index]
                                  ? "bg-orange-600 text-white"
                                  : "bg-gray-300 text-gray-500"
                              }`}
                            >
                              <FontAwesomeIcon
                                icon={[faUtensils, faTruckFast, faCheckCircle][index]}
                              />
                            </div>
                            <div className="flex-1">
                              <p
                                className={`font-semibold transition-colors duration-300 ${
                                  currentStatus.steps[index]
                                    ? "text-gray-800"
                                    : "text-gray-500"
                                }`}
                              >
                                {step}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Original Contact page content for regular users
  return (
    <div>
      <section
        id="contact"
        className="contact-section max-w-[1000px] mx-auto p-8 text-center"
      >
        <h2 className="text-[2rem] font-bold mb-6">
          Please Get In <span className="brand text-[#e96610]">Touch With Us</span>
        </h2>

        <div className="contact-info flex flex-wrap justify-center gap-6 mb-8">
          <div className="info-card bg-white rounded-[12px] p-6 max-w-[220px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition">
            <span className="text-2xl block mb-2">📍</span>
            <h3 className="text-lg font-semibold mb-1">Address</h3>
            <p className="text-[#666]">A108 Adam Street, New York, NY 535022</p>
          </div>
          <div className="info-card bg-white rounded-[12px] p-6 max-w-[220px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition">
            <span className="text-2xl block mb-2">📞</span>
            <h3 className="text-lg font-semibold mb-1">Call Us</h3>
            <p className="text-[#666]">+1 5589 55488 55</p>
          </div>
          <div className="info-card bg-white rounded-[12px] p-6 max-w-[220px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition">
            <span className="text-2xl block mb-2">📧</span>
            <h3 className="text-lg font-semibold mb-1">Email Us</h3>
            <p className="text-[#666]">info@example.com</p>
          </div>
          <div className="info-card bg-white rounded-[12px] p-6 max-w-[220px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition">
            <span className="text-2xl block mb-2">⏰</span>
            <h3 className="text-lg font-semibold mb-1">Opening Hours</h3>
            <p className="text-[#666]">Mon - Sat: 11AM - 23PM</p>
          </div>
        </div>

          {/* FORM */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] mx-auto"  onSubmit={handleSubmit}>
            
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-3 border border-[#e96610] rounded"
              />
              <input
                type="text"
                placeholder="Phone"
                className="px-4 py-3 border border-[#e96610] rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 border border-[#e96610] rounded md:col-span-2"
              />
              <input
                type="text"
                placeholder="Address"
                className="px-4 py-3 border border-[#e96610] rounded md:col-span-2"
              />
              <input
                type="text"
                placeholder="City"
                className="px-4 py-3 border border-[#e96610] rounded"
              />
              <input
                type="text"
                placeholder="State"
                className="px-4 py-3 border border-[#e96610] rounded"
              />

              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  aria-label="Submit"
                  className="relative group inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-md font-semibold shadow-sm transition-colors w-40"
                >
                  {/* Submit Label */}
                  <span className="transition-transform duration-300 group-hover:-translate-x-2">
                    Submit
                  </span>

                  {/* Tick Icon */}
                  <span className="absolute right-4 flex items-center opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-xl text-green-300" />
                  </span>
                </button>
              </div>
            </form>
          </section>
          <ToastContainer />
      
    </div>
  );
}
