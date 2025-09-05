import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // useEffect to listen for changes in localStorage for user info
  useEffect(() => {
    const checkUser = () => {
      try {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
          const parsedUserInfo = JSON.parse(userInfo);
          setUser(parsedUserInfo.username);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to parse user info from localStorage", error);
        setUser(null);
      }
    };

    // Initial check
    checkUser();
    
    // Add a custom event listener to react to changes from the Auth component
    window.addEventListener('storageChange', checkUser);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('storageChange', checkUser);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    toast.info("You have been signed out.");
    navigate("/auth");
    
    // Dispatch a custom event to notify other components of the change
    window.dispatchEvent(new Event('storageChange'));
  };

  return (
    <header className="flex items-center justify-between py-[20px] px-[80px] sticky top-0 bg-white z-50">
      <div className="flex items-center gap-3">
        <img
          src="/logo.jpg"
          alt="SwadSeva Logo"
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <span className="text-[1.5rem] font-bold text-[#333]">
          Swad<span className="food text-[orange]">Seva</span>
        </span>
      </div>

      <nav>
        <ul className="flex list-none gap-[30px]">
          <li><Link to="/" className="text-[#333] font-medium">HOME</Link></li>
          <li><Link to="/about" className="text-[#333] font-medium">ABOUT US</Link></li>
          <li><Link to="/menu" className="text-[#333] font-medium">MENU</Link></li>
          <li><Link to="/orders" className="text-[#333] font-medium">ORDERS</Link></li>
          <li><Link to="/contact" className="text-[#333] font-medium">CONTACT</Link></li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <form className="relative flex items-center bg-white rounded-full">
          <i className="fas fa-search absolute left-3 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search food..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </form>

        <Link to="/cart" className="relative text-gray-600 hover:text-orange-600 transition-colors">
          <i className="fas fa-shopping-cart text-xl"></i>
        </Link>
        
        {user ? (
          <>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gray-800 font-medium whitespace-nowrap"
            >
              Welcome, {user}!
            </motion.span>
            <button
              onClick={handleSignOut}
              className="text-white bg-orange-600 hover:bg-orange-700 font-medium py-2 px-4 rounded-full transition-colors"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            to="/auth"
            className="text-white bg-orange-600 hover:bg-orange-700 font-medium py-2 px-4 rounded-full transition-colors"
          >
            Sign In / Sign Up
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;