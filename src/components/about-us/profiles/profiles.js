import React, { useState } from 'react'
import Lisa from './../../../assets/images/Lisa.JPG'
import Shawn from './../../../assets/images/Shawn.jpg'
import './profiles.scss'

export const Profiles = () => {
  const [isLisaDescriptionExpended, setLisaDescriptionExpanded] =
    useState(false)
  const [isShawnDescriptionExpanded, setShawnDescriptionExpanded] =
    useState(false)

  const toggleLisaDescription = () => {
    setLisaDescriptionExpanded(!isLisaDescriptionExpended)
  }

  const toggleShawnDescription = () => {
    setShawnDescriptionExpanded(!isShawnDescriptionExpanded)
  }

  const renderLisaDescription = () =>
    isLisaDescriptionExpended ? (
      <div className="profiles__description-expanded">
        Lisa Adler has held several executive leadership roles in the life
        sciences community; most recently at Shire Pharmaceuticals, Ironwood
        Pharmaceuticals, Millennium Pharmaceuticals (now Takeda Oncology) and
        Johnson & Johnson. Earlier in her career, she held a position as
        Managing Director at Feinstein Kean Healthcare, and went on to
        subsequent leadership roles at various global communications firms. Lisa
        is a Board member of MassBio and the National Institute for
        Psychobiology in Israel. She is known throughout the industry for her
        sense of humor and love of storytelling.
        <button
          className="profiles__description-button"
          onClick={toggleLisaDescription}
        >
          Hide description
        </button>
      </div>
    ) : (
      <div className="profiles__description">
        <div className="profiles__description-text">
          Lisa Adler has held several executive leadership roles in the life
          sciences community; most recently at Shire Pharmaceuticals, Ironwood
          Pharmaceuticals, Millennium Pharmaceuticals (now Takeda Oncology) and
          Johnson & Johnson.{' '}
        </div>
        <button
          className="profiles__description-button"
          onClick={toggleLisaDescription}
        >
          Click to learn more about Lisa
        </button>
      </div>
    )

  const renderShawnDescription = () =>
    isShawnDescriptionExpanded ? (
      <div className="profiles__description-expanded">
        Shawn Goodman has held leadership roles in the commercial groups at COR
        Therapeutics and Millennium Pharmaceuticals with a primary focus on
        corporate and product branding and creative services. Most recently as
        VP, Global Oncology Communications for Takeda, he has spent the last
        decade creating and producing award-winning communications. Shawn has
        built and led multiple graphic design teams and holds two patents for
        innovative pharmaceutical packaging design. He spends his spare time
        redesigning the world around him and raising his Jack Russell puppies.
        <button
          className="profiles__description-button"
          onClick={toggleShawnDescription}
        >
          Hide description
        </button>
      </div>
    ) : (
      <div className="profiles__description">
        <div className="profiles__description-text">
          Shawn Goodman has held leadership roles in the commercial groups at
          COR Therapeutics and Millennium Pharmaceuticals with a primary focus
          on corporate and product branding and creative services.{' '}
        </div>
        <button
          className="profiles__description-button"
          onClick={toggleShawnDescription}
        >
          Click to learn more about Shawn
        </button>
      </div>
    )

  return (
    <div className="profiles">
      <div className="profiles__header">
        RAZR Consulting has more than 50 years of combined experience in the
        technology and life sciences industries with proven success developing
        and leading communications to advance business goals for companies
        across corporate, healthcare and public sectors.
      </div>
      <div className="profiles__bios-wrapper">
        <div className="profiles__profile-wrapper">
          <div className="profiles__profile">
            <div className="profiles__description-title">Lisa Adler</div>
            <div className="profiles__image" />
            <div className="profiles__description-wrapper">
              {renderLisaDescription()}
            </div>
          </div>
        </div>
        <div className="profiles__profile-wrapper">
          <div className="profiles__profile">
            <div className="profiles__description-title">Shawn Goodman</div>
            <div className="profiles__image" />

            <div className="profiles__description-wrapper">
              {renderShawnDescription()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
