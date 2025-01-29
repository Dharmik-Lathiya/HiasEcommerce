import React from 'react';

export default function BestDeal(props) {


    let filteredProducts = props.products.filter((product)=>{
        return product.category == 'kidwear' ? product : 0;
    })
    
    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-center lg:mt-24 mx-5 gap-5">
                <div className="w-full text-center lg:text-left">
                    <span className="text-2xl font-semibold">Best Deals Product</span>
                </div>
                <div className="w-full text-center lg:text-right">
                    <div className="bg-green-700 text-white px-4 py-2 rounded-md">
                        Hurry up! Offer ends in: <b>239</b>:<b>59</b>:<b>12</b>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className="flex flex-col lg:flex-row items-start mt-5 mx-5 gap-5">
                {/* Featured Image */}
                <div className="w-full lg:w-[30%] ">
                    <img
                        src="src/assets/Best_deals.jpg"
                        alt="Best Deal 1"
                        className="w-full h-auto lg:h-[62.5vw] rounded-lg shadow-lg"
                    />
                </div>

                {/* Product Grid */}
                <div className="w-full lg:w-[70%]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredProducts.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-4 relative">
                                <span className="bg-green-600 text-white px-3 py-1 absolute top-3 left-3 rounded-tl-lg rounded-br-lg">
                                    Sale
                                </span>
                                <img
                                    src={item.imgUrl[0]}
                                    alt={item.name}
                                    className="w-full h-40 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{item.desc.slice(0, 50)+" . . ."}</p>
                                    <div className="flex items-center mt-3">
                                        <span className="font-bold text-lg">₹{item.price - (item.price * 20)/100 }</span>
                                        <span className="text-gray-400 line-through ml-2 text-sm">
                                            ₹{item.price}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`text-xl ${
                                                        i < item.star ? 'text-red-500' : 'text-gray-300'
                                                    }`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-gray-500 text-sm">{item.viewers} Views</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
