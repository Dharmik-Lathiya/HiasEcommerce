import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to show submenu immediately
  const handleMouseEnter = () => {
    if (submenuTimeout) clearTimeout(submenuTimeout); // Clear timeout if hovering back quickly
    setShowSubmenu(true);
  };

  // Function to delay hiding the submenu
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowSubmenu(false);
    }, 300); // Adjust delay if needed
    setSubmenuTimeout(timeout);
  };

  return (
    <header className="w-full border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-8 lg:px-8">
        <div className="flex items-center">
          <button className="lg:hidden text-gray-600 mr-4">
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <img src={logo} alt="Logo" className="h-14 m-auto w-32" />
        </div>

        <div className="hidden lg:flex flex-1 mx-8">
          <input
            type="text"
            placeholder="Search our store"
            className="w-full border border-gray-300 rounded-l-md p-2 focus:outline-none"
          />
          <button className="bg-green-500 text-white p-2 rounded-r-md">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/Login" className="text-gray-600">
            <i className="fas fa-user"></i>
          </Link>

          <button className="text-gray-600 relative">
            <i className="far fa-heart"></i>
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>
          <Link to="/cart">
            <button className="text-gray-600 relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
            </button>
          </Link>
        </div>
      </div>

      <hr className="h-0" />

      {/* Navbar with submenu for Categories */}
      <nav className={`hidden lg:flex justify-between items-center p-7 lg:px-8 bg-white shadow-md w-full z-50 transition-all duration-500 ease-in-out ${
        isFixed ? "fixed top-0 left-0 shadow-xl" : "relative"
      }`}>
        <div className="flex items-center space-x-8">
          <button className="text-gray-600">
            <i className="fas fa-bars"></i> All Categories
          </button>
          <a href="/" className="hover:text-green-500 ml-10">Home</a>

          {/* Categories with Hover Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/Categories" className="hover:text-green-500">Categories</a>

            {/* Dropdown Menu */}
            {showSubmenu && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md z-50"
                onMouseEnter={handleMouseEnter} // Keep submenu open if hovered
                onMouseLeave={handleMouseLeave} // Hide when mouse leaves submenu
              >
                <ul className="text-gray-700">
                  <li className="px-4 py-2 hover:bg-green-100">
                    <Link to="/Categories/Menswear">MensWear</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-100">
                    <Link to="/Categories/Womenswear">WomenWear</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-100">
                    <Link to="/Categories/kidwear">KidsWear</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-100">
                    <Link to="/Categories/sports">SportsWear</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a href="/About-Us" className="hover:text-green-500">About Us</a>
          <a href="/Contect-Us" className="hover:text-green-500">Contact Us</a>
        </div>
        <span className="text-gray-600">UP TO 60% off All Items</span>
      </nav>
    </header>
  );
};

export default Header;
