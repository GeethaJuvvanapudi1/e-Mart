import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';


const NavBar = () => {
  return (
    <>
    <div className='navSection'>
        <div className="title"><h2>E-Mart</h2></div>
            <div className="search">
                <input type="textplace" placeholder='search...' /></div>
                <div className="user">
                    <div className="user-Details">
                        SignIn/SignUp</div>
                        <Link to='/cart'>
                        <div className="cart">Cart  </div>

                        </Link>
                    

                </div>
            </div>
            <div className="subMenu">
                <ul>
                    <Link to='Mobiles'>
                    <li>Mobiles</li>
                    </Link>
                    <Link to='Computer'>
                    <li>Computers</li>

                        </Link>
                    <Link  to='Watches'>
                    <li>Watches</li>
                    </Link>
                    <Link to='Men'>
                    <li>Men Fashion</li>

                    </Link>
                    
                    <Link to='Woman'>
                    <li>Women Fashion</li>
                    </Link>
                   <Link to='Furniture'>
                   <li>Furniture</li>
                   </Link>
                  <Link to='Ac'>
                  <li>Ac</li>
                  </Link>
                   <Link to='Kitchen'>
                   <li>Kitchen</li>
                   </Link>
                   <Link to='Tv'>
                   <li>Tv</li>
                   </Link>
                    <Link to='Speakers'>
                    <li>Speakers</li>
                    </Link>
                    <Link to='fridge'>
                    <li>Refrigerators</li>
                    </Link>
                    <Link to='Books'>
                    <li>Books</li>
                    </Link>
                   
                </ul>
            </div>
    
    
    
    
    
    
    
    </>
            
        
  )
}

export default NavBar
