import React from 'react'
import {NavLink} from 'react-router-dom';

export default function MainNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{"backgroundColor": "#e3f2fd"}}>
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-link active" to="/home">Home <span className="sr-only">(current)</span></NavLink>
      <NavLink className="nav-link" to="/form">Form</NavLink>
      <NavLink className="nav-link" to="/table">Table</NavLink>
      <NavLink className="nav-link" to="/list">List</NavLink>
    </div>
  </div>
</nav>
    </div>
  )
}
