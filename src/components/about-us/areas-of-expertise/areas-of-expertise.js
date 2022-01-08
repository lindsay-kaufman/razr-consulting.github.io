import React from 'react'
import Slider from 'react-slick'
import { AreaOfExpertiseTile } from './area-of-expertise-tile/area-of-expertise-tile'
import { useBreakpoint } from './../../../hooks/use-breakpoint'
import './areas-of-expertise.scss'

export const AreasOfExpertise = () => {
  const { isMobile } = useBreakpoint()

  const tiles = [
    {
      title: 'Corporate Branding, Reputation Management',
      description:
        'Positioning and messaging, branding companies and departments (R&D, Patient Advocacy)',
      image: '',
    },
    {
      title: 'Creative Services',
      description:
        'Identity development, illustration and MOA graphics, infographics/data visualization, print/digital collateral, annual reports, presentation design, booth design',
      image: '',
    },
    {
      title: 'Crisis / Issues Management',
      description:
        'Issues identification and mitigation, real-time issues management (product recalls, litigation, reputation)',
      image: '',
    },
    {
      title: 'Product / Disease Awareness',
      description:
        'Product PR, scientific and medical publicity, disease awareness campaigns',
      image: '',
    },
    {
      title: 'Executive Communications',
      description:
        'Thought-leadership positioning and communications for C-Suite executives including media training, media outreach, speeches and presentations',
      image: '',
    },
    {
      title: 'Employee Engagement',
      description:
        'Engagement initiatives to educate, excite and unite employees',
      image: '',
    },
    {
      title: 'Patient Advocacy and Access',
      description:
        'Enrich development and commercialization support, clarify corporate identity and serve as a rallying point for employees',
      image: '',
    },
  ]

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: !isMobile ? 4 : 2,
    slidesToScroll: !isMobile ? 1 : 2,
    arrows: true,
  }

  return (
    <div className="areas-of-expertise-wrapper">
      <div className="areas-of-expertise__header"> What We Do</div>
      <div className="grid-x areas-of-expertise">
        {!isMobile ? (
          <Slider className="areas-of-expertise__slider" {...carouselSettings}>
            {tiles.map(tile => (
              <AreaOfExpertiseTile
                key={tile.title}
                title={tile.title}
                description={tile.description}
                image={tile.image}
              />
            ))}
          </Slider>
        ) : (
          <div className="areas-of-expertise__mobile">
            {tiles.map(tile => (
              <AreaOfExpertiseTile
                key={tile.title}
                title={tile.title}
                description={tile.description}
                image={tile.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
