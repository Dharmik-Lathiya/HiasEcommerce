import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import categoryBanner1 from "../../assets/Category_banner_1.jpg";
import categoryBanner2 from "../../assets/Category_banner_2.jpg";
import categoryBanner3 from "../../assets/Category_banner_3.jpg";
import categoryBanner4 from "../../assets/Category_banner_4.jpg";

function SwipeToSlide() {
    const categories = [
        {
            imgUrl: categoryBanner2,
            CategoryName: "Menswear",
            label: "Men's Fashion",
            Items: 20,
        },
        {
            imgUrl: categoryBanner1,
            CategoryName: "Womenswear",
            label: "Women's Fashion",
            Items: 220,
        },
        {
            imgUrl: categoryBanner3,
            CategoryName: "kidwear",
            label: "Kidswear",
            Items: 230,
        },
        {
            imgUrl: categoryBanner4,
            CategoryName: "sports",
            label: "Sportswear",
            Items: 260,
        },
    ];
    
    const settings = {
        infinite: true,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 4,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 4 } },
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <section className="py-16 bg-white border-t border-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
                        Shop by Category
                    </h2>
                    <p className="text-gray-500 mt-3">Explore our wide range of collections</p>
                </div>
                
                <div className="slider-container -mx-4">
                    <Slider {...settings}>
                        {categories.map((item, index) => (
                            <div key={index} className="px-4 pb-8">
                                <Link to={`/Categories/${item.CategoryName}`} className="block group">
                                    <div className="flex flex-col items-center">
                                        <div className="relative overflow-hidden rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                                            <img
                                                src={item.imgUrl}
                                                alt={item.label}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-zinc-900 font-semibold text-lg lg:text-xl tracking-tight group-hover:text-emerald-600 transition-colors">
                                            {item.label}
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-1 font-medium">
                                            {item.Items} Products
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default SwipeToSlide;
