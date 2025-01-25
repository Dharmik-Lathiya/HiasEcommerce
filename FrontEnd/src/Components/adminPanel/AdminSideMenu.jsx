import React from 'react'
import "./AdminSideMenu.css"
import img from "../../assets/logo.png"
import { Link } from 'react-router-dom'
export default function AdminSideMenu() {
    return (
        <div className='admin-side-menu-main p-5'>

            <div className="sidebar-logo">
                <div >
                    <img
                        src={img} alt="Logo" className="h-15 ml-10  w-32 lg:block hidden"
                    />
                    <button className="lg:hidden text-gray-600 ml-10  ">
                        <i className="fas fa-bars text-3xl"></i>
                    </button>
                </div>
            </div>

            <div className="side-menu-container lg:block hidden">

                <ul className='side-menu ml-16'>

                    <li className=" mt-10 ">
                        <Link to={"/admin/dashboard"}>
                            Dashboard
                        </Link>
                    </li>
                    <li className=" mt-10">
                        <Link to={"/admin/products"}>
                            Products
                        </Link>
                    </li>
                    <li className=" mt-10">

                        <Link to={"/admin/orders"}>
                            Orders
                        </Link>

                    </li>
                    <li className=" mt-10">

                        <Link to={"/admin/customers"}>
                            Customers
                        </Link>

                    </li>
                    <li className=" mt-10">

                        <Link to={"/admin/logout"}>
                            Logout
                        </Link>
                    </li>

                </ul>

            </div>


        </div>
    )
}
