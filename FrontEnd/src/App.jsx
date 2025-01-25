import './App.css'
import HomePage from './Components/HomePage'
import {  Routes, Route, Navigate,  } from "react-router";
import Login from './Components/Login';
import AdminPanel from './Components/adminPanel/adminPanel';
import AdminDashboard from './Components/adminPanel/admindashboard/AdminDashboard';
import AdminProducts from './Components/adminPanel/adminproducts/AdminProducts';
function App() {

  let loggdin = true;
  return (
    <>
        <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Login" element={<Login />}  />  
        {localStorage.getItem("isLogedIn") ?  <Route path="/home" element={<Navigate to="/admin"/>}  /> : <Route path='/home' element={<Navigate to="/Login"/>}/>    }
        <Route path='/admin' element={<AdminPanel/>}>
                <Route path='dashboard' element={<AdminDashboard />}/>
                <Route path='products' element={<AdminProducts />}/>
        </Route>
        </Routes>
    </>
  )
}

export default App
