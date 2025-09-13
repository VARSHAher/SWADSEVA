import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Header = ({ user, onLogout, isAdmin, searchQuery, setSearchQuery, menuItems }) => {
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);
  const searchBarRef = useRef(null);

  const handleSignOut = () => {
    onLogout();
    toast.info("You have been signed out.");
    navigate("/auth");
  };

 
  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

 
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(e.target.value.length > 0);
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

      {/* Navigation */}
      <nav>
        <ul className="flex list-none gap-[30px]">
          <li>
            <Link to="/" className="text-[#333] font-medium hover:text-orange-600 transition-colors">
              {isAdmin ? "DASHBOARD" : "HOME"}
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-[#333] font-medium hover:text-orange-600 transition-colors">
              {isAdmin ? "CUSTOMER ORDERS" : "ABOUT"}
            </Link>
          </li>
          <li>
            <Link to="/menu" className="text-[#333] font-medium hover:text-orange-600 transition-colors ">
              MENU
            </Link>
          </li>
          {/* Conditional rendering for the Orders/Create link */}
          <li>
            <Link 
              to={isAdmin ? "/admin/create-menu" : "/orders"} 
              className="text-[#333] font-medium hover:text-orange-600 transition-colors"
            >
              {isAdmin ? "CREATE MENU" : "ORDERS"}
            </Link>
          </li>

          <li>
            {/* The only line I have changed */}
            <Link to="/contact" className="text-[#333] font-medium hover:text-orange-600 transition-colors">
              {isAdmin ? "TRACK ORDER" : "CONTACT"}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Search Bar, Cart, and Auth */}
      <div className="flex items-center gap-4">
        <div className="relative" ref={searchBarRef}>
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search food..."
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setShowResults(searchQuery.length > 0)}
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {showResults && searchQuery.length > 0 && (
            <div className="absolute top-full mt-2 w-full max-h-64 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <Link
                    key={item._id}
                    to={`/menu?q=${item.name}`} // Navigate to menu and apply search filter
                    onClick={() => {
                      setSearchQuery(item.name); // Set query to selected item name
                      setShowResults(false);
                    }}
                    className="flex items-center gap-4 p-3 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-md" />
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">${Number(item.price).toFixed(2)}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>

        {!isAdmin && (
          <Link
            to="/cart"
            className="relative text-gray-600 hover:text-orange-600 transition-colors"
          >
            <i className="fas fa-shopping-cart text-xl"></i>
          </Link>
        )}

        {user ? (
          <>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gray-800 font-medium whitespace-nowrap"
            >
              Welcome, {user.username}!
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
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
