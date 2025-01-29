import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";


export default function TrandingProducts(props) {


    const [selectedCategory, setSelectedCategory] = useState("Menswear");

    let filteredProducts = props.products.filter((product)=>{
            return product.category == selectedCategory ? product : 0;
    })
    


    return (
        <>
            <h2 className="mt-10 lg:mt-44 lg:ml-5 text-4xl font-semibold">Trending Products</h2>

            <div className="my-6 ml-6 gap-6 text-2xl flex flex-wrap">
                <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('Menswear')}>Mens Casualwear</span>
                <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('Womenswear')}>Womens Westernwear</span>
                <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('kidwear')}>Sportswear</span>
                <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('sports')}>Officewear</span>
            </div>

            <div className="my-5 flex flex-wrap">
                {filteredProducts.map((product, i) => (
                    <div key={i} className="ml-[2vw] w-full sm:w-72 bg-white rounded-lg shadow-2xl h-auto my-5  ">
                        <span className="bg-green-600 px-4 py-2 absolute m-3 text-slate-100 rounded-tl-lg rounded-br-lg">Sale</span>
                        <div>
                        
                            <Link
                                to={`/product/${product._id}`}
                                className="text-blue-500 hover:underline"
                            >
                                <img
                                    className="w-72 h-72 box-border rounded-tl-lg rounded-tr-lg"
                                    src={product.imgUrl[0]}
                                    alt={product.name}
                                />
                            </Link>

                        </div>
                        <div className="p-5 font-poppins">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">{product.name}</h3>
                            </div>

                            <div className="mt-2 text-sm text-gray-600">
                                <p>{product.desc.slice(0, 50)+" . . ."}</p>
                            </div>

                            <div className="mt-4 text-sm text-gray-600">
                                <h5 className="mt-2 font-semibold">Hias</h5>
                            </div>

                            <div className="flex items-center mt-2">
                                <div>
                                    <span className="font-semibold text-lg">₹</span>
                                    <span className="font-bold text-2xl">{product.price - (product.price * 20)/100 }</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 line-through ml-2">₹{product.price}</span>
                                </div>
                            </div>
                            <div className="flex space-x-1">
                                {[5, 4, 3, 2, 1].map((val) => (
                                    <label key={val}>
                                        <input type="radio" name="rating" value={product.star} className="hidden" />
                                        <span className="text-red-500 cursor-pointer text-xl">&#9733;</span>
                                    </label>
                                ))}
                                <span className="text-slate-400 ml-10">In Stock {product.stock} Items</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
