import React from 'react'
import './about-us.scss'
import { AreasOfExpertise } from './areas-of-expertise/areas-of-expertise'
import { Profiles } from './profiles/profiles'
import { Awards } from './awards/awards'

export const AboutUs = () => (
  <div className="about-us" id="about">
    <div className="about-us__header"> Who We Are</div>
    <div className="about-us__description">
      RAZR brings together the global communications, branding and patient
      advocacy expertise of two award-winning industry leaders with more than 50
      years of combined experience. We have been at the forefront of corporate,
      executive and product communications, both in-house and at PR/advertising
      agencies. While much of our work has been global, we are also highly
      entrenched in the Boston metro biotech ecosystem.
    </div>
    <AreasOfExpertise />
    <Profiles />
    <Awards />
  </div>
)
