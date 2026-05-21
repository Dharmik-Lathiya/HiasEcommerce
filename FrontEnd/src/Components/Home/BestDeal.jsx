import React from 'react';
import ProductCard from "./ProductCard";
import bestDealsImage from "../../assets/Best_deals.jpg";   

export default function BestDeal({ products }) {
    let filteredProducts = products.filter(product => product.category === 'kidwear').slice(0, 6);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-gray-100 pb-6 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                            Best Deals
                        </h2>
                        <p className="text-gray-500 mt-2">Unbeatable prices on premium kidswear.</p>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-zinc-50 border border-zinc-100 rounded-2xl p-4 shadow-sm">
                        <span className="text-sm font-semibold text-zinc-600 uppercase tracking-wider">Offer ends in:</span>
                        <div className="flex gap-2 text-zinc-900 font-bold font-mono text-xl">
                            <span className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-red-500">239</span>:
                            <span className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-red-500">59</span>:
                            <span className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-red-500">12</span>
                        </div>
                    </div>
                </div>

                {/* Main Section */}
                <div className="flex flex-col lg:flex-row items-stretch gap-8">
                    {/* Featured Image */}
                    <div className="w-full lg:w-1/3">
                        <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden group shadow-lg">
                            <img
                                src={bestDealsImage}
                                alt="Best Deals"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                                <span className="text-red-400 font-bold uppercase tracking-widest text-sm mb-2">Mega Sale</span>
                                <h3 className="text-white text-3xl font-bold tracking-tight mb-4">
                                    The Kids <br/> Collection
                                </h3>
                                <button className="bg-white text-zinc-900 px-6 py-2.5 rounded-full font-medium hover:bg-zinc-100 transition-colors w-fit">
                                    Shop All Deals
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                            {filteredProducts.map((item, index) => (
                                <ProductCard key={index} product={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
