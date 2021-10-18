import React from 'react'
import './profiles.scss'

//use state to click to read about. photos side by side with person description (PR Expert) and description will come up underneath
export const Profiles = () => (
  <div className="profiles">
    <div className="profiles__profile-wrapper">
      <div className="profiles__profile">
        <div className="profiles__description">
          <div className="profiles__description-title">Lisa Adler</div>
          Lisa Adler has more than 30 years of proven success developing and
          leading communications to advance business goals for companies across
          corporate, healthcare and public sectors. Lisa has held several
          executive leadership roles in the life sciences community; most
          recently at Shire Pharmaceuticals, Ironwood Pharmaceuticals,
          Millennium Pharmaceuticals (now Takeda Oncology) and Johnson &
          Johnson. Earlier in her career, she held a position as Managing
          Director at Feinstein Kean Healthcare, and went on to subsequent
          leadership roles at various global communications firms. Lisa is a
          Board member of MassBio and the National Institute for Psychobiology
          in Israel. She is known throughout the industry for her sense of humor
          and love of storytelling.
        </div>
        <div className="profiles__image"></div>
      </div>
    </div>
    <div className="profiles__profile-wrapper">
      <div className="profiles__profile">
        <div className="profiles__description">
          <div className="profiles__description-title">Shawn Goodman</div>
          Shawn Goodman has more than 25 years of experience in the technology
          and life sciences industries. He has held leadership roles in the
          commercial groups at COR Therapeutics and Millennium Pharmaceuticals
          with a primary focus on corporate and product branding and creative
          services. Most recently as VP, Global Oncology Communications for
          Takeda, he has spent the last decade creating and producing
          award-winning communications. Shawn has built and led multiple graphic
          design teams and holds two patents for innovative pharmaceutical
          packaging design. He spends his spare time redesigning the world
          around him and raising his Jack Russell puppies.
        </div>
        <div className="profiles__image"></div>
      </div>
    </div>
  </div>
)
