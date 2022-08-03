import React, { useState } from 'react'
import './NewsItemSlider.scss'

import img1 from '../../../assets/images/phone-slider-img-1.png'
import dataIcon from '../../../assets/icons/dataIcon.svg'
import { useTranslation } from 'react-i18next'

function PhoneSlider() {
  const { t } = useTranslation()
  const [newssliderCount, setNewssliderCount] = useState(1)
  const obj = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <section className='phone__slider'>
        <h3 className="phone__slider-title">{t('Mavzuga oid xabarlar')}</h3>

        <div className="phone__slider-box">
          <ul className="phone__slider-list" style={{
            transform: `translate(-${newssliderCount * 350 - 350}px)`
          }}>
            {obj.map((item, inx) => (
              <li className="phone__slider-item" key={inx + 1}>
                <img className='phone__slider-item-img' src={img1} alt="slider items" />

                <div className="phone__slider-item-categor-data">
                  <p>#siyosat</p>
                  <p><img src={dataIcon} alt="data icon" /> 11:45  |  13.07.2022</p>
                </div>

                <div className="phone__slier-item-desc-box">
                  <p>The 10 Coolest Wearable Tech Gadgets Of 2021 (So Far)</p>
                </div>
              </li>
            ))}
          </ul>

          <button className='phone__slider-left-btn'
            onClick={() => setNewssliderCount(newssliderCount >= 1 ? newssliderCount - 1 : 1)}>
            <i className='bx bx-chevron-left'></i>
          </button>
          <button className='phone__slider-right-btn'
            onClick={() => setNewssliderCount(newssliderCount < obj.length - 3 ? newssliderCount + 1 : obj.length - 3)}>
            <i className='bx bx-chevron-right'></i>
          </button>
        </div>
      </section>
    </>
  )
}

export default PhoneSlider
