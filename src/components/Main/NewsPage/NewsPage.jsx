import React from 'react'
import { useTranslation } from 'react-i18next'
import NewsPageItems from './NewsPageItems/NewsPageItems'
import './NewsPage.scss'

function NewsPage() {
  const { t } = useTranslation()
  return (
    <>
      <section className='news-page'>
        <h2 className='news-page__title'>{t('Yangiliklar lentasi')}</h2>

        <ul className="news-page__list">
          <NewsPageItems />
        </ul>

        <div className='news-page__btn-box'>
          <button className='news-page__add-items-btn'>{t("yana-yuklash")}</button>
        </div>
      </section>
    </>
  )
}

export default NewsPage
