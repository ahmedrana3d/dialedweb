import React, { useEffect } from 'react'
import './App.css'
import Learn from './Learn'
const LearnApp = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts or updates
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='learn-more-overflow' >
      <Learn />
    </div>
  )
}

export default LearnApp