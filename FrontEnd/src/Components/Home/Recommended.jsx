import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function Recommended(props) {
    const [selectedCategory, setSelectedCategory] = useState('Menswear');
    
    const categories = [
        { id: "Menswear", label: "Men's Casualwear" },
        { id: "Womenswear", label: "Women's Westernwear" },
        { id: "kidwear", label: "Kidswear" },
        { id: "sports", label: "Sportswear" },
    ];

    let filteredProducts = props.products.filter((product) => {
        return product.category === selectedCategory;
    }).slice(0, 4);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                            Recommended for You
                        </h2>
                        <p className="text-gray-500 mt-2 max-w-xl">
                            Based on your recent activity, we've curated these pieces just for you.
                        </p>
                    </div>
                    
                    {/* Category Selection Tabs */}
                    <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    selectedCategory === category.id
                                    ? "bg-white text-zinc-900 shadow-sm"
                                    : "text-gray-500 hover:text-zinc-900"
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    {filteredProducts.map((product, i) => (
                        <ProductCard key={i} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
