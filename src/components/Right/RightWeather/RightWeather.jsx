import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import GET from '../../../API/GET.JSX'
import sunIcon from '../../../assets/icons/sun.svg'
import './RightWeather.scss'

function RightWeather() {
  const { t } = useTranslation()
  const [weatherSlider, setWeatherSilder] = useState(1)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fechData = async () => {
    try {
      setLoading(false)
      const category = await GET.provence();
      setData(category.data)
      setLoading(true)
    } catch (err) {
      console.error(err)
      return;
    }
  }

  useEffect(() => {
    fechData()
  }, []);

  if (!loading) {
    return <div className='weather-box'></div>
  }
  return (
    <>
      <div className="right__weather">
        <div className="right__weather-top">
          <div className="right__weather-title-box">
            <ul className="right__weather-title-list"
              style={{
                transform: `translateX(-${weatherSlider * 150 - 150}px)`
              }}>
              {data.map((item, inx) => (
                <li className="right__weather-title-item" key={inx + 1}>
                  <p className='right__weather-title'>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button className={`right__weather-left-btn ${weatherSlider === 1 ? "weatherBtnAct" : ""}`}
              onClick={() => setWeatherSilder(weatherSlider > 1 ? weatherSlider - 1 : 1)}>
              <i className='bx bx-chevron-left' ></i>
            </button>
            <button className={`right__weather-right-btn ${weatherSlider === data.length ? "weatherBtnAct" : ""}`}
              onClick={() => setWeatherSilder(weatherSlider < data.length ? weatherSlider + 1 : data.length)}>
              <i className='bx bx-chevron-right' ></i>
            </button>
          </div>
        </div>

        <div className="right__weather-list-box">
          <ul className="right__weather-list"
            style={{
              transform: `translateX(-${weatherSlider * 255 - 255}px)`
            }}>
            {data.map((item, inx) => (
              <li className="right__weather-item" key={inx + 1}>
                <div>
                  <span className='right__weather-item-tit'>{t(`Quyoshli`)}</span>
                  <p className='right__weather-item-degree'>31<span>o</span>c / 25<span>o</span>c</p>
                </div>

                <div className="right__weather-item-img">
                  <img src={sunIcon} alt="sun icon" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default RightWeather
