import React from 'react'
import Navbar from '../Navbar/Navbar'
import MainTop from './MainTop/MainTop'
import Technology from './Technology/Technology'
import { useTranslation } from 'react-i18next'
import './Main.scss'

function Main() {
  const { t } = useTranslation()
  return (
    <>
      <section className='main'>
        <div className="main__top">
          <MainTop />
        </div>

        <div className="main__navbar">
          <h2 className='news-page__title'>{t('So’nggi Yangiliklar')}</h2>
          <Navbar />
        </div>

        <Technology />
      </section>
    </>
  )
}

export default Main
