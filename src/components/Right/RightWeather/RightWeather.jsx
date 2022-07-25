import React, { useState } from 'react'
import sunIcon from '../../../assets/icons/sun.svg'
import './RightWeather.scss'

function RightWeather() {
  const [weatherSlider, setWeatherSilder] = useState(1)
  return (
    <>
      <div className="right__weather">
        <div className="right__weather-top">
          <div className="right__weather-title-box">
            <ul className="right__weather-title-list"
              style={{
                transform: `translateX(-${weatherSlider * 150 - 150}px)`
              }}>
              <li className="right__weather-title-item">
                <p className='right__weather-title'>Qashqadaryo, Qarshi</p>
              </li>
              <li className="right__weather-title-item">
                <p className='right__weather-title'>Tashkent</p>
              </li>
              <li className="right__weather-title-item">
                <p className='right__weather-title'>Andijon</p>
              </li>
            </ul>
          </div>

          <div>
            <button className={`right__weather-left-btn ${weatherSlider === 1 ? "weatherBtnAct" : ""}`}
              onClick={() => setWeatherSilder(weatherSlider > 1 ? weatherSlider - 1 : 1)}>
              <i className='bx bx-chevron-left' ></i>
            </button>
            <button className={`right__weather-right-btn ${weatherSlider === 3 ? "weatherBtnAct" : ""}`}
              onClick={() => setWeatherSilder(weatherSlider < 3 ? weatherSlider + 1 : 3)}>
              <i className='bx bx-chevron-right' ></i>
            </button>
          </div>
        </div>

        <div className="right__weather-list-box">
          <ul className="right__weather-list"
            style={{
              transform: `translateX(-${weatherSlider * 255 - 255}px)`
            }}>
            <li className="right__weather-item">
              <div>
                <span className='right__weather-item-tit'>Quyoshli</span>
                <p className='right__weather-item-degree'>31<span>o</span>c / 25<span>o</span>c</p>
              </div>

              <div className="right__weather-item-img">
                <img src={sunIcon} alt="sun icon" />
              </div>
            </li>
            <li className="right__weather-item">
              <div>
                <span className='right__weather-item-tit'>Bulutli</span>
                <p className='right__weather-item-degree'>15<span>o</span>c / 12<span>o</span>c</p>
              </div>

              <div className="right__weather-item-img">
                <img src={sunIcon} alt="sun icon" />
              </div>
            </li>
            <li className="right__weather-item">
              <div>
                <span className='right__weather-item-tit'>Quyoshli</span>
                <p className='right__weather-item-degree'>33<span>o</span>c / 29<span>o</span>c</p>
              </div>

              <div className="right__weather-item-img">
                <img src={sunIcon} alt="sun icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default RightWeather
