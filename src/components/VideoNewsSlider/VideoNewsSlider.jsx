import React, { useEffect, useState } from 'react'
import './VideoNewsSlider.scss'

import img1 from '../../assets/images/phone-slider-img-1.png'
import dataIcon from '../../assets/icons/dataIcon.svg'
import { useTranslation } from 'react-i18next'
import GET from '../../API/GET'
import { Link } from 'react-router-dom'

function VideoNewsSlider() {
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
      <section className="videonews-slider">
        <h2 className='videonews-slider__slider-title'>Video-yangiliklar</h2>

        <div className="videonews-slider__slider-box">
          <ul className="videonews-slider__slider-list" style={{
            transform: `translate(-${newssliderCount * 383 - 383}px)`
          }}>
            {data.map((item, inx) => (
              <Link to={`/newsitems/${item.id}`} key={inx + 1}>
                <li className="videonews-slider__slider-item">
                  <img className='videonews-slider__slider-item-img' src={item.default_img} alt="slider items" />

                  <div className="videonews-slider__slider-item-categor-data">
                    <p><img src={dataIcon} alt="data icon" /> 11:45  |  {item.created_date}</p>
                  </div>

                  <div className="videonews-slider__slier-item-desc-box">
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

          <button className='videonews-slider__slider-left-btn'
            onClick={() => setNewssliderCount(newssliderCount >= 1 ? newssliderCount - 1 : 1)}>
            <i className='bx bx-chevron-left'></i>
          </button>
          <button className='videonews-slider__slider-right-btn'
            onClick={() => setNewssliderCount(newssliderCount < data.length - 3 ? newssliderCount + 1 : data.length - 3)}>
            <i className='bx bx-chevron-right'></i>
          </button>
        </div>
      </section>
    </>
  )
}

export default VideoNewsSlider
