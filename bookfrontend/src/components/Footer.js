import React from 'react'
import './Footer.css';

export default function Footer(props) {
  return (
    <div>
      <p className="footer">&copy; copyright by {props.name}</p>
    </div>
  )
}
