import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";



export default function RecentlyViewed() {

    const MensCasualwear = [
        {
            id: 1,
            imgUrl: "src/assets/Product_1.jpg",
            title: "Mens Casualwear 1",
            content: "Description for Mens Casualwear 1",
            brandName: "Brand 1",
            newPrice: 100,
            oldPrice: 200,
            star: 3,
            viewers: 1000,
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
            viewers: 1000,
        },
        {
            id: 3,
            imgUrl: "src/assets/Product_1.jpg",
            title: "Mens Casualwear 1",
            content: "Description for Mens Casualwear 1",
            brandName: "Brand 1",
            newPrice: 100,
            oldPrice: 200,
            star: 3,
            viewers: 1000,
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
            viewers: 1200,
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
            viewers: 1200,
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
            viewers: 1300,
        },
        // Add more products here if needed
    ];

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: { slidesToShow: 6 },
            },
            {
                breakpoint: 1200,
                settings: { slidesToShow: 5 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 },
            },
        ],
    };

    return (
        <>
            <div className="w-full text-center my-12 text-3xl font-semibold">
                <p>Trending This Week</p>
            </div>
            <div className="slider-container my-10">
                <Slider {...settings}>
                    {MensCasualwear.map((product, i) => (
                        <div key={i} className="px-2">
                            <div className="group relative bg-white rounded-lg border overflow-hidden">
                                <span className="bg-green-600 px-4 py-2 absolute m-3 text-white rounded-tl-lg rounded-br-lg">
                                    Sale
                                </span>
                                <div className="relative overflow-hidden">
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        <img
                                            className="w-full h-52 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                                            src={product.imgUrl}
                                            alt={product.title}
                                        />
                                    </Link>
                                    <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-300">
                                        ❤️
                                    </button>
                                    <button className="absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-green-600 text-white px-6 py-2 transition-all duration-300 shadow-lg">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="mt-4 px-4">
                                    <h3 className="font-semibold text-lg">{product.title}</h3>
                                    <p className="mt-2 text-sm text-gray-600">{product.content}</p>
                                    <h5 className="mt-2 font-semibold">{product.brandName}</h5>
                                    <div className="flex items-center mt-2">
                                        <div>
                                            <span className="font-semibold text-lg">₹</span>
                                            <span className="font-bold text-2xl">{product.newPrice}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400 line-through ml-2">
                                                ₹{product.oldPrice}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 mt-2 items-center">
                                        {[5, 4, 3, 2, 1].map((val) => (
                                            <span
                                                key={val}
                                                className={`text-xl ${val <= product.star ? "text-red-500" : "text-gray-300"
                                                    }`}
                                            >
                                                &#9733;
                                            </span>
                                        ))}
                                        <span className="text-gray-500 ml-auto">
                                            {product.viewers} Views
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
