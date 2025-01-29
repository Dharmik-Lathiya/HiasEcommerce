import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddProductBtn(props) {


    const navigate = useNavigate()

  return (

    <button className="add-prod-btn p-2 " onClick={(e)=>{e.preventDefault(); e.stopPropagation(), navigate(`/admin/${props.type}`)}}>

    
        {props.content}

    </button>

  )
}
