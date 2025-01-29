import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";


export default function TrandingProducts() {

    const categories = {
        MensCasualwear: [
            {
                id: 1,
                imgUrl: "src/assets/Product_1.jpg",
                title: "Mens Casualwear 1",
                content: "Description for Mens Casualwear 1",
                brandName: "Brand 1",
                newPrice: 100,
                oldPrice: 200,
                star: 3,
                viewers: 1000
            },
            {
                id: 2,
                imgUrl: "src/assets/Product_1.jpg",
                title: "Mens Casualwear 1",
                content: "Description for Mens Casualwear 1",
                brandName: "Brand 1",
                newPrice: 100,
                oldPrice: 200,
                star: 3,
                viewers: 1000
            }, {
                id: 3,
                imgUrl: "src/assets/Product_1.jpg",
                title: "Mens Casualwear 1",
                content: "Description for Mens Casualwear 1",
                brandName: "Brand 1",
                newPrice: 100,
                oldPrice: 200,
                star: 3,
                viewers: 1000
            },
            {
                id: 4,
                imgUrl: "src/assets/Product_2.jpg",
                title: "Womens Westernwear 1",
                content: "Description for Womens Westernwear 1",
                brandName: "Brand 2",
                newPrice: 150,
                oldPrice: 250,
                star: 4,
                viewers: 1200
            },
            {
                id: 5,
                imgUrl: "src/assets/Product_2.jpg",
                title: "Womens Westernwear 1",
                content: "Description for Womens Westernwear 1",
                brandName: "Brand 2",
                newPrice: 150,
                oldPrice: 250,
                star: 4,
                viewers: 1200
            },
            {
                id: 6,
                imgUrl: "src/assets/Product_4.png",
                title: "Officewear 1",
                content: "Description for Officewear 1",
                brandName: "Brand 4",
                newPrice: 250,
                oldPrice: 350,
                star: 4,
                viewers: 1300
            }, {
                id: 7,
                imgUrl: "src/assets/Product_4.png",
                title: "Officewear 1",
                content: "Description for Officewear 1",
                brandName: "Brand 4",
                newPrice: 250,
                oldPrice: 350,
                star: 4,
                viewers: 1300
            }, {
                id: 8,
                imgUrl: "src/assets/Product_4.png",
                title: "Officewear 1",
                content: "Description for Officewear 1",
                brandName: "Brand 4",
                newPrice: 250,
                oldPrice: 350,
                star: 4,
                viewers: 1300
            },
            // Add more products here
        ],
        WomensWesternwear: [
            {
                id: 9,
                imgUrl: "src/assets/Product_2.jpg",
                title: "Womens Westernwear 1",
                content: "Description for Womens Westernwear 1",
                brandName: "Brand 2",
                newPrice: 150,
                oldPrice: 250,
                star: 4,
                viewers: 1200
            },
            // Add more products here
        ],
        Sportswear: [
            {
                id: 10,
                imgUrl: "src/assets/Product_3.png",
                title: "Sportswear 1",
                content: "Description for Sportswear 1",
                brandName: "Brand 3",
                newPrice: 200,
                oldPrice: 300,
                star: 5,
                viewers: 1500
            },
        ],
        Officewear: [
            {
                id: 11,
                imgUrl: "src/assets/Product_4.png",
                title: "Officewear 1",
                content: "Description for Officewear 1",
                brandName: "Brand 4",
                newPrice: 250,
                oldPrice: 350,
                star: 4,
                viewers: 1300
            },
            // Add more products here
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('MensCasualwear');

    return (
        <>
            <h2 className="mt-10 lg:mt-44 lg:ml-5 text-4xl font-semibold">Trending Products</h2>

            <div className="my-6 ml-6 gap-6 text-2xl flex flex-wrap">
                <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('MensCasualwear')}>Mens Casualwear</span>
                <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('WomensWesternwear')}>Womens Westernwear</span>
                <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('Sportswear')}>Sportswear</span>
                <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('Officewear')}>Officewear</span>
            </div>

            <div className="my-5 flex flex-wrap">
                {categories[selectedCategory].map((product, i) => (
                    <div key={i} className="ml-[2vw] w-full sm:w-72 bg-white rounded-lg shadow-2xl h-auto my-5  ">
                        <span className="bg-green-600 px-4 py-2 absolute m-3 text-slate-100 rounded-tl-lg rounded-br-lg">Sale</span>
                        <div>
                        
                            <Link
                                to={`/product/${product.id}`}
                                className="text-blue-500 hover:underline"
                            >
                                <img
                                    className="w-72 h-72 box-border rounded-tl-lg rounded-tr-lg"
                                    src={product.imgUrl}
                                    alt={product.title}
                                />
                            </Link>

                        </div>
                        <div className="p-5 font-poppins">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">{product.title}</h3>
                            </div>

                            <div className="mt-2 text-sm text-gray-600">
                                <p>{product.content}</p>
                            </div>

                            <div className="mt-4 text-sm text-gray-600">
                                <h5 className="mt-2 font-semibold">{product.brandName}</h5>
                            </div>

                            <div className="flex items-center mt-2">
                                <div>
                                    <span className="font-semibold text-lg">₹</span>
                                    <span className="font-bold text-2xl">{product.newPrice}</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 line-through ml-2">₹{product.oldPrice}</span>
                                </div>
                            </div>
                            <div className="flex space-x-1">
                                {[5, 4, 3, 2, 1].map((val) => (
                                    <label key={val}>
                                        <input type="radio" name="rating" value={product.star} className="hidden" />
                                        <span className="text-red-500 cursor-pointer text-xl">&#9733;</span>
                                    </label>
                                ))}
                                <span className="text-slate-300 ml-10">{product.viewers} Views</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
