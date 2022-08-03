import React from 'react'
import i18n from '../../../lang/i18n'
import bottomIcon from '../../../assets/icons/bottom-icon.svg'

function RightLanguage() {

  const changedLanguage = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value)
  }

  return (
    <>
      <select className="right__selec" onChange={changedLanguage}>
        <option value="uz">O'zbek <img src={bottomIcon} alt="bottomIcon" /></option>
        <option value="ru">Rus <img src={bottomIcon} alt="bottomIcon" /></option>
      </select>
    </>
  )
}

export default RightLanguage
