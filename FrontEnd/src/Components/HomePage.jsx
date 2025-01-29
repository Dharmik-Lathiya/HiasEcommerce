import React, { useState } from 'react';
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

  const [heart, setHeart] = useState(1);

  const Heart = () => {
    setHeart(!heart);
  };
  console.log(props.products);


  return (
    <>
      <Header />
      <div className="container flex flex-col lg:flex-row bg-slate-100 h-auto lg:h-[40vw] w-full">
        <div className="slider-container w-full lg:w-9/12 lg:h-40 pt-5 pl-5">
          <Slider {...settings}>
            <div className="bg-[url('src/assets/banner_1.jpg')] bg-cover h-[40vw] w-full pl-[2vw]">
              <h3 className="text-white text-5xl font-semibold mt-[10vw] tracking-widest">Discover<br /> Products</h3>
              <p className="text-slate-100 text-1xl mt-5">Unlock Limitless Options with Our Extensive<br /> Product Range.</p>
              <button className="p-3 bg-green-600 mt-5 px-10 rounded-lg text-white">Shop Now <i className="fas fa-arrow-right ml-2"></i></button>
            </div>
            <div className="bg-[url('src/assets/banner_2_toys.jpg')] bg-cover h-[40vw] w-full pl-[2vw]">
              <h3 className="text-white text-5xl font-semibold mt-[10vw] tracking-widest">Discover<br /> Products</h3>
              <p className="text-slate-100 text-1xl mt-5">Unlock Limitless Options with Our Extensive<br /> Product Range.</p>
              <button className="p-3 bg-green-600 mt-5 px-10 rounded-lg text-white">Shop Now <i className="fas fa-arrow-right ml-2"></i></button>
            </div>
            <div className="bg-[url('src/assets/banner.jpg')] bg-cover h-[40vw] w-full pl-[2vw]">
              <h3 className="text-white text-5xl font-semibold mt-[10vw] tracking-widest">Discover<br /> Products</h3>
              <p className="text-slate-100 text-1xl mt-5">Unlock Limitless Options with Our Extensive<br /> Product Range.</p>
              <button className="p-3 bg-green-600 mt-5 px-10 rounded-lg text-white">Shop Now <i className="fas fa-arrow-right ml-2"></i></button>
            </div>
          </Slider>
        </div>
        <div className="ml-5 mt-5 w-full lg:w-auto">
          <div>
            <img src="src/assets/side_banner_1.jpg" alt="banner" className="w-full lg:w-[21.5vw] h-[19vw] rounded-2xl absolute z-0" />
            <div className="p-5 z-1 relative text-white">
              <span className="font-semibold tracking-wider">Kitchen Accessories <br />Up To 15% Off</span><br />
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
          <div className="lg:mt-[11.5vw] mt-20">
            <img src="src/assets/side_banner_2.jpg" alt="banner" className="w-full lg:w-[21.5vw] h-[19vw] rounded-2xl absolute z-0" />
            <div className="p-5 z-1 relative">
              <span className="font-semibold tracking-wider">Kitchen Accessories <br />Up To 15% Off</span><br />
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
        <div className="flex flex-col lg:flex-row lg:mt-14 ml-5 mr-5 lg:mr-20 gap-5 lg:gap-24">
          <div className="w-full">
            <img src="src/assets/Bottom_banner_1.png" alt="banner" className="w-full lg:w-[30vw] h-[19vw] rounded-2xl absolute z-0" />
            <div className="p-5 z-1 relative">
              <span className="font-semibold tracking-wider">Kitchen Accessories <br />Up To 15% Off</span><br />
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
          <div className="w-full">
            <img src="src/assets/Bottom_banner_2.png" alt="banner" className="w-full lg:w-[30vw] h-[19vw] rounded-2xl absolute z-0" />
            <div className="p-5 z-1 relative">
              <span className="font-semibold tracking-wider">Kitchen Accessories <br />Up To 15% Off</span><br />
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
          <div className="w-full">
            <img src="src/assets/Bottom_banner_3.jpg" alt="banner" className="w-full lg:w-[30vw] h-[19vw] rounded-2xl absolute z-0" />
            <div className="p-5 z-1 relative">
              <span className="font-semibold tracking-wider">Kitchen Accessories <br />Up To 15% Off</span><br />
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>
        </div>

      <TrandingProducts products={props.products}/>

      <div className="flex flex-col lg:flex-row lg:mt-14 ml-5 mr-5 gap-5 lg:gap-2">
        <div className="w-full">
          <img src="src/assets/Bottom_banner_2.png" alt="banner" className="w-full lg:w-[48vw] h-60 rounded-2xl absolute z-0" />
          <div className="p-5 z-1 relative mt-16">
            <span className="font-semibold tracking-wider">Kitchen Accessories <br />Up To 15% Off</span><br />
            <button className="mt-2 underline">Shop Now</button>
          </div>
        </div>
        <div className="w-full">
          <img src="src/assets/Bottom_banner_2.png" alt="banner" className="w-full lg:w-[48vw]  h-60 rounded-2xl absolute z-0" />
          <div className="p-5 z-1 relative mt-16">
            <span className="font-semibold tracking-wider">Kitchen Accessories <br />Up To 15% Off</span><br/>
            <button className="mt-2 underline">Shop Now</button>
          </div>
        </div>
      </div>
    
    <BestDeal products={props.products}/>
    <Collection />
    <TrendingWeek products={props.products}/>
    <Recommended products={props.products}/>
    <Video/>
    <Footer/>
    </>
  );
}

export default HomePage;