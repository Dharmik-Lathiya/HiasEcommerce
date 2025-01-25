import React from 'react'
import "./AdminDashboard.css"
import Card from './Card'
import Chart from './Chart'
export default function () {
    return (
        <div style={{width:"100%"}}>
            <p className='p-5'>Dashboard</p>

            <div className='card-conatiner m-5'>
                
                    <Card/>
                    <Card/>
                    <Card/>


            </div>

            <div className="chart-container m-5">

                <Chart/>

            </div>


        </div>
    )
}
