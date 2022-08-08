import React from 'react'
import TechCards from './TechCards/TechCards'
import MainAside from '../MainAside/MainAside'
import TechTopContent from './TechTopContent/TechTopContent'
import VideoNewsSlider from '../../VideoNewsSlider/VideoNewsSlider'

function Technology() {
  return (
    <>
      <div className="main__technology">
        <TechTopContent />

        <div className="main__tech-video">
          <VideoNewsSlider />
        </div>

        <MainAside />

        <div className="main__techCard">
          <TechCards />
        </div>
      </div>
    </>
  )
}

export default Technology
