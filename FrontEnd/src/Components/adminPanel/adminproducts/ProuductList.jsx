import React from 'react'
import AddProductBtn from './AddProductBtn'
import { Link } from 'react-router-dom'

export default function ProuductList(props) {



  return (
    <Link to={`/admin/products/${props.id}`}>
      <div className='list m-10 bg-slate-100 p-2 rounded' data-id={props.id}>

        <p>{props.name}</p>
        <p>${props.price}</p>
        <p>Sold : {props.sold}</p>
        <p>total income : ${props.price * props.sold}</p>

        <AddProductBtn type={"addDiscount"} content={"Add Discount"} />

      </div>
    </Link>
  )
}
