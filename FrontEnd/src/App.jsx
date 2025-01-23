import './App.css'
import HomePage from './Components/HomePage'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './Components/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route index element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
