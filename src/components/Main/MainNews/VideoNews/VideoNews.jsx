import GET from '../../../../API/GET'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'
import VideoRightItems from './VideoRightItem/VideoRightItems'
import './VideoNews.scss'

// ICONS -----------------------------------------------------

import playIcon from '../../../../assets/icons/play.svg'
import PhoneSlider from '../../../NewsItem/NewsItemSlider/NewsItemSlider'

function VideoNews() {
  const { t } = useTranslation()
  const [videoNewsItemId, setVideoNewsItemId] = useState(17)
  const [apiLang, setApiLang] = useState('oz')
  const [videoAct, setVideoAct] = useState(false)

  const [data, setData] = useState([])

  const fechData = async () => {
    try {
      const category = await GET.videos();
      setData(category.data)
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
      <section className='videonews'>
        <div className="videonews__inner">
          <h3 className="videonews__title">{t("vdyangi")}</h3>

          <div className="videonews__content">
            <div className={`videonews__content-left ${videoNewsItemId != 0 ? "animLeftVideoItem" : ""}`}>
              <ul className="videonews__content-left-list">
                {data.map((item, inx) => (
                  item.id <= videoNewsItemId ?
                    <li className="videonews__content-left-item" key={item.id}>
                      {videoAct
                        ? <iframe width="825" height="565" allow="autoplay; encrypted-media" src={`https://www.youtube.com/embed/${item.video_url}?autoplay=1`}></iframe>
                        : <>
                          <img src={item.default_img} alt={item.title_uz} />
                          <button className='videonews__content-left-play-btn' onClick={() => setVideoAct(true)}>
                            <img src={playIcon} alt="play icon" />
                          </button>

                          <div className="videonews____content-left-desc">
                            <p>
                              {apiLang === 'uz' ? item.title_oz.substring(0, 130) :
                                apiLang === 'oz' ? item.title_uz.substring(0, 130) :
                                  apiLang === 'ru' ? item.title_ru.substring(0, 130) :
                                    ""}
                              {
                                apiLang === 'uz' && 130 <= item.title_oz.substring().length ? "..." :
                                  apiLang === 'oz' && 130 <= item.title_uz.substring().length ? "..." :
                                    apiLang === 'ru' && 130 <= item.title_ru.substring().length ? "..." :
                                      ""}
                            </p>
                          </div>
                        </>
                      }
                    </li> : ""
                ))}
              </ul>
            </div>

            <div className="videonews__content-right">
              <ul className="videonews__content-right-list">
                <VideoRightItems
                  data={data}
                  setVideoNewsItemId={setVideoNewsItemId}
                />
              </ul>

              <Link to={'/news'}>
                <button className='videonews__content-right-btn'>
                  {t("otish")} <i className='bx bx-right-arrow-alt'></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VideoNews
