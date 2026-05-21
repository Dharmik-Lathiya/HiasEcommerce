import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

function SwipeToSlide({ products }) {
  const settings = {
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  let filteredProducts = products.filter(
    (product) => product.category === "Womenswear"
  );

  if (filteredProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            Trending This Week
          </h2>
          <p className="text-gray-500 text-center max-w-2xl">
            Top picks from our Womenswear collection that everyone is talking about.
          </p>
        </div>
        
        <div className="-mx-4">
          <Slider {...settings} className="trending-slider">
            {filteredProducts.map((product, i) => (
              <div key={i} className="px-4 pb-12 pt-4">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default SwipeToSlide;
