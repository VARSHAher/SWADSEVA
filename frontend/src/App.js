// src/App.js

import { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Cart from "./pages/ViewCart";
import Auth from "./pages/Auth";
import AdminMenuForm from "./pages/AdminMenuForm";
// Removed the separate TrackOrder import as it is now part of Contact.js

function App() {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const previousPathRef = useRef(location.pathname);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/menu");
      if (Array.isArray(response.data)) {
        setMenuItems(response.data);
      } else {
        console.error("API did not return an array:", response.data);
        setMenuItems([]);
      }
    } catch (error) {
      console.error("Error fetching menu items:", error);
      setMenuItems([]);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUser) {
      setUser(storedUser);
    }
    fetchMenuItems();
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setUser(userData);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/auth");
  };

  const isAdmin = user?.role === "admin";

  return (
    <div className="font-poppins text-[#333] bg-white">
      <Header
        user={user}
        onLogout={handleLogout}
        isAdmin={isAdmin}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        menuItems={menuItems}
      />

      <main className="min-h-screen">
        <Routes>
          <Route path="/about" element={<About isAdmin={isAdmin} />} />
          <Route
            path="/menu"
            element={
              <Menu
                isAdmin={isAdmin}
                searchQuery={searchQuery}
                menuItems={menuItems}
              />
            }
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact" element={<Contact isAdmin={isAdmin} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
          <Route path="/" element={<Home isAdmin={isAdmin} />} />

          {isAdmin && (
            <>
              <Route path="/admin/create-menu" element={<AdminMenuForm />} />
            </>
          )}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
