import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="w-full border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-8 lg:px-8 ">
        <div className="flex items-center">
          <button className="lg:hidden text-gray-600 mr-4 ">
          <i className="fas fa-bars text-2xl"></i>
          </button>
          <img
            src={logo} alt="Logo" className="h-14 m-auto w-32" 
          />
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
          <Link  to="/Login" className="text-gray-600" >
          <i className="fas fa-user"></i>
          </Link> 
          
          
          <button className="text-gray-600 relative">
          <i className="far fa-heart"></i>
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </button>
          <button className="text-gray-600 relative">
          <i className="fas fa-shopping-cart"></i>
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </button>
        </div>
      </div>
      <hr className="h-0"/>
      <nav className="hidden lg:flex justify-between items-center p-4 lg:px-8">
        <div className="flex items-center space-x-8">
          <button className="text-gray-600">
            <i className="fas fa-bars"></i> All Categories
          </button>
            <a href="#" className="hover:text-green-500">Home</a>
            <a href="#" className="hover:text-green-500">Categories</a>
            <a href="#" className="hover:text-green-500">About Us</a>
            <a href="#" className="hover:text-green-500">Contact Us</a>
        </div>
        <span className="text-gray-600">UP TO 60% off All Items</span>
      </nav>
    </header>
  );
};

export default Header;