import React from 'react'
import './about-us.scss'
import { AreasOfExpertise } from './areas-of-expertise/areas-of-expertise'
import { Profiles } from './profiles/profiles'

export const AboutUs = () => (
  <div className="about-us" id="about">
    <div className="about-us__header-wrapper">
      <div className="about-us__header"> Who We Are</div>
      <div className="about-us__description">
        We have been at the forefront of corporate, executive and product
        communications, both in-house and at PR/advertising agencies. While much
        of our work has been global, we are also highly entrenched in the Boston
        metro biotech ecosystem.
      </div>
    </div>
    <AreasOfExpertise />
    <Profiles />
  </div>
)
