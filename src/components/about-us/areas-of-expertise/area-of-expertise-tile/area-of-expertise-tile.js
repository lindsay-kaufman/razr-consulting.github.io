import React from 'react'
import './area-of-expertise-tile.scss'

export const AreaOfExpertiseTile = ({ title, description, image }) => (
  <div className="grid-x cell medium-4">
    <div
      className="area-of-expertise-tile"
      style={{ background: image ? image : '#B6D0E2' }}
    >
      <div className="area-of-expertise-tile__title">{title}</div>
      <div className="area-of-expertise-tile__description">{description}</div>
    </div>
  </div>
)
