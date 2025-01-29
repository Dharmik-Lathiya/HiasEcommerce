import React from "react";
import Slider from "react-slick";

function SwipeToSlide() {
    const Menscasualwear = [
        {
            imgUrl: "src/assets/Product_1.jpg",
            CategoryName: "Mens Casualwear 1",
            Items: 20,
        },
        {
            imgUrl: "src/assets/Product_1.jpg",
            CategoryName: "WoMens Casualwear 1",
            Items: 220,
        },
        {
            imgUrl: "src/assets/Product_1.jpg",
            CategoryName: "Mens 1",
            Items: 230,
        },
        {
            imgUrl: "src/assets/Product_2.jpg",
            CategoryName: "WOMEB Mens Casualwear 1",
            Items: 260,
        },
        {
            imgUrl: "src/assets/Product_2.jpg",
            CategoryName: "ns Casualwear 1",
            Items: 20,
        },
        {
            imgUrl: "src/assets/Product_4.png",
            CategoryName: "OMens Casualwear 1",
            Items: 50,
        },
    ];

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 6, // 7-8 slides on large screens
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1280, // Large screens
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1024, // Medium screens (tablets)
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 768, // Small screens
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480, // Extra small screens (mobiles)
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <>
            <div className="ml-5 my-12 text-3xl font-semibold">
                <p>Collection List</p>
            </div>
            <div className="slider-container px-3">
                <Slider {...settings}>
                    {Menscasualwear.map((item, index) => (
                        <div
                            key={index}
                            className="text-center flex flex-col items-center space-y-3 px-3"
                        >
                            {/* Rounded Full Image */}
                            <img
                                src={item.imgUrl}
                                alt={item.CategoryName}
                                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover mx-auto shadow-lg"
                            />
                            {/* Category Name and Item Count */}
                            <div>
                                <p className="text-gray-800 font-semibold text-sm lg:text-base">
                                    {item.CategoryName}
                                </p>
                                <p className="text-gray-500 text-xs lg:text-sm">
                                    {item.Items} Items
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default SwipeToSlide;
