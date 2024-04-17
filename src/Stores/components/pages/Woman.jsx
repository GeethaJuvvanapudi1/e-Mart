import React from 'react'
import { womanData } from '../../data/woman'

const Woman = () => {
  const firstFiveImages=womanData.slice(0,6)
  return (
    <>
    <div className="protitle">
    <h2>Woman</h2>
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

export default Woman