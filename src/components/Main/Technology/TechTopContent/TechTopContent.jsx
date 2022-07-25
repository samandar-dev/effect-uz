import React, { useState } from 'react'
import './TechTopContent.scss';

import timeIcon from '../../../../assets/icons/time-icon.svg'
import TechTopRightItem from './TechTopRighItem/TechTopRightItem'
import techIcon from '../../../../assets/icons/technology-icon.svg'
import TechImg_1 from '../../../../assets/images/technology-img-1.png'

function TechTopContent() {
  const [techItemsAct, setTechItemsAct] = useState(1)

  return (
    <>
      <div className="main__technology-inner">
        <div className="main__technology-left">
          <div className="main__technology-img-box">
            <img src={TechImg_1} alt="TechImg_1" />
          </div>
          <div className="main__technology-left-desc">
            <div className="main__technology-left-tit">
              <span><img src={techIcon} alt="techIcon" /> Texnologiya</span>
              <span><img src={timeIcon} alt="timeIcon" /> Bugun • 15:45</span>
            </div>
            <h4 className='main__technology-lfet-title'>
              Samsung Galaxy F22 launched in India: Price, features, other details
            </h4>
            <p className='main__technology-lfet-text'>
              Samsung Galaxy F22 has been launched in India. The new smartphone has been priced in the mid-range segment.
            </p>
          </div>
        </div>

        <div className="main__technology-right">
          <ul className="main__technology-right-list">
            <TechTopRightItem
              techItemsAct={techItemsAct}
              setTechItemsAct={setTechItemsAct}
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default TechTopContent
