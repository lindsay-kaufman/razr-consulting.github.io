import React from 'react'
import banner from './../../assets/images/banner.jpg'
import './header.scss'

export const Header = () => (
  <div className="header-wrapper" style={{ backgroundImage: `url(${banner})` }}>
    <div className="header">
      <div className="header__banner">
        <div className="header__title">RAZR CONSULTING </div>
        <div className="header__info">
          RAZR brings together the global communications, branding and patient
          advocacy expertise of two award-winning industry leaders with more
          than 50 years of combined experience.
        </div>
      </div>
    </div>
  </div>
)
