import React from 'react';
import Slider from "react-slick";
import Header from './Header.jsx';
import BestDeal from './Home/BestDeal.jsx';
import Collection from './Home/Collection.jsx';
import TrendingWeek from './Home/TrendingWeek.jsx';
import Video from './Home/Video.jsx';
import Recommended from './Home/Recommended.jsx';
import Footer from './Footer.jsx';
import TrandingProducts from './Home/TrandingProducts.jsx';

function HomePage(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Header />
      <div className="container flex flex-col lg:flex-row bg-slate-100 w-full">
        <div className="slider-container w-full lg:w-9/12 p-5">
          <Slider {...settings}>
            {["banner_1.png", "banner_2_toys.png", "banner.jpg"].map((image, index) => (
              <div key={index} className={`bg-[url('src/assets/${image}')] bg-cover h-[50vw] sm:h-[40vw] lg:h-[39vw] w-full flex flex-col justify-center p-6 sm:p-12`}>
                <h3 className="text-white text-3xl sm:text-5xl font-semibold tracking-widest">Discover<br /> Products</h3>
                <p className="text-slate-100 text-sm sm:text-lg mt-2 sm:mt-5">Unlock Limitless Options with Our Extensive Product Range.</p>
                <button className="p-2 sm:p-3 bg-green-600 mt-3 sm:mt-5 px-6 sm:px-10 rounded-lg text-white">Shop Now <i className="fas fa-arrow-right ml-2"></i></button>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-col gap-5 p-5 w-full lg:w-auto ">
          {["side_banner_1.jpg", "side_banner_2.jpg"].map((image, index) => (
            <div key={index} className="relative w-full lg:w-[22vw] h-[40vw] sm:h-[30vw] lg:h-[19vw]">
              <img src={`src/assets/${image}`} alt="banner" className="w-full h-full rounded-2xl absolute z-0" />
              <div className="p-5 z-1 relative text-white">
                <span className="font-semibold tracking-wider">Kitchen Accessories <br />Up To 15% Off</span><br />
                <button className="mt-2 underline">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 text-slate-900">
        {["Bottom_banner_1.png", "Bottom_banner_2.png", "Bottom_banner_3.jpg"].map((image, index) => (
          <div key={index} className=" relative w-full h-[50vw] sm:h-[30vw] lg:h-[19vw]">
            <img src={`src/assets/${image}`} alt="banner" className="w-full h-full rounded-2xl absolute z-0" />
            <div className="p-5 z-1 relative text-slate-900">
              <span className="font-semibold tracking-wider">Kitchen Accessories <br />Up To 15% Off</span><br />
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <TrandingProducts products={props.products} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5">
        {["Bottom_banner_2.png", "Bottom_banner_2.png"].map((image, index) => (
          <div key={index} className="relative w-full h-[50vw] sm:h-[30vw] lg:h-60">
            <img src={`src/assets/${image}`} alt="banner" className="w-full h-full rounded-2xl absolute z-0" />
            <div className="p-5 z-1 relative mt-10 sm:mt-16 text-white">
              <span className="font-semibold tracking-wider">Kitchen Accessories <br />Up To 15% Off</span><br />
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <BestDeal products={props.products} />
      <Collection />
      <TrendingWeek products={props.products} />
      <Recommended products={props.products} />
      <Video />
      <Footer />
    </>
  );
}

export default HomePage;
