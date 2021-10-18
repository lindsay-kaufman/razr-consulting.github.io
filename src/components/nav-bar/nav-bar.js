import React from 'react'
import { Link } from 'react-scroll'

import './nav-bar.scss'
//add offset for scroll
export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar--logo">Logo</div>
      <div className="nav-bar--buttons">
        <Link to="about" spy={true} offset={-60}>
          <button className="nav-bar--buttons-about">About Us</button>
        </Link>
        <Link to="past-clients" spy={true} offset={-40}>
          <button className="nav-bar--buttons-clients">Past Clients</button>
        </Link>
        <Link to="contact" spy={true} offset={-40}>
          <button className="nav-bar--buttons-contact">Get in Touch</button>
        </Link>
      </div>
    </nav>
  )
}
