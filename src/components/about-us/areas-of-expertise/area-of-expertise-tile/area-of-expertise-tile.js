import React, { useState } from 'react'
import classNames from 'classnames'
import './area-of-expertise-tile.scss'
import { useBreakpoint } from './../../../../hooks/use-breakpoint'

export const AreaOfExpertiseTile = ({ title, description, image }) => {
  const { isMobile } = useBreakpoint()
  const [isDescriptionVisible, setDescriptionVisible] = useState(false)
  const mobileClassNames = classNames('area-of-expertise-tile-mobile', {
    'area-of-expertise-tile-mobile__expanded': isDescriptionVisible
  })

  const toggleDescriptionVisible = () => {
    setDescriptionVisible(!isDescriptionVisible)
  }

  return (
    <div className="grid-x cell medium-4">
      <div
        className={!isMobile ? "area-of-expertise-tile" : mobileClassNames}
        style={{ background: image ? image : '#0F52BA' }}
      >
        {!isMobile ? (
          <>
            <div className="area-of-expertise-tile__title test">{title}</div>
            <div className="area-of-expertise-tile__description">
              {description}
            </div>
          </>
        ) : (
          <div className="areas-of-expertise-tile__mobile" onClick={toggleDescriptionVisible}>
            <div className="area-of-expertise-tile__title">{title}</div>
            {isDescriptionVisible && (
              <div className="area-of-expertise-tile__description">
                {description}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
