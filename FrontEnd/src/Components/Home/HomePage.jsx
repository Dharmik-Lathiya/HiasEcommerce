import React, { useState } from 'react';
import Slider from "react-slick";
import Header from '../Header.jsx';
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let Bathrooms = [];
  let obj = {
    imgUrl:"src/assets/banner_1.jpg",
    title:"Discover Products",
    content:"Unlock Limitless Options with Our Extensive Product Range.",
    brandName:"Amazon",
    newPrice:100,
    oldPrice:200,
    star:3,
    viewers:1000
}
let obj2 = {
  imgUrl:"src/assets/Product_1.jpg",
  title:"Discover Products",
  content:"Unlock Limitless Options with Our Extensive Product Range.",
  brandName:"Amazon",
  newPrice:100,
  oldPrice:200,
  star:3,
  viewers:1000
}

Bathrooms.push(obj);
Bathrooms.push(obj2);
  const [addbag, setAddbag] = useState(1);
  const [heart, setHeart] = useState(1);

  const AddBag = () => {
    if (addbag < 10) {
      setAddbag(addbag + 1);
    }
  };

  const DecBag = () => {
    if (addbag >= 1) {
      setAddbag(addbag - 1);
    }
  };

  const Heart = () => {
    setHeart(!heart);
  };
  return (
    <>
    <Header />
    <div className="container flex bg-slate-100 h-[40vw] w-full">
      <div className="slider-container lg:w-9/12 lg:h-40  pt-5 pl-5">
        <Slider {...settings}>
          <div className="bg-[url('src/assets/banner_1.jpg')] bg-cover h-[40vw] w-full pl-[2vw]">
            <h3 className="text-white text-5xl font-semibold mt-[10vw] tracking-widest">Discover<br /> Products</h3>
            <p className="text-slate-100 text-1xl mt-5">Unlock Limitless Options with Our Extensive<br /> Product Range.</p>
            <button className="p-3 bg-green-600 mt-5 px-10 rounded-lg text-white" >Shop Now <i class="fas fa-arrow-right ml-2"></i></button>
          </div>
          <div className="bg-[url('src/assets/banner_2_toys.jpg')] bg-cover h-[40vw] w-full pl-[2vw]">
            <h3 className="text-white text-5xl font-semibold mt-[10vw] tracking-widest">Discover<br /> Products</h3>
            <p className="text-slate-100 text-1xl mt-5">Unlock Limitless Options with Our Extensive<br /> Product Range.</p>
            <button className="p-3 bg-green-600 mt-5 px-10 rounded-lg text-white" >Shop Now <i class="fas fa-arrow-right ml-2"></i></button>
          </div>
          <div className="bg-[url('src/assets/banner.jpg')] bg-cover h-[40vw] w-full pl-[2vw]">
            <h3 className="text-white text-5xl font-semibold mt-[10vw] tracking-widest">Discover<br /> Products</h3>
            <p className="text-slate-100 text-1xl mt-5">Unlock Limitless Options with Our Extensive<br /> Product Range.</p>
            <button className="p-3 bg-green-600 mt-5 px-10 rounded-lg text-white" >Shop Now <i class="fas fa-arrow-right ml-2"></i></button>
          </div>
        </Slider>
      </div>
      <div className="ml-5 mt-5">
        <div>
          <img src="src/assets/side_banner_1.jpg" alt="banner" className="w-[21.5vw] h-[19vw] rounded-2xl absolute z-0"/>
          <div className="p-5 z-1 relative text-white">
            <span className="font-semibold tracking-wider">Kitchen Accessories <br/>Up To 15% Off</span><br/>
            <button className="mt-2 underline">Shop Now</button>  
          </div>
        </div>
        <div className="lg:mt-[11.5vw]">
          <img src="src/assets/side_banner_2.jpg" alt="banner" className="w-[21.5vw] h-[19vw] rounded-2xl absolute z-0"/>
          <div className="p-5 z-1 relative">
            <span className="font-semibold tracking-wider">Kitchen Accessories <br/>Up To 15% Off</span><br/>
            <button className="mt-2 underline">Shop Now</button>  
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex lg:mt-14 ml-5 mr-20 gap-24">
      <div className="w-full">
          <img src="src/assets/Bottom_banner_1.png" alt="banner" className="w-[30vw] h-[19vw] rounded-2xl absolute z-0"/>
          <div className="p-5 z-1 relative">
            <span className="font-semibold tracking-wider">Kitchen Accessories <br/>Up To 15% Off</span><br/>
            <button className="mt-2 underline">Shop Now</button>  
          </div>
        </div>
        <div className="w-full">
          <img src="src/assets/Bottom_banner_2.png" alt="banner" className="w-[30vw] h-[19vw] rounded-2xl absolute z-0"/>
          <div className="p-5 z-1 relative">
            <span className="font-semibold tracking-wider">Kitchen Accessories <br/>Up To 15% Off</span><br/>
            <button className="mt-2 underline">Shop Now</button>  
          </div>
        </div>
        <div className="w-full">
          <img src="src/assets/Bottom_banner_3.jpg" alt="banner" className="w-[30vw] h-[19vw] rounded-2xl absolute z-0"/>
          <div className="p-5 z-1 relative">
            <span className="font-semibold tracking-wider">Kitchen Accessories <br/>Up To 15% Off</span><br/>
            <button className="mt-2 underline">Shop Now</button>  
          </div>
        </div>
      </div>

      <h2 className="lg:mt-44 lg:ml-5 text-4xl font-semibold">Trending Products</h2>

      {/* Porduct Cards */}
      
      <div className="m-5 flex bg-slate-300 items-center">
      {Bathrooms.map((bathroom, i) => (
          <div className="w-72 bg-white rounded-lg p-5 font-poppins shadow-lg h-auto mr-5">
        <div className="flex justify-between items-center">
          <button
            className={`h-6 w-6 rounded-full flex justify-center items-center bg-gray-200 transition ${
              heart ? "text-gray-400" : "text-red-500"
            }`}
            onClick={Heart}
          >
            <i className={`fa ${heart ? "fa-heart-o" : "fa-heart"}`}></i>
          </button>
        </div>

        <div className=" mt-4">
          <img
            className="w-full h-auto  box-border"
            src={bathroom.imgUrl}
            alt="Vitamin C"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <h3 className="font-semibold">{bathroom.title}</h3>
        </div>

        <div className="mt-2 text-sm text-gray-600">
          <p>{bathroom.content}</p>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <h5 className="mt-2 font-semibold">{bathroom.brandName}</h5>
        </div>

        <div className="flex items-center mt-2">
          <div>
            <span className="font-semibold text-lg">₹</span>
            <span className="font-bold text-2xl">{bathroom.newPrice}</span>
          </div>
          <div>
            <span className="text-gray-400 line-through ml-2">₹{bathroom.oldPrice}</span>
          </div>
        </div>
        <div className="flex space-x-1 ">
            {[5, 4, 3, 2, 1].map((val) => (
              <label key={val}>
                <input type="radio" name="rating" value={bathroom.star} className="hidden" />
                <span className="text-red-500 cursor-pointer text-xl">&#9733;</span>
              </label>
            ))}
             <span className="text-slate-300 ml-10">{bathroom.viewers} Views</span>
          </div>
      </div>
        ))}
    </div>
    </>
  );
}

export default SimpleSlider;