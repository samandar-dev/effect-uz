import React from 'react'
import giftIcon from '../../assets/icons/gift.svg'
import feather from '../../assets/icons/feather.svg'
import RightWeather from './RightWeather/RightWeather'
import file_text from '../../assets/icons/file-text.svg'
import RightLanguage from './RightLanguage/RightLanguage'
import RightDarkLight from './RightDark_Light/RightDarkLight'
import RightFlowedItem from './RightFlowedItem/RightFlowedItem'
import { useTranslation } from 'react-i18next'
import './Right.scss'

function Right() {
  const { t } = useTranslation()
  return (
    <>
      <section className='right'>
        <div className="right__inner">
          <div className="right__top">
            <RightDarkLight />
            <RightLanguage />
          </div>

          <div className="right__btns">
            <ul className="right__btns-list">
              <li className="right__btns-item">
                <button className='right__btns-item-btn'></button>
              </li>
              <li className="right__btns-item">
                <button className='right__btns-item-btn'></button>
              </li>
              <li className="right__btns-item">
                <button className='right__btns-item-btn'></button>
              </li>
              <li className="right__btns-item">
                <button className='right__btns-item-btn'></button>
              </li>
            </ul>
          </div>

          <RightWeather />

          <div className="right__reporter">
            <p className='right__reporter-title'>
              <img src={feather} alt="" /> {t("Mobil muhbirga aylaning!")}</p>
            <div className="right__reporter-box">
              <p className='right__reporter-box-tit'>{t("Masofadan bizning muhbirga aylaning !")}</p>
              <button className='right__reporter-box-btn'>{t("Batafsil")}</button>
            </div>
          </div>

          <div className="right__flowed">
            <h4 className="right__reporter-title">
              <img src={file_text} alt="flowed" /> {t("Eng ko‘p o‘qilgan")}
            </h4>

            <ul className="right__flowed-list">
              <RightFlowedItem />
            </ul>
          </div>

          <aside className='main__aside right__aside'>
            <div>
              <img src={giftIcon} alt="giftIcon" />
              <p className='main__aside-subscribe right__aside-title'>Subscribe to Premium</p>
            </div>

            <div>
              <p className='main__aside-price right__aside-price'>$8<span>/m</span></p>
              <button className='main__aside-btn'>Upgrade</button>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default Right
