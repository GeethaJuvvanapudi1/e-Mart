import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../Stores/Context/CartContext'
import { computerData } from '../Stores/data/computers'

const ComputerSingle = () => {
  const {id}=useParams()
  
  const {addToCart, cartItems} = useState([])

  const product = computerData.find((item) => item.id === id);
  
  

  
  return (
    <div className="ind-page">
      <div className="ind-image">
        <img src={product.image} alt="" />
      </div>
      <div className="ind-model">
        <h3>{product.model}</h3>
      </div>
      <div className="ind-price">
        <h2>{product.price}</h2>
      </div>
      <div className="ind-desc">
        <p>{product.decription}</p>
      </div>
    </div>
  )
}

export default ComputerSingle;
