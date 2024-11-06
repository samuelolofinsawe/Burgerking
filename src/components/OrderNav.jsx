import React from 'react'
import { Link } from 'react-router-dom'
import burger from "../assets/Burger-King-logo.svg"
const OrderNav = () => {
  return (
    <nav className="container-order">
        
        <Link to="/"><img src={ burger } className="burger-logo" alt="a pic" /></Link>
        <div className="navlinks">
           <Link to="/order">Order</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/offers">offers</Link>
           <Link to="/restaurants">Restaurant</Link>
           <Link to="/careers">Careers</Link>
           <Link to="/news">News</Link>
           <button style={{backgroundColor:'#d62300',color:'white', border:'none',borderRadius:'20px',padding:'12px 15px',marginLeft:'500px'}}>Register</button>
        </div>
        
      </nav>
  )
}

export default OrderNav