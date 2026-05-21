import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  function AddToCart(product, quantity) {
    let localCart = JSON.parse(localStorage.getItem("Array")) || [];
    product["Quantity"] = quantity || 1;
    localCart.push(product);
    localStorage.setItem("Array", JSON.stringify(localCart));
    let cartCounter = parseInt(localStorage.getItem("cartCounter")) || 0;
    localStorage.setItem("cartCounter", cartCounter + 1);
    console.log("Product added to cart:", quantity, product);
  }

  const discountedPrice = product.price - (product.price * 20) / 100;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden group relative flex flex-col h-full border border-gray-100">
      {/* Sale Badge */}
      <span className="absolute top-3 left-3 bg-zinc-900 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md">
        Sale 20%
      </span>

      {/* Product Image Wrapper */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-50">
        <Link to={`/product/${product._id}`}>
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={product.imgUrl?.[0] || ""}
            alt={product.name}
          />
        </Link>

        {/* Favorite Icon */}
        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2.5 rounded-full shadow-sm text-gray-400 hover:text-red-500 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Add to Cart Button (Slide Up) */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-0 group-hover:opacity-100">
          <button
            onClick={() => AddToCart(product, 1)}
            className="w-full bg-zinc-900 text-white py-3 rounded-xl font-medium tracking-wide shadow-lg hover:bg-zinc-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-zinc-900 text-lg leading-tight line-clamp-1">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-500 text-sm line-clamp-2 flex-grow mb-4">
          {product.desc}
        </p>

        <div className="flex justify-between items-end mt-auto">
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-gray-400 line-through text-sm">₹{product.price}</span>
            <span className="font-bold text-xl text-zinc-900">
              ₹{discountedPrice}
            </span>
          </div>

          {/* Star Rating & Viewers */}
          <div className="flex flex-col items-end">
            <div className="flex space-x-0.5">
              {[1, 2, 3, 4, 5].map((val) => (
                <span
                  key={val}
                  className={`text-sm ${
                    val <= (product.star || 4) ? "text-amber-400" : "text-gray-200"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            {product.viewers && (
              <span className="text-xs text-gray-400 mt-1">{product.viewers} Views</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
