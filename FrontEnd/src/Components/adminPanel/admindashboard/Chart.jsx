import React, { useEffect } from 'react'
import {Chart as ChartJs} from 'chart.js/auto'

export default function Chart({chartData}) {

  console.log(chartData);
  
    if(!chartData){
        return
    }

        useEffect(()=>{
            (async function() {
                
              
                new ChartJs(
                  document.getElementById('acquisitions'),
                  {
                    type: 'bar',
                    data: {
                      labels: chartData.map(row => row.month),
                      datasets: [
                        {
                          label: 'orders by month',
                          data: chartData.map(row => row.count)
                        }
                      ]
                    }
                  }
                );
              })();
        },[])
  return (
    <canvas style={{border:"1px solid black", width:"500px", height:"350px"}} id='acquisitions' width={500} height={350} ></canvas>
  )
}
