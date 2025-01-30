import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showHoverSubmenu, setShowHoverSubmenu] = useState(false);
  const [showClickSubmenu, setShowClickSubmenu] = useState(false);
  const [cartCounter, setCartCounter] = useState(localStorage.getItem("cartCounter") || 0);

  let isLogedIn = JSON.parse(localStorage.getItem("isLogedIn"));

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    setCartCounter(localStorage.getItem("cartCounter") || 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleClickSubmenu = () => setShowClickSubmenu(!showClickSubmenu);
  const handleMouseEnter = () => setShowHoverSubmenu(true);
  const handleMouseLeave = () => setShowHoverSubmenu(false);

  const Submenu = ({ isVisible }) => (
    <div 
      className={`absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md z-50 transition-all duration-300 ${isVisible ? "block" : "hidden"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="text-gray-700">
        <li className="px-4 py-2 hover:bg-green-100">
          <Link to="/Categories/Menswear">MensWear</Link>
        </li>
        <li className="px-4 py-2 hover:bg-green-100">
          <Link to="/Categories/Womenswear">WomenWear</Link>
        </li>
        <li className="px-4 py-2 hover:bg-green-100">
          <Link to="/Categories/Kidwear">KidsWear</Link>
        </li>
        <li className="px-4 py-2 hover:bg-green-100">
          <Link to="/Categories/Sports">SportsWear</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <header className="w-full border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center">
          <button className="lg:hidden text-gray-600 mr-4" onClick={toggleClickSubmenu}>
            <i className="fas fa-bars text-2xl"></i>
          </button>
          {showClickSubmenu && <Submenu isVisible={true} />}
          <img src={logo} alt="Logo" className="h-14 w-32" />
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
          <Link to={isLogedIn ? "/user" : "/Login"} className="text-gray-600">
            <i className="fas fa-user"></i>
          </Link>
          <button className="text-gray-600 relative">
            <i className="far fa-heart"></i>
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>
          <Link to="/Cart">
            <button className="text-gray-600 relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{cartCounter}</span>
            </button>
          </Link>
        </div>
      </div>

      <nav className={`hidden border-t lg:flex justify-between items-center p-7 lg:px-8 bg-white shadow-md w-full z-50 transition-all duration-500 ease-in-out ${isFixed ? "fixed top-0 left-0 shadow-xl" : "relative"}`}>
        <div className="flex items-center space-x-8">
          <button className="text-gray-600" onClick={toggleClickSubmenu}>
            <i className="fas fa-bars"></i> All Categories
          </button>
          {showClickSubmenu && <Submenu isVisible={true} />}
          <Link to="/" className="hover:text-green-500">Home</Link>
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to="/Categories" className="hover:text-green-500">Categories</Link>
            {showHoverSubmenu && <Submenu isVisible={true} />}
          </div>
          <Link to="/About-Us" className="hover:text-green-500">About Us</Link>
          <Link to="/Contact-Us" className="hover:text-green-500">Contact Us</Link>
        </div>
        <span className="text-gray-600">UP TO 60% off All Items</span>
      </nav>
    </header>
  );
};

export default Header;
