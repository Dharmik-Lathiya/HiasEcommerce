import React from 'react'
import AddProductBtn from './AddProductBtn'

export default function ProuductList() {
  return (
    <div className='list m-10'>

        <p>dildo</p>
        <p>$30</p>
        <p>Sold : 3</p>
        <p>total income : $90</p>

        <AddProductBtn type={"Add Discount"}/>
        <AddProductBtn type={"Delete Product"}/>
    </div>
  )
}
