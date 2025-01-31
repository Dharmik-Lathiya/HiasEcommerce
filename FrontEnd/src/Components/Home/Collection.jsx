import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";

function SwipeToSlide() {
    const Menscasualwear = [
        {
            imgUrl: "src/assets/Category_banner_1.jpg",
            CategoryName: "Menswear",
            Items: 20,
        },
        {
            imgUrl: "src/assets/Category_banner_2.jpg",
            CategoryName: "Womenswear",
            Items: 220,
        },
        {
            imgUrl: "src/assets/Category_banner_3.jpg",
            CategoryName: "kidwear",
            Items: 230,
        },
        {
            imgUrl: "src/assets/Category_banner_4.jpg",
            CategoryName: "sports",
            Items: 260,
        },
    ];

    const settings = {
        infinite: true,
        swipeToSlide: true,
        arrows: false, // Hide arrows for cleaner mobile UI
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1280, 
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="px-4 md:px-8 lg:px-16 my-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                Collection List
            </h2>
            <div className="slider-container">
                <Slider {...settings}>
                    {Menscasualwear.map((item, index) => (
                        <div
                            key={index}
                            className="text-center flex flex-col items-center justify-items-center space-y-2 px-2"
                        >
                            <Link to={`/Categories/${item.CategoryName}`}>
                            <img
                                src={item.imgUrl}
                                alt={item.CategoryName}
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
                            />
                            </Link>
                            <div>
                                <p className="text-gray-900 font-medium text-xs sm:text-sm lg:text-base">
                                    {item.CategoryName}
                                </p>
                                <p className="text-gray-500 text-xs sm:text-sm">
                                    {item.Items} Items
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SwipeToSlide;
