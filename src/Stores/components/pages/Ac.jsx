import React from 'react'
import { acData } from '../../data/ac'
const AC = () => {
  const firstFiveImages=acData.slice(0,6)
  return (
    <><div className="proTitle">

<h2>Air Conditioner</h2>
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

export default AC
