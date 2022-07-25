import React from 'react'
import dataIcon from '../../../../../assets/icons/dataIcon.svg'
import TechImg_2 from '../../../../../assets/images/technology-img-2.png'

function TechTopRightItem({ techItemsAct, setTechItemsAct }) {
  const techItems = [1, 2, 3, 4];
  return (
    <>
      {techItems.map((itm, inx) => (
        <li
          className={`main__technology-right-item ${techItemsAct === inx + 1 ? "techItemAct" : ""}`}
          onClick={() => setTechItemsAct(inx + 1)}
          key={inx + 1}
        >
          <div className="main__technology-right-item-desc">
            <span className="main__technology-data-tit">
              <img src={dataIcon} alt="dataIcon" /> 11:45  |  13.07.2022
            </span>
            <p className='main__technology-text'>
              Instagram working on ‘Exclusive Stories’ for subscribers
            </p>
          </div>

          <div className="main__technology-right-item-img-box">
            <img src={TechImg_2} alt="TechImg_2" />
          </div>
        </li>
      ))}
    </>
  )
}

export default TechTopRightItem
