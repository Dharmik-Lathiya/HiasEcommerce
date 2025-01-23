import React from 'react'

export default function BestDeal() {
    let Menscasualwear = [
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
        }
    ];

    return (

        <>
            <div className="flex flex-col lg:flex-row lg:mt-24 ml-5 mr-5 gap-5 lg:gap-2">
                <div className="w-full">
                    <span className="ml-[10%] text-2xl font-semibold">Best Deals Product</span>
                </div>
                <div className="w-full justify-items-end ml-[25%] *:ml-4 *:bg-green-700 *:rounded *:p-2 *:text-white">
                    Hurry up! Offer ends in:<b>239</b><b>:59</b><b>12</b>
                </div>
            </div>


            <div className="flex mt-5 ml-5 mr-5 gap-5 lg:gap-2">
                <div>
                    <img src="src\assets\Product_2.jpg" alt="Best Deal 1" />
                </div>
                <div>
                    <div className="mt-5 flex flex-wrap "  data-id="123">
                        {Menscasualwear.map((Menscasualwear, i) => (
                            <div key={i} className=" ml-[1.7vw] w-full sm:w-72 bg-white rounded-lg shadow-2xl  h-auto">
                                <span className="bg-green-600 px-4 py-2 absolute m-3 text-slate-100 rounded-tl-lg rounded-br-lg">Sale</span>
                                <div>
                                    <img
                                        className="w-72 h-72 box-border rounded-tl-lg rounded-tr-lg"
                                        src={Menscasualwear.imgUrl}
                                        alt="Vitamin C"
                                    />
                                </div>
                                <div className="p-5 font-poppins">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold">{Menscasualwear.title}</h3>
                                    </div>

                                    <div className="mt-2 text-sm text-gray-600">
                                        <p>{Menscasualwear.content}</p>
                                    </div>

                                    <div className="mt-4 text-sm text-gray-600">
                                        <h5 className="mt-2 font-semibold">{Menscasualwear.brandName}</h5>
                                    </div>

                                    <div className="flex items-center mt-2">
                                        <div>
                                            <span className="font-semibold text-lg">₹</span>
                                            <span className="font-bold text-2xl">{Menscasualwear.newPrice}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400 line-through ml-2">₹{Menscasualwear.oldPrice}</span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1">
                                        {[5, 4, 3, 2, 1].map((val) => (
                                            <label key={val}>
                                                <input type="radio" name="rating" value={Menscasualwear.star} className="hidden" />
                                                <span className="text-red-500 cursor-pointer text-xl">&#9733;</span>
                                            </label>
                                        ))}
                                        <span className="text-slate-300 ml-10">{Menscasualwear.viewers} Views</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
