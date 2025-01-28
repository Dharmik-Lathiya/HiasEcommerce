import './App.css';
import { Routes, Route, Navigate } from "react-router";
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import AdminPanel from './Components/adminPanel/adminPanel';
import AdminDashboard from './Components/adminPanel/admindashboard/AdminDashboard';
import AdminProducts from './Components/adminPanel/adminproducts/AdminProducts';
import TrandingProducts from './Components/Home/TrandingProducts';
import ProductDetails from './Components/ProductsDetails/ProductDetails';



  const categories = {
    MensCasualwear: [
        {
            id: 1,
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
          id: 2,
          imgUrl: "src/assets/Product_1.jpg",
          title: "Mens Casualwear 1",
          content: "Description for Mens Casualwear 1",
          brandName: "Brand 1",
          newPrice: 100,
          oldPrice: 200,
          star: 3,
          viewers: 1000
      }, {
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
          imgUrl: "src/assets/Product_4.png",
          title: "Officewear 1",
          content: "Description for Officewear 1",
          brandName: "Brand 4",
          newPrice: 250,
          oldPrice: 350,
          star: 4,
          viewers: 1300
      }, {
          id: 7,
          imgUrl: "src/assets/Product_4.png",
          title: "Officewear 1",
          content: "Description for Officewear 1",
          brandName: "Brand 4",
          newPrice: 250,
          oldPrice: 350,
          star: 4,
          viewers: 1300
      }, {
          id: 8,
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
          id: 9,
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
          id: 10,
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
          id: 11,
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

const allProducts = Object.values(categories).flat();

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
        <Route path="/trending" element={<TrandingProducts products={allProducts} />} />
        <Route path="/product/:productId" element={<ProductDetails products={allProducts} />} />


      </Routes>
    </>
  );
}

export default App;
