import React, { useState } from 'react'
import { mobileData } from '../Stores/data/mobiles'
import { useParams } from 'react-router-dom'
import { useCart } from '../Stores/Context/CartContext'
import '../App.css';
import UserCart from '../Stores/userCart';

const MobileSingle = () => {
  const {id}=useParams()
  
  const {addToCart, cartItems} = useState()

  const product = mobileData.find((item) => item.id === id);
  
  

  
  return (
    <div className="ind-section">
      <div className="ind-image">
        <img src={product.image} alt="" /><br />
      </div><br /><br />
      <div className="ind-details">
      <div className="ind-model">
        <h3>{product.model}</h3>
      </div><br /><br />
      <div className="ind-price">
        <h2>{product.price}</h2>
      </div><br /><br />
      <div className="ind-desc">
        <p>{product.description}</p>
        <button onClick={()=>addToCart(product)}>Add To Cart</button>
      </div>
      </div>
      
      
      
    </div>
  )
}

export default MobileSingle
