import React from 'react'
import { useBreakpoint } from '../../hooks/use-breakpoint'
import logo from './../../assets/images/RAZRLogo.jpg'

import './footer.scss'

export const Footer = () => {
  const { isMobile } = useBreakpoint()

  return (
    <div className="footer">
      <div className="footer__contact">
        <div className="footer__contact-phone">561-400-5602</div>
        <div className="footer__contact-email">info@razrconsult.com</div>
      </div>
      {!isMobile && (
        <div className="footer__icon">
          <img src={logo} alt="logo" />
        </div>
      )}
    </div>
  )
}
