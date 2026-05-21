import React from 'react';
import Slider from "react-slick";
import Header from './Header.jsx';
import BestDeal from './Home/BestDeal.jsx';
import Collection from './Home/Collection.jsx';
import TrendingWeek from './Home/TrendingWeek.jsx';
import Recommended from './Home/Recommended.jsx';
import Footer from './Footer.jsx';
import TrandingProducts from './Home/TrandingProducts.jsx';
import banner1 from '../assets/banner_1.png';
import banner2 from '../assets/banner_2.png';
import banner3 from '../assets/banner_3.jpg';
import smallBanner1 from '../assets/small_banner_1.png';
import smallBanner2 from '../assets/small_banner_2.png';
import smallBanner3 from '../assets/small_banner_3.png';
import smallBanner4 from '../assets/small_banner_4.png';
import smallBanner5 from '../assets/small_banner_5.png';
import smallBanner6 from '../assets/small_banner_6.png';
import smallBanner7 from '../assets/small_banner_7.png';

function HomePage(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  };

  const bannerImages = [banner1, banner2, banner3];
  const smallBannerImages1 = [smallBanner1, smallBanner2];
  const smallBannerImages2 = [smallBanner3, smallBanner4, smallBanner5];
  const smallBannerImages3 = [smallBanner6, smallBanner7];

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-900">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Slider */}
          <div className="w-full lg:w-3/4 rounded-3xl overflow-hidden shadow-2xl relative">
            <Slider {...settings} className="h-full">
              {bannerImages.map((image, index) => (
                <div key={index} className="relative w-full outline-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />
                  <img src={image} alt={`Banner ${index + 1}`} className="w-full h-[60vh] lg:h-[75vh] object-cover" />
                  <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
                    <span className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-4 inline-block">New Collection 2026</span>
                    <h3 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-2xl leading-tight">
                      Elevate Your <br/> Everyday Style.
                    </h3>
                    <p className="text-slate-200 text-lg sm:text-xl max-w-lg mb-10 font-light">
                      Discover the latest trends in fashion, crafted for the modern individual seeking comfort and elegance.
                    </p>
                    <button className="bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold w-fit hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg flex items-center gap-3">
                      Explore Collection 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Side Banners */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6">
            {smallBannerImages1.map((image, index) => (
              <div key={index} className="relative h-[29vh] lg:h-[calc(37.5vh-0.75rem)] rounded-3xl overflow-hidden group shadow-lg">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10" />
                <img src={image} alt={`Side Banner ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <span className="text-white font-semibold text-xl tracking-wide leading-tight mb-2">
                    Premium <br/> Accessories
                  </span>
                  <button className="text-white text-sm font-medium underline underline-offset-4 decoration-2 hover:text-emerald-400 transition-colors w-fit">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Banners 3-col */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {smallBannerImages2.map((image, index) => (
            <div key={index} className="relative h-64 md:h-80 rounded-3xl overflow-hidden group shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img src={image} alt={`Grid Banner ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">Up to 15% Off</span>
                <span className="text-white font-bold text-2xl tracking-wide leading-tight mb-3">
                  Discover Fashion Products
                </span>
                <button className="bg-white/20 backdrop-blur-md text-white border border-white/40 px-6 py-2 rounded-full font-medium hover:bg-white hover:text-zinc-900 transition-all w-fit">
                  Shop Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TrandingProducts products={props.products} />

      {/* Grid Banners 2-col */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {smallBannerImages3.map((image, index) => (
            <div key={index} className="relative h-80 md:h-96 rounded-3xl overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
              <img src={image} alt={`Promo Banner ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end items-start">
                <span className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-tight mb-4 max-w-sm">
                  Exclusive Member Discounts
                </span>
                <button className="bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors shadow-md flex items-center gap-2">
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BestDeal products={props.products} />
      <Collection />
      <TrendingWeek products={props.products} />
      <Recommended products={props.products} />
      
      <Footer />
    </div>
  );
}

export default HomePage;
