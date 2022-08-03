import React from 'react'
import playIcon from '../../../../../assets/icons/play.svg'
import timeIcon from '../../../../../assets/icons/time-icon.svg'
import videoImg1 from '../../../../../assets/images/video-news-img-1.png'

function VideoRightItems({ videoNewsItems, videoNewsItemId, setVideoNewsItemId }) {
  return (
    <>
      {videoNewsItems.map((item, inx) => (
        videoNewsItemId !== item.id ?
          <li className="videonews__content-right-item" key={inx + 1}>
            <div className="videonews__content-right-img-box">
              <img src={videoImg1} alt="video img" />
              <button className='videonews__content-right-play-btn'>
                <img src={playIcon} alt="play icon" />
              </button>
            </div>

            <div className="videonews__content-right-desc">
              <span className='videonews__content-right-desc-data'>
                <img src={timeIcon} alt="hour icon" /> 05.11.2021
              </span>
              <p className='videonews__content-right-text'>{item.desc}</p>
            </div>
          </li> : ""
      ))}
    </>
  )
}

export default VideoRightItems
