import React, { useEffect, useState } from 'react'
import "./AdminDashboard.css"
import Card from './Card'
import Chart from './Chart'
export default function () {

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch(import.meta.env.VITE_API_KEY+"/OrderDetails",{
            method:"POST"
        }).then((res)=>{
            res.json().then((data)=>{
                
                setData(data)
            })
        })

    },[])

    return (
        <div style={{width:"100%"}}>
            <p className='p-5'>Dashboard</p>

            <div className='card-conatiner m-5'>
                
                    <Card type={"Total Sales"} desc={"Total income of sales "} data={data.totalIncome}/>
                    <Card type={"Total Orders"} desc={"Total Orders Completed"} data={data.totalOrder}/>
                    <Card type={"Today Orders"} desc={"Orders Completed Today"} data={data.todayOrder}/>


            </div>

            <div className="chart-container m-5">

              {data && <Chart chartData={data.chartData}/>}

            </div>


        </div>
    )
}
