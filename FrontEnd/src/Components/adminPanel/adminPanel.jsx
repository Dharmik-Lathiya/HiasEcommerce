import React from 'react'
import AdminSideMenu from './AdminSideMenu'
import "./adminPanel.css"
import { Outlet } from 'react-router-dom'

export default function AdminPanel() {


  return (
    <div className='main-menu-op'>
            <AdminSideMenu/>

            <Outlet/>
    </div>
  )
}
