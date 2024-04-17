import React from 'react'
import Mobiles from '../../Stores/components/Mobiles'
import AC from '../../Stores/components/pages/Ac'
import Books from '../../Stores/components/pages/Books'
import Fridge from '../../Stores/components/pages/Fridge'
import Furniture from '../../Stores/components/pages/Furniture'
import Kitchen from '../../Stores/components/pages/Kitchen'
import Men from '../../Stores/components/pages/Men'
import Speakers from '../../Stores/components/pages/Speakers'
import Tv from '../../Stores/components/pages/Tv'
import Watches from '../../Stores/components/pages/Watches'
import Woman from '../../Stores/components/pages/Woman'
import Computer from '../../Stores/components/Computer'

const Products = () => {
  return (
    <div>
      <Mobiles/>
      <Computer/>
      <Watches/> 
      <Men/>
      <Woman/>
      <Furniture/>
      <AC/>
      <Kitchen/>
      {/* <Fridge/>
      
     
      <Speakers/>
      
     
      <Tv/>

      <Books/> */}
     
    </div>
  )
}

export default Products
