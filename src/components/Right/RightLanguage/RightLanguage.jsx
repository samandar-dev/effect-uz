import React from 'react'
import bottomIcon from '../../../assets/icons/bottom-icon.svg'

function RightLanguage() {
  return (
    <>
      <select className="right__selec">
        <option value="Ozbek">O'zbek <img src={bottomIcon} alt="bottomIcon" /></option>
        <option value="Rus">Rus <img src={bottomIcon} alt="bottomIcon" /></option>
        <option value="Eng">Eng <img src={bottomIcon} alt="bottomIcon" /></option>
      </select>
    </>
  )
}

export default RightLanguage
