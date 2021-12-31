import React from 'react'
import { useBreakpoint } from '../../hooks/use-breakpoint'
import './about-us.scss'
import { AreasOfExpertise } from './areas-of-expertise/areas-of-expertise'
import { Profiles } from './profiles/profiles'

export const AboutUs = () => {
  const { isMobile } = useBreakpoint()

  const razrDescription = () => (
    <div className="about-us__description">
      We have been at the forefront of corporate, executive and product
      communications, both in-house and at PR/advertising agencies. While much
      of our work has been global, we are also highly entrenched in the Boston
      metro biotech ecosystem.
    </div>
  )

  return (
    <div className="about-us" id="about">
      <div className="about-us__header-wrapper">
        {!isMobile && <span>{razrDescription}</span>}
      </div>
      <AreasOfExpertise />
      {isMobile && <span>{razrDescription()}</span>}
      <Profiles />
      {isMobile && (
        <div className="about-us__experience">
          RAZR Consulting has more than 50 years of combined experience in the
          technology and life sciences industries with proven success developing
          and leading communications to advance business goals for companies
          across corporate, healthcare and public sectors.
        </div>
      )}
    </div>
  )
}
