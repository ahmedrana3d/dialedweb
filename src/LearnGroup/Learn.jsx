import React, { useEffect } from 'react'
import FirstSection from './Sections/FirstSection'
import ThirdSection from './Sections/ThirdSection'
import FourthSection from './Sections/FourthSection'
import { initializeCursors } from '../Cursor'

const Learn = () => {

  useEffect(() => {
    initializeCursors();
  }, []);


  return (
    <div>
      <div className="cursor" id="ball"></div>
      <div className="cursor-text" id="cursor-text">Scroll</div>
        <FirstSection/>
        <ThirdSection/>
        <FourthSection/>
    </div>
  )
}

export default Learn