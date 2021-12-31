import React from 'react'
import { useBreakpoint } from './../../hooks/use-breakpoint'
import moleculeImg from './../../assets/images/molecule.png'
import './header.scss'

export const Header = () => {
  const { isMobile } = useBreakpoint()

  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header__banner">
          <div className="header__content">
            <div className="header__subtitles">
              <p>Branding</p> | <p>Communications</p> | <p>Patient Advocacy</p>
            </div>
            <div className="header__title">RAZR CONSULTING </div>
            <div className="header__info">
              RAZR brings together the global communications, branding and
              patient advocacy expertise of two award-winning industry leaders
              with more than 50 years of combined experience.
            </div>
          </div>
          {!isMobile && <img src={moleculeImg} alt="molecule" />}
        </div>
      </div>
    </div>
  )
}
