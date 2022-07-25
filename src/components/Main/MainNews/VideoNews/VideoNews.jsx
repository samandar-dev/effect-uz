import React, { useState } from 'react'
import './VideoNews.scss'

import video from './google.mp4'
import playIcon from '../../../../assets/icons/play.svg'
import VideoRightItems from './VideoRightItem/VideoRightItems'
import RightIcon from '../../../../assets/icons/videonews-right-icon.svg'
import videoImg1 from '../../../../assets/images/video-news-img-1.png'

function VideoNews() {

  const [videoNewsItemId, setVideoNewsItemId] = useState(1)

  const videoNewsItems = [
    {
      id: 1,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
      video: video,
    },
    {
      id: 2,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
      video: video,
    },
    {
      id: 3,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
      video: video,
    },
    {
      id: 4,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
      video: video,
    },
    {
      id: 5,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
      video: video,
    },
    {
      id: 6,
      desc: "O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum qilindi",
      video: video,
    },
  ]

  return (
    <>
      <section className='videonews'>
        <div className="videonews__inner">
          <h3 className="videonews__title">Video-yangiliklar</h3>

          <div className="videonews__content">
            <div className="videonews__content-left">
              <ul className="videonews__content-left-list">
                {videoNewsItems.map((item, inx) => (
                  videoNewsItemId === item.id ?
                    <li className="videonews__content-left-item" key={inx + 1}>
                      {/* <video width='825' height='565' className='videonews__content-left-video' controls src={item.video}>
                      </video> */}
                      <img src={videoImg1} alt="" />
                      <button className='videonews__content-left-play-btn'>
                        <img src={playIcon} alt="play icon" />
                      </button>
                      <div className="videonews____content-left-desc">
                        <p>{item.desc}</p>
                      </div>
                    </li> : ""
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
                Bo‘limga o‘tish <i className='bx bx-right-arrow-alt'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VideoNews
