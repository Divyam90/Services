import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({setlogin}) => {

  return (
    <div className="navbar">
      <Link to ="/">
        <h2>HomeGroom</h2>
        </Link>
        <div className="navbar-right">
            <div className="navbar-search-icon">
            <ul className="navbar-menu">
            <Link to ="/services"><li>Services</li></Link>
            <li>About</li>
        </ul>
            </div>
            <button onClick={()=>setlogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
