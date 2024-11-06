import burger from "../assets/Burger-King-logo.svg"
import {Link} from 'react-router-dom'
const Nav = () => {
    return(
       <nav className="container">
        
        <Link to="/"><img src={ burger } className="burger-logo" alt="a pic" /></Link>
        <div className="navlinks">
           <Link to="/order">Order</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/offers">offers</Link>
           <Link to="/restaurants">Restaurant</Link>
           <Link to="/careers">Careers</Link>
           <Link to="/news">News</Link>

        </div>
      </nav>
    )
}

export default Nav