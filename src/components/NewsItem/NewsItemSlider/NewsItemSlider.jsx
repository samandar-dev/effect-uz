import React, { useEffect, useState } from 'react'
import './NewsItemSlider.scss'

import img1 from '../../../assets/images/phone-slider-img-1.png'
import dataIcon from '../../../assets/icons/dataIcon.svg'
import { useTranslation } from 'react-i18next'
import GET from '../../../API/GET'
import { Link } from 'react-router-dom'

function PhoneSlider() {
  const { t } = useTranslation()
  const [newssliderCount, setNewssliderCount] = useState(1)

  const [data, setData] = useState([])
  const [apiLang, setApiLang] = useState('oz')

  const fechData = async () => {
    try {
      const category = await GET.newsAll();
      setData(category.data.items)
    } catch (err) {
      console.error(err)
      return;
    }
  }

  useEffect(() => {
    fechData()
    localStorage.getItem('language') != undefined ? setApiLang(localStorage.getItem('language')) : ""
  }, [localStorage.getItem('language')]);

  return (
    <>
      <section className='phone__slider'>
        <h3 className="phone__slider-title">{t('mavzuga-oid')}</h3>

        <div className="phone__slider-box">
          <ul className="phone__slider-list" style={{
            transform: `translate(-${newssliderCount * 350 - 350}px)`
          }}>
            {data.map((item, inx) => (
              <Link to={`/newsitems/${item.id}`} key={inx + 1}>
                <li className="phone__slider-item">
                  <img className='phone__slider-item-img' src={item.default_img} alt="slider items" />

                  <div className="phone__slider-item-categor-data">
                    <p>#{item.category_id}</p>
                    <p><img src={dataIcon} alt="data icon" /> 11:45  |  {item.created_date}</p>
                  </div>

                  <div className="phone__slier-item-desc-box">
                    <p>
                      {apiLang === 'uz' ? item.title_oz.substring(0, 50) :
                        apiLang === 'oz' ? item.title_uz.substring(0, 50) :
                          apiLang === 'ru' ? item.title_ru.substring(0, 50) :
                            ""}
                      {
                        apiLang === 'uz' && 50 <= item.title_oz.substring().length ? "..." :
                          apiLang === 'oz' && 50 <= item.title_uz.substring().length ? "..." :
                            apiLang === 'ru' && 50 <= item.title_ru.substring().length ? "..." :
                              ""}
                    </p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>

          <button className='phone__slider-left-btn'
            onClick={() => setNewssliderCount(newssliderCount >= 1 ? newssliderCount - 1 : 1)}>
            <i className='bx bx-chevron-left'></i>
          </button>
          <button className='phone__slider-right-btn'
            onClick={() => setNewssliderCount(newssliderCount < data.length - 3 ? newssliderCount + 1 : data.length - 3)}>
            <i className='bx bx-chevron-right'></i>
          </button>
        </div>
      </section>
    </>
  )
}

export default PhoneSlider
