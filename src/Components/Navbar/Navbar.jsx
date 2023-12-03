import React, { useState } from 'react'
import './Navbar.css'
import { ShoppingCart } from "phosphor-react";
import { Link } from 'react-router-dom';

const Navbar = () => {

  // Use state variable
  const [menu, setMenu] = useState("featured");

  return (
    <div className = 'navbar'>
      <ul className="nav-menu">
        <li onClick = {()=>{setMenu("home")}}><Link style = {{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick = {()=>{setMenu("clothes")}}><Link style = {{textDecoration: 'none'}} to='/clothes'>Clothes</Link>{menu==="clothes"?<hr/>:<></>}</li>
        <li onClick = {()=>{setMenu("bags")}}><Link style = {{textDecoration: 'none'}} to='/bags'>Bags</Link>{menu==="bags"?<hr/>:<></>}</li>
        <li onClick = {()=>{setMenu("jewelry")}}><Link style = {{textDecoration: 'none'}} to='/more'>Jewelry</Link>{menu==="jewelry"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><ShoppingCart size={32} color="#ffff" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar;