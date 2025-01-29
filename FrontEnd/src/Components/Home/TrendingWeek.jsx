import React from "react";
import Slider from "react-slick";

function SwipeToSlide(props) {



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


  let filteredProducts = props.products.filter((product)=>{
    return product.category == 'Womenswear' ? product : 0;
})
  return (
    <>
      <div className="w-full text-center my-12 text-3xl font-semibold">
        <p>Trending This Week</p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {filteredProducts.map((product, i) => (
            <div key={i} className="px-2">
              <div className="group relative bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Sale Badge */}
                <span className="bg-green-600 px-4 py-2 absolute m-3 text-white rounded-tl-lg rounded-br-lg">
                  Sale
                </span>

                {/* Product Image Container */}
                <div className="relative overflow-hidden">
                  
                  <img
                    className="w-full h-52 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                    src={product.imgUrl[0]}
                    alt={product.name}
                  />

                  {/* Heart Icon */}
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-300">
                    ❤️
                  </button>

                 
                  <button className="absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-green-600 text-white px-6 py-2 transition-all duration-300 shadow-lg">
                    Add to Cart
                  </button>
                </div>

                {/* Product Info */}
                <div className="mt-4 px-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{product.desc}</p>
                  <h5 className="mt-2 font-semibold">Hias</h5>
                  <div className="flex items-center mt-2">
                    <div>
                      <span className="font-semibold text-lg">₹</span>
                      <span className="font-bold text-2xl">{product.price - (product.price * 20)/100 }</span>
                    </div>
                    <div>
                      <span className="text-gray-400 line-through ml-2">
                        ₹{product.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-1 mt-2 items-center">
                    {[5, 4, 3, 2, 1].map((val) => (
                      <span
                        key={val}
                        className={`text-xl ${
                          val <= product.star ? "text-red-500" : "text-gray-300"
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

export default SwipeToSlide;
