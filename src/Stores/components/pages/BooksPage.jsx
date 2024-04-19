import React from 'react';
import { booksData } from '../../data/books';
import NavBar from '../NavBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BooksPage = () => {
 


  const [selectedProduct, setSelectedProduct] = useState([])

  const companyHandler=(mango)=>{
          if(selectedProduct.includes(mango)){
              setSelectedProduct(selectedProduct.filter(item => item !== mango))
          }else{
              setSelectedProduct([...selectedProduct, mango]) 
          }
  }


  const filteredProduct = selectedProduct.length===0?
      booksData : booksData.filter((orange)=>selectedProduct.includes(orange.company))

return (
<>
<NavBar />
<div className="fullpage">
  
<div className="pro-selected">

{booksData.map((phone)=>{
  return(
      <div className='pro-input'>
          <label >
              <input type="checkbox" 
              checked = {selectedProduct.includes(phone.cat)}
              onChange={()=>companyHandler(phone.cat)}
              />
              {phone.cat}
          </label>
      </div>
  )
})}

</div>

<div className='pageSection'>
  {filteredProduct.map((item)=>{
      return(
          <div>

          <Link to={`/Books/${item.id}`}>
              <div className="pageImg">
                  <img src={item.image} alt="" />
              </div>
          </Link>
              <div className="proModel">
                  {item.brand}, {item.model}
              </div>
          </div>
      )
  })}

</div>
</div>
</>
)
}


export default BooksPage;
