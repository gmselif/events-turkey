import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.png"

function Navbar() {
  return (
    <div>
      <ul style={{display:"flex", flexDirection: "row", columnGap: "20px", listStyleType: "none"}}>
        <li><Link to="/"><img src={Logo} alt='Logo' width="50px"/></Link></li>
        <li><Link to="/AboutUs">AboutUs</Link></li>
        <li><Link to="/ContactUs">ContactUs</Link></li>
        <li><button><Link to="/Login">Login</Link></button></li>
      </ul>

    </div>
  )
}

export default Navbar