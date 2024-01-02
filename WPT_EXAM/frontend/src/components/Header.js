import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light" style={{"backgroundColor": "#e3f2fd"}}>
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav" style={{height:"80px",padding:"20px",fontSize:"20px"}}>
      <NavLink className="nav-link" to="/home">Home</NavLink>&nbsp;
      <NavLink className="nav-link" to="/about">About</NavLink>&nbsp;
      <NavLink className="nav-link" to="/login">Login</NavLink>&nbsp;
    </div>
  </div>
</nav>
    </div>
  )
}
