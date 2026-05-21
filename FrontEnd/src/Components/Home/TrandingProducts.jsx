import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function TrandingProducts(props) {
  const [selectedCategory, setSelectedCategory] = useState("Menswear");

  const categories = [
    { id: "Menswear", label: "Men's Casualwear" },
    { id: "Womenswear", label: "Women's Westernwear" },
    { id: "kidwear", label: "Kidswear" },
    { id: "sports", label: "Sportswear" },
  ];

  let filteredProducts = props.products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            Trending Products
          </h2>
          <p className="text-gray-500 text-center max-w-2xl">
            Discover our most sought-after pieces of the season, curated just for you.
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-zinc-900 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 hover:text-zinc-900 border border-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
