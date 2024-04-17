import React from 'react'
import { computerData } from '../data/computers'
const Computer = () => {
  const firstFiveImages=computerData.slice(0,6)
  return (
    <>
    <div className="proTitle">
    <h2>Computers</h2>

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

export default Computer