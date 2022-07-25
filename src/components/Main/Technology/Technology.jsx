import React from 'react'

import TechTopContent from './TechTopContent/TechTopContent'
import MainAside from '../MainAside/MainAside'
import TechCards from './TechCards/TechCards'

function Technology() {
  return (
    <>
      <div className="main__technology">
        <TechTopContent />
        <MainAside />
        <TechCards />
      </div>
    </>
  )
}

export default Technology
