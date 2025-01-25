import React from 'react'
import "./AdminProducts.css"
import AddProductBtn from './AddProductBtn'
import ProuductList from './ProuductList'
export default function AdminProducts() {
  return (
    <div style={{width:"100%"}}>

          <div className='prod-head p-5'>
              <p >Products</p>

              <AddProductBtn type={"Add Products"}/>
          </div>

        <div className='m-5'>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
            <ProuductList/>
        </div>
    </div>
  )
}
