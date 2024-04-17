
import React from 'react'
import { tvData } from '../../data/tv'
const Tv= () => {
  const firstFiveImages=tvData.slice(0,6)
  return (
    <>
    <div className="proTitle">
    <h2>TVs</h2>
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

export default Tv
