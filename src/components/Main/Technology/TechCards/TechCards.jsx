import React, { useState } from 'react'
import TechCardItem from './TechCardItem/TechCardItem'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './TechCards.scss'

function TechCards() {
  const [techCardAct, setTechCardAct] = useState()
  const { t } = useTranslation()
  return (
    <>
      <div className="main__technology-cards">
        <h2 className='main__technology-title'>So’nggi Yangiliklar</h2>
        <ul className="main__technology-cards-list">
          <TechCardItem
            techCardAct={techCardAct}
            setTechCardAct={setTechCardAct}
          />
        </ul>

        <div className="main___technology-cards-btn">
          <Link to={'/news'}>
            <button className='main__technology-cars-btn'>{t("Barcha yangiliklar")}</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default TechCards
