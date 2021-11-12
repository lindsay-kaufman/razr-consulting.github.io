import React from 'react'
import allenaLogo from './../../assets/images/allena-pharma.jpg'
import seagenLogo from './../../assets/images/seagen.jpeg'
import notableLogo from './../../assets/images/notable.jpg'

import './clients.scss'

export const PastClients = () => {
  const logos = [allenaLogo, seagenLogo, notableLogo]


  return (
    <div className="clients" id="past-clients">
      <div className="clients__title">Clients</div>
      <ul className="clients__logos">
        {logos.map(logo => (
          <li className={logos.length >= 4 && "clients__logo-extended"}>
            <img src={logo} alt="client-logo" />
          </li>
        ))}
      </ul>
    </div>
  )
}
