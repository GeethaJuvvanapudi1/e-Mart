import React from 'react'
import { furnitureData } from '../../data/furniture'
const Furniture = () => {
  const firstFiveImages=furnitureData.slice(0,6)
  return (
    <>
    <div className="protitle">
    <h2>Furniture</h2>

    </div>
    
    <div className='proSection'>
      {
        firstFiveImages.map((item)=>
      {
        return(
          <div className='imgBox'>
            <img className='proImg' src={item.image} alt="" />
            </div>
        )

      })
      }
      
    </div>
    
    
    </>
  )
}

export default Furniture
