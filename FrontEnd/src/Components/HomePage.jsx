import React, { useState } from 'react';
import Slider from "react-slick";
import Header from './Header.jsx';
import BestDeal from './Home/BestDeal.jsx';
import Collection from './Home/Collection.jsx';
import TrendingWeek from './Home/TrendingWeek.jsx';
import Video from './Home/Video.jsx';
import Recommended from './Home/Recommended.jsx';

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const categories = {
    MensCasualwear: [
      {
        imgUrl: "src/assets/Product_1.jpg",
        title: "Mens Casualwear 1",
        content: "Description for Mens Casualwear 1",
        brandName: "Brand 1",
        newPrice: 100,
        oldPrice: 200,
        star: 3,
        viewers: 1000
      },
      {
        imgUrl: "src/assets/Product_1.jpg",
        title: "Mens Casualwear 1",
        content: "Description for Mens Casualwear 1",
        brandName: "Brand 1",
        newPrice: 100,
        oldPrice: 200,
        star: 3,
        viewers: 1000
      },{
        imgUrl: "src/assets/Product_1.jpg",
        title: "Mens Casualwear 1",
        content: "Description for Mens Casualwear 1",
        brandName: "Brand 1",
        newPrice: 100,
        oldPrice: 200,
        star: 3,
        viewers: 1000
      },
      {
        imgUrl: "src/assets/Product_2.jpg",
        title: "Womens Westernwear 1",
        content: "Description for Womens Westernwear 1",
        brandName: "Brand 2",
        newPrice: 150,
        oldPrice: 250,
        star: 4,
        viewers: 1200
      },
      {
        imgUrl: "src/assets/Product_2.jpg",
        title: "Womens Westernwear 1",
        content: "Description for Womens Westernwear 1",
        brandName: "Brand 2",
        newPrice: 150,
        oldPrice: 250,
        star: 4,
        viewers: 1200
      },
      {
        imgUrl: "src/assets/Product_4.png",
        title: "Officewear 1",
        content: "Description for Officewear 1",
        brandName: "Brand 4",
        newPrice: 250,
        oldPrice: 350,
        star: 4,
        viewers: 1300
      },{
        imgUrl: "src/assets/Product_4.png",
        title: "Officewear 1",
        content: "Description for Officewear 1",
        brandName: "Brand 4",
        newPrice: 250,
        oldPrice: 350,
        star: 4,
        viewers: 1300
      },{
        imgUrl: "src/assets/Product_4.png",
        title: "Officewear 1",
        content: "Description for Officewear 1",
        brandName: "Brand 4",
        newPrice: 250,
        oldPrice: 350,
        star: 4,
        viewers: 1300
      },
      // Add more products here
    ],
    WomensWesternwear: [
      {
        imgUrl: "src/assets/Product_2.jpg",
        title: "Womens Westernwear 1",
        content: "Description for Womens Westernwear 1",
        brandName: "Brand 2",
        newPrice: 150,
        oldPrice: 250,
        star: 4,
        viewers: 1200
      },
      // Add more products here
    ],
    Sportswear: [
      {
        imgUrl: "src/assets/Product_3.png",
        title: "Sportswear 1",
        content: "Description for Sportswear 1",
        brandName: "Brand 3",
        newPrice: 200,
        oldPrice: 300,
        star: 5,
        viewers: 1500
      },
    ],
    Officewear: [
      {
        imgUrl: "src/assets/Product_4.png",
        title: "Officewear 1",
        content: "Description for Officewear 1",
        brandName: "Brand 4",
        newPrice: 250,
        oldPrice: 350,
        star: 4,
        viewers: 1300
      },
      // Add more products here
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('MensCasualwear');
  const [heart, setHeart] = useState(1);

  const Heart = () => {
    setHeart(!heart);
  };

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

      <h2 className="mt-10 lg:mt-44 lg:ml-5 text-4xl font-semibold">Trending Products</h2>

      <div className="my-6 ml-6 gap-6 text-2xl flex flex-wrap">
        <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('MensCasualwear')}>Mens Casualwear</span>
        <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('WomensWesternwear')}>Womens Westernwear</span>
        <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('Sportswear')}>Sportswear</span>
        <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('Officewear')}>Officewear</span>
      </div>

      <div className="my-5 flex flex-wrap">
        {categories[selectedCategory].map((product, i) => (
          <div key={i} className="ml-[2vw] w-full sm:w-72 bg-white rounded-lg shadow-2xl h-auto my-5  ">
            <span className="bg-green-600 px-4 py-2 absolute m-3 text-slate-100 rounded-tl-lg rounded-br-lg">Sale</span>
            <div>
              <img
                className="w-72 h-72 box-border rounded-tl-lg rounded-tr-lg"
                src={product.imgUrl}
                alt={product.title}
              />
            </div>
            <div className="p-5 font-poppins">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{product.title}</h3>
              </div>

              <div className="mt-2 text-sm text-gray-600">
                <p>{product.content}</p>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <h5 className="mt-2 font-semibold">{product.brandName}</h5>
              </div>

              <div className="flex items-center mt-2">
                <div>
                  <span className="font-semibold text-lg">₹</span>
                  <span className="font-bold text-2xl">{product.newPrice}</span>
                </div>
                <div>
                  <span className="text-gray-400 line-through ml-2">₹{product.oldPrice}</span>
                </div>
              </div>
              <div className="flex space-x-1">
                {[5, 4, 3, 2, 1].map((val) => (
                  <label key={val}>
                    <input type="radio" name="rating" value={product.star} className="hidden" />
                    <span className="text-red-500 cursor-pointer text-xl">&#9733;</span>
                  </label>
                ))}
                <span className="text-slate-300 ml-10">{product.viewers} Views</span>
              </div>
            </div>
          </div>
        ))}
      </div>

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
    
    <BestDeal/>
    <Collection/>
    <TrendingWeek/>
    <Video/>
    <Recommended/>
    </>
  );
}

export default HomePage;