import React from 'react'
import dataIcon from '../../../assets/icons/dataIcon.svg'
import './RightFlowedItem.scss'

function RightFlowedItem() {
  const flowedtItems = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      {flowedtItems.map((item, inx) => (
        <li className="right__flowed-item" key={inx + 1}>
          <span className="main__technology-data-tit">
            <img src={dataIcon} alt="dataIcon" /> 11:45  |  13.07.2022
          </span>
          <p>The price of petrol  on July 6 after reaching a new record high on.</p>
        </li>
      ))}
    </>
  )
}

export default RightFlowedItem
