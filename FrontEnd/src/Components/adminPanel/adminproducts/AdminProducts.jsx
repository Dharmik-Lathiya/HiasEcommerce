import React, { useEffect, useState } from 'react'
import "./AdminProducts.css"
import AddProductBtn from './AddProductBtn'
import ProuductList from './ProuductList'
import { Outlet } from 'react-router-dom';
export default function AdminProducts() {


  const [data, setdata] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3000/admin/allProducts", {
      method: "POST"
    }).then(res => {
      res.json().then(data => {
        setdata(data)
        console.log(data);

      })
    })
  }, [])



  return (
    <div style={{ width: "100%" }}>

      <div className='prod-head p-5'>
        <p >Products</p>

        <AddProductBtn type={"addproducts"} content={"Add Products"} />
      </div>

      <div className='m-5'>


                {
                  data.map((list,i) =>{
                    console.log(list);
                  return  <ProuductList key={i} id={list._id} name={list.name} price={list.price} sold={list.orders}/>

                  })
                }

      </div>
      <Outlet/>
    </div>
  )
}
