import React from 'react'
import { useState } from "react";

export default function Recommended() {
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
      }, {
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
      }, {
        imgUrl: "src/assets/Product_4.png",
        title: "Officewear 1",
        content: "Description for Officewear 1",
        brandName: "Brand 4",
        newPrice: 250,
        oldPrice: 350,
        star: 4,
        viewers: 1300
      }, {
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



  return (
    <>
      <div className="ml-5 my-12 text-3xl font-semibold">
        <p>Recommended for You</p>
      </div>

      <div className="my-6 ml-6 gap-6 text-2xl flex flex-wrap">
        <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('MensCasualwear')}>Mens Casualwear</span>
        <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('WomensWesternwear')}>Womens Westernwear</span>
        <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('Sportswear')}>Sportswear</span>
        <span className="hover:text-green-600 hover:underline cursor-pointer" onClick={() => setSelectedCategory('Officewear')}>Officewear</span>
      </div>

      <div className="my-5 flex flex-wrap">
        {categories[selectedCategory].map((product, i) => (
          <div key={i} className="ml-[2vw] flex w-full sm:w-72 lg:w-[47%] bg-white rounded-lg shadow-xl h-auto my-5  ">

            <div>
              <img
                className="w-32 h-32 box-border rounded-tl-lg rounded-tr-lg"
                src={product.imgUrl}
                alt={product.title}
              />
            </div>
            <div className="p-5 font-poppins">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{product.title}</h3>
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

              <div className="flex items-center justify-between mt-2">
                <div className="flex space-x-1">
                  {[5, 4, 3, 2, 1].map((val) => (
                    <label key={val}>
                      <input type="radio" name="rating" value={product.star} className="hidden" />
                      <span className="text-red-500 cursor-pointer text-xl">&#9733;</span>
                    </label>
                  ))}
                </div>
                <span className="text-slate-300">{product.viewers} Views</span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </>
  )
}
