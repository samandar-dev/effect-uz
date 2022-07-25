import React from 'react'
import dataIcon from '../../../../../assets/icons/dataIcon.svg'
import commentIcon from '../../../../../assets/icons/commentIcon.svg'
import TechImg_3 from '../../../../../assets/images/technology-img-3.png'

function TechCardItem({ techCardAct, setTechCardAct }) {
  const techCards = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {techCards.map((itm, inx) => (
        <li className='main__technology-cards-item'
          onClick={() => setTechCardAct(inx + 1)}
          key={inx + 1}
        >
          <div className={`main__technology-card-box 
                ${techCardAct === inx + 1 ? "techCards" : ""}
                `}>
            <span className='main__technology-card-span'>Texnologiya</span>

            <div className='main__technology-card-desc'>
              <p className='main__technology-card-text'>
                Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda
              </p>

              <div className='main__technology-card-data'>
                <span><img src={dataIcon} alt="dataIcon" /> 11:45</span>
                <span><img src={commentIcon} alt="dataIcon" /> 12 izoh</span>
              </div>
            </div>

            <div className="main__technology-card-img-box">
              <img src={TechImg_3} alt="TechImg_3" />
            </div>
          </div>
        </li>
      ))}
    </>
  )
}

export default TechCardItem
