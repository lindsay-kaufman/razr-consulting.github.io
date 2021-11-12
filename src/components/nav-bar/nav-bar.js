import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { useBreakpoint } from '../../hooks/use-breakpoint'
import logo from './../../assets/images/RAZRLogo.jpg'

import './nav-bar.scss'

export const NavBar = () => {
  const { isLargeDesktop } = useBreakpoint()

  const links = [
    {
      to: 'about',
      offset: isLargeDesktop ? -60 : -80,
      class: 'nav-bar--buttons-about',
      label: isLargeDesktop ? 'About Us' : 'About',
      href: '#about',
    },
    {
      to: 'clients',
      offset: isLargeDesktop ? -40 : -80,
      class: 'nav-bar--buttons-clients',
      label: 'Clients',
      href: '#clients',
    },
    {
      to: 'contact',
      offset: isLargeDesktop ? -40 : -60,
      class: 'nav-bar--buttons-contact',
      label: isLargeDesktop ? 'Get In Touch' : 'Contact',
      href: '#contact',
    },
  ]


  return (
    <nav className="nav-bar">
      <div className="nav-bar--logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-bar--buttons">
        {links.map(link => (
          <Link
            to={link.to}
            href={link.href}
            spy={true}
            offset={link.offset}
            key={link.label}
          >
            <button className={link.class}>{link.label}</button>
          </Link>
        ))}
      </div>
    </nav>
  )
}
