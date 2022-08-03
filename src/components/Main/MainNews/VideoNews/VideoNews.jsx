import React, { useRef, useState } from 'react'
import './VideoNews.scss'

import playIcon from '../../../../assets/icons/play.svg'
import VideoRightItems from './VideoRightItem/VideoRightItems'
import RightIcon from '../../../../assets/icons/videonews-right-icon.svg'
import videoImg1 from '../../../../assets/images/video-news-img-1.png'
import { useTranslation } from 'react-i18next'

function VideoNews() {
  const { t } = useTranslation()
  const [videoNewsItemId, setVideoNewsItemId] = useState(1)
  const [videoAct, setVideoAct] = useState(false)
  const videoActRef = useRef()

  console.log(videoActRef.current);

  const videoNewsItems = [
    {
      id: 1,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
    },
    {
      id: 2,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
    },
    {
      id: 3,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
    },
    {
      id: 4,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
    },
    {
      id: 5,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
    },
    {
      id: 6,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
    },
  ]

  return (
    <>
      <section className='videonews'>
        <div className="videonews__inner">
          <h3 className="videonews__title">{t("Video-yangiliklar")}</h3>

          <div className="videonews__content">
            <div className="videonews__content-left">
              <ul className="videonews__content-left-list">
                {videoNewsItems.map((item, inx) => (
                  <li className="videonews__content-left-item" key={inx + 1}>
                    {/* <video width='825' height='565' className='videonews__content-left-video' controls src='https://www.youtube.com/embed/MB8tDJTpUVM'>
                    </video> */}

                    {videoAct
                      ? <iframe width="825" height="565" ref={videoActRef} src="https://www.youtube.com/embed/MB8tDJTpUVM"></iframe>
                      : <>
                        <img src={videoImg1} alt="" />
                        <button className='videonews__content-left-play-btn' onClick={() => (setVideoAct(true), videoActRef.current)}>
                          <img src={playIcon} alt="play icon" />
                        </button>
                        <div className="videonews____content-left-desc">
                          <p>{item.desc}</p>
                        </div>
                      </>
                    }
                  </li>
                ))}
              </ul>
            </div>

            <div className="videonews__content-right">
              <ul className="videonews__content-right-list">
                <VideoRightItems
                  videoNewsItems={videoNewsItems}
                  videoNewsItemId={videoNewsItemId}
                  setVideoNewsItemId={setVideoNewsItemId}
                />
              </ul>

              <button className='videonews__content-right-btn'>
                {t("Bo‘limga o‘tish")} <i className='bx bx-right-arrow-alt'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VideoNews
