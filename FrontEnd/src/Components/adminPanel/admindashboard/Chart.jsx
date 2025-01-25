import React, { useEffect } from 'react'
import {Chart as ChartJs} from 'chart.js/auto'

export default function Chart() {


        useEffect(()=>{
            (async function() {
                const data = [
                  { year: 2010, count: 10 },
                  { year: 2011, count: 20 },
                  { year: 2012, count: 15 },
                  { year: 2013, count: 25 },
                  { year: 2014, count: 22 },
                  { year: 2015, count: 30 },
                  { year: 2016, count: 28 },
                ];
              
                new ChartJs(
                  document.getElementById('acquisitions'),
                  {
                    type: 'bar',
                    data: {
                      labels: data.map(row => row.year),
                      datasets: [
                        {
                          label: 'Acquisitions by year',
                          data: data.map(row => row.count)
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
