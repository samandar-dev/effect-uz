import React, { useState } from 'react'
import './TechCards.scss'
import TechCardItem from './TechCardItem/TechCardItem'

function TechCards() {
  const [techCardAct, setTechCardAct] = useState(1)

  return (
    <>
      <div className="main__technology-cards">
        <ul className="main__technology-cards-list">
          <TechCardItem
            techCardAct={techCardAct}
            setTechCardAct={setTechCardAct}
          />
        </ul>

        <div className="main___technology-cards-btn">
          <button className='main__technology-cars-btn'>Barcha yangiliklar</button>
        </div>
      </div>
    </>
  )
}

export default TechCards
