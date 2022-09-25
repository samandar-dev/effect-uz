import React from 'react'
import { Link } from 'react-router-dom'
import playIcon from '../../../../../assets/icons/play.svg'
import timeIcon from '../../../../../assets/icons/time-icon.svg'

function VideoRightItems({ data, setVideoNewsItemId }) {
  return (
    <>
      {data.map((item, inx) => (
        inx + 1 <= 5 ?
          <li className="videonews__content-right-item" key={item.id}
            onClick={() => setVideoNewsItemId(item.id)}>
            {/* <Link to={'/'}> */}
            <div className="videonews__content-right-img-box">
              <img src={item.default_img} alt="video img" />
              <button className='videonews__content-right-play-btn'>
                <img src={playIcon} alt="play icon" />
              </button>
            </div>

            <div className="videonews__content-right-desc">
              <span className='videonews__content-right-desc-data'>
                <img src={timeIcon} alt="hour icon" /> {item.created_date}
              </span>
              <p className='videonews__content-right-text'>{item.title_uz.substring(0, 45)}{45 <= item.title_uz.substring().length ? "..." : ""}</p>
            </div>
            {/* </Link> */}
          </li> : ""
      ))}
    </>
  )
}

export default VideoRightItems
