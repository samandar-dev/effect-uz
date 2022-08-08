import i18n from '../../../lang/i18n'
import React, { useEffect, useState } from 'react'
import bottomIcon from '../../../assets/icons/bottom-icon.svg'

function RightLanguage() {
  const [lang, setLang] = useState(localStorage.getItem('language') != undefined ? localStorage.getItem('language') : 'oz')

  const changedLanguage = (e) => {
    localStorage.setItem('language', e.target.value)
    i18n.changeLanguage(localStorage.getItem('language'))
  }

  useEffect(() => {
    localStorage.getItem('language') != undefined ? setLang(localStorage.getItem('language')) : ""
  }, [])

  return (
    <>
      <select className="right__selec" onChange={changedLanguage}>
        {lang == 'oz' ?
          <>
            <option value="oz">O'zbek <img src={bottomIcon} alt="bottomIcon" /></option>
            <option value="uz">Узбек <img src={bottomIcon} alt="bottomIcon" /></option>
            <option value="ru">Rus <img src={bottomIcon} alt="bottomIcon" /></option>
          </>
          : lang == 'uz' ?
            <>
              <option value="uz">Узбек <img src={bottomIcon} alt="bottomIcon" /></option>
              <option value="oz">O'zbek <img src={bottomIcon} alt="bottomIcon" /></option>
              <option value="ru">Rus <img src={bottomIcon} alt="bottomIcon" /></option>
            </>
            : lang == 'ru' ?
              <>
                <option value="ru">Rus <img src={bottomIcon} alt="bottomIcon" /></option>
                <option value="oz">O'zbek <img src={bottomIcon} alt="bottomIcon" /></option>
                <option value="uz">Узбек <img src={bottomIcon} alt="bottomIcon" /></option>
              </>
              : ""}
      </select>
    </>
  )
}

export default RightLanguage
