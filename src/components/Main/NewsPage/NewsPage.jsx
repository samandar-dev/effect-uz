import React from 'react'
import './NewsPage.scss'

import NewsPageItems from './NewsPageItems/NewsPageItems'
import itemImg from '../../../assets/images/technology-img-3.png'
import { useTranslation } from 'react-i18next'

function NewsPage() {
  const { t } = useTranslation()

  const newsObj_One = [
    {
      id: 1,
      time: '19:34',
      categor: '#Texnologiya',
      desc: 'Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda',
      img: itemImg,
      comments: 12,
    },
    {
      id: 2,
      time: '19:30',
      categor: '#Ilm-fan',
      desc: 'Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda',
      img: itemImg,
      comments: 0,
    },
    {
      id: 3,
      time: '17:20',
      categor: '#Siyosat',
      desc: 'Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda',
      img: itemImg,
      comments: 0,
    },
    {
      id: 4,
      time: '14:05',
      categor: '',
      desc: 'Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda',
      img: itemImg,
      comments: 0,
    },
  ]

  const newsObj_Two = [
    {
      id: 5,
      time: '14:05',
      categor: '',
      desc: 'Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda',
      img: itemImg,
      comments: 0,
    },
    {
      id: 6,
      time: '14:05',
      categor: '',
      desc: 'Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda',
      img: itemImg,
      comments: 0,
    },
    {
      id: 7,
      time: '14:05',
      categor: '',
      desc: 'Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda',
      img: itemImg,
      comments: 0,
    },
    {
      id: 8,
      time: '14:05',
      categor: '',
      desc: 'Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda',
      img: itemImg,
      comments: 0,
    },
    {
      id: 9,
      time: '14:05',
      categor: '',
      desc: 'Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda',
      img: itemImg,
      comments: 0,
    },
    {
      id: 10,
      time: '14:05',
      categor: '',
      desc: 'Card hover bo’lganda title color o’zgarishi va card box-shadow ham o’zgarmoqda. soat va icon ham o’zgarmoqda',
      img: itemImg,
      comments: 0,
    },
  ]

  return (
    <>
      <section className='news-page'>
        <div className="news-page__news-item-data">
          <span></span>
          <p>22.07.2022</p>
        </div>

        <ul className="news-page__list">
          <NewsPageItems newsObj={newsObj_One} />
        </ul>

        <div className="news-page__news-item-data">
          <span></span>
          <p>21.07.2022</p>
        </div>

        <ul className="news-page__list">
          <NewsPageItems newsObj={newsObj_Two} />
        </ul>

        <div className='news-page__btn-box'>
          <button className='news-page__add-items-btn'>{t("Yana yuklash")}</button>
        </div>
      </section>
    </>
  )
}

export default NewsPage
