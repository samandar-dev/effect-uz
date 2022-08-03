import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './FotoNews.scss'

import FotoNewsImg_1 from '../../../../assets/images/fotonews-img-1.png'
import FotoNewsImg_2 from '../../../../assets/images/fotonews-img-2.png'
import FotoNewsImg_3 from '../../../../assets/images/fotonews-img-3.png'
import { useTranslation } from 'react-i18next'

function FotoNews() {
  const { t } = useTranslation()
  const [fotoNewsSlider, setFotoNewsSlider] = useState(1)
  const fotonewsItems = [
    {
      id: 1,
      desc: 'Samsung Galaxy F22 launched in India: Price, features, other details',
      img: FotoNewsImg_1,
    },
    {
      id: 2,
      desc: 'Samsung Galaxy F22 launched in India: Price, features, other details',
      img: FotoNewsImg_2,
    },
    {
      id: 3,
      desc: 'Samsung Galaxy F22 launched in India: Price, features, other details',
      img: FotoNewsImg_3,
    },
    {
      id: 4,
      desc: 'Samsung Galaxy F22 launched in India: Price, features, other details',
      img: FotoNewsImg_1,
    },
    {
      id: 5,
      desc: 'Samsung Galaxy F22 launched in India: Price, features, other details',
      img: FotoNewsImg_2,
    },
  ]

  return (
    <>
      <section className='fotonews'>
        <div className="fotonews__top">
          <h3 className="fotonews__title">{t("Foto-yangiliklar")}</h3>
          <button className='fotonews__btn'>{t("Bo‘limga o‘tish")}</button>
        </div>

        <div className="fotonews__slider">
          <button className='fotonews__slider-left-btn'
            onClick={() => setFotoNewsSlider(fotoNewsSlider >= 1 ? fotoNewsSlider - 1 : 1)}>
            <i className='bx bx-chevron-left'></i>
          </button>
          <button className='fotonews__slider-right-btn'
            onClick={() => setFotoNewsSlider(fotoNewsSlider < fotonewsItems.length - 2 ? fotoNewsSlider + 1 : fotonewsItems.length - 2)}>
            <i className='bx bx-chevron-right'></i>
          </button>

          <ul className="fotonews__slider-list"
            style={{
              transform: `translateX(-${fotoNewsSlider * 300 - 300}px)`
            }}>
            {fotonewsItems.map((item, inx) => (
              <li className="fotonews__slider-item" key={item.id}>
                <Link className='fotonews__slider-item-link' to={`/newsitems/${item.id}`}>
                  <div className="fotonews__slider-img-box">
                    <img src={item.img} alt="foto news img" />
                  </div>

                  <div className="fotonews__slider-desc">
                    <p className='fotonews__slider-text'>{item.desc}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default FotoNews
