import React from 'react'
import { Link } from 'react-router-dom'
import './AsideNews.scss'

import uza_img from '../../../../assets/images/uza-img.png'
import uzaAppStore from '../../../../assets/images/uza-app-store.png'
import uzaGooglePlay from '../../../../assets/images/uza-google-play.png'
import { useTranslation } from 'react-i18next'

function AsideNews() {
  const { t } = useTranslation()
  return (
    <>
      <aside className='uza-aside'>
        <div className="uza-aside__desc">
          <h3 className="uza-aside__title">{t("Har doim xabardor bo’ling!")}</h3>
          <p className='uza-aside__tit'>
            <Link to={'/'}>Effect.uz</Link> {t("mobil ilovasini ko’chirib oling va barcha yangiliklar siz bilan")}
          </p>

          <div className="uza-aside__aplication">
            <button className='uza-aside__app-store'>
              <img src={uzaAppStore} alt="app store" />
            </button>
            <button className='uza-aside__google-play'>
              <img src={uzaGooglePlay} alt="app store" />
            </button>
          </div>
        </div>
        <img className='uza-aside__img' src={uza_img} alt="uza img" />
      </aside>
    </>
  )
}

export default AsideNews
