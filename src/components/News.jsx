import React from 'react'
import Right from './Right/Right'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import MainTop from './Main/MainTop/MainTop'
import NewsPage from './Main/NewsPage/NewsPage'
import { useTranslation } from 'react-i18next'

function News() {
  const { t } = useTranslation()
  return (
    <>
      <section className='sidebar-main-right'>
        <Sidebar />
        <section className='main'>
          <MainTop />

          <div className="main__navbar">
            <h2 className='news-page__title'>{t('Yangiliklar lentasi')}</h2>
            <Navbar />
          </div>

          <NewsPage />
        </section>
        <Right />
      </section>
      <Footer />
    </>
  )
}

export default News
