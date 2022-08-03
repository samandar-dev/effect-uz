import React from 'react'
import './MainTop.scss'
import icon1 from '../../../assets/icons/main-top-icon-1.svg'
import icon2 from '../../../assets/icons/main-top-icon-2.svg'
import { useTranslation } from 'react-i18next';

function MainTop() {
  const { t } = useTranslation();
  return (
    <>
      <div className="main__top">
        <div className="main__top-search">
          <input
            type="text"
            name='text'
            placeholder={t("Sayt bo'ylab izlash")}
          />
          <span>
            <i className='bx bx-search'></i>
          </span>
        </div>

        <ul className="main__top-prices-list">
          <li className="main__top-prices-item">
            <p className='main__top-prices-title'>USD = 10891.93
              <span>
                <img src={icon1} alt="" />
              </span>
            </p>
          </li>
          <li className="main__top-prices-item">
            <p className='main__top-prices-title'>EUR = 12651.00
              <span>
                <img src={icon2} alt="" />
              </span>
            </p>
          </li>
          <li className="main__top-prices-item">
            <p className='main__top-prices-title'>RUB = 190.75
              <span>
                <img src={icon2} alt="" />
              </span>
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MainTop
