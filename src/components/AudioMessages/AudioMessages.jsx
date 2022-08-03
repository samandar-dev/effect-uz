import React, { useEffect, useRef, useState } from 'react'
import MainTop from '../Main/MainTop/MainTop'
import './AudioMessages.scss'

import img1 from '../../assets/images/technology-img-3.png'
import icon from '../../assets/icons/audio-icon.svg'
import dataIcon from '../../assets/icons/dataIcon.svg'
import { useTranslation } from 'react-i18next'
import GET from '../../API/GET.JSX'

function AudioMessages() {
  const { t } = useTranslation()
  const [audioAct, setAudioAct] = useState(1)
  const [audioPlay, setAudioPlay] = useState(false)
  const obj = [1, 2, 3, 4, 5, 6, 7, 8]

  const [voiceItem, setVoiceItem] = useState([])
  const [voices, setVoices] = useState([])
  const audioRef = useRef()

  const [playPause, setPLayPause] = useState(false)
  const [randomMus, setRandomMus] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [timeObj, setTimeObj] = useState({
    currentTime: 0,
    duration: 0
  })

  const play_pause_Func = () => {
    if (audioPlay) {
      audioRef.current.pause()
    }
    else {
      audioRef.current.play()
    }
    setAudioPlay(!audioPlay)
  }

  const getTimeFunc = (time) => {
    if (time) {
      return (
        Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
      )
    } else {
      return '0:00'
    }
  }

  const rangeFunc = (e) => {
    audioRef.current.currentTime = e.target.value
    setTimeObj({
      ...timeObj,
      currentTime: e.target.value,
    })
  }

  const updateTime = (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    setTimeObj({
      ...timeObj,
      currentTime: currentTime,
      duration: duration
    })
  }

  const fechData = async () => {
    try {
      const voiceone = await GET.voiceItem(1);
      const voiceAll = await GET.voiceAll(1);
      setVoiceItem(voiceone.data)
      setVoices(voiceAll.data.items.reverse())
    } catch (err) {
      console.error(err)
      return;
    }
  }

  const voiceitemChange = (ID) => {
    setAudioAct(ID)
    voices.map(item => {
      if (item.id === ID) {
        setVoiceItem(item)
      }
    })
  }

  useEffect(() => {
    fechData()
  }, []);

  return (
    <>
      <section className='audiomessag'>
        <MainTop />

        <div className="audiomessag__inner">
          <h3 className="audiomessag__title">{t('Audio Xabarlar')}</h3>

          <div className="audiomessag__audio-box">
            <p className="audiomessag__desc">{voiceItem.id}</p>

            <div className="audiomessag__audio-controls">
              <div className="audiomessag__audio-btns">
                <button className='audiomessag__audio-left-btn' onClick={() => voiceitemChange(voiceItem.id - 1)}>
                  <i className='bx bx-chevron-left'></i>
                </button>
                <button className='audiomessag__audio-play-btn'
                  onClick={play_pause_Func}>
                  {audioPlay
                    ? <i className='bx bx-pause'></i>
                    : <i className='bx bx-play'></i>
                  }
                </button>
                <button className='audiomessag__audio-right-btn' onClick={() => voiceitemChange(voiceItem.id + 1)}>
                  <i className='bx bx-chevron-right'></i>
                </button>
                <audio onTimeUpdate={updateTime} ref={audioRef} src={voiceItem.voice}></audio>
              </div>

              <div className="audiomessag__audio-time-sound">
                <span className='audiomessag__time'>{getTimeFunc(timeObj.currentTime)} / {getTimeFunc(timeObj.duration)}</span>

                <div className="audiomessag__audio-anim">
                  <input
                    onChange={rangeFunc}
                    min={0}
                    value={timeObj.currentTime}
                    max={timeObj.duration}
                    type="range"
                    name="range"
                    id="control__ragne"
                    style={{
                      backgroundImage: 'linear-gradient(#0768b5, #0768b5)',
                      backgroundSize: `${Math.floor(timeObj.currentTime >= 9 ? timeObj.currentTime / 2.07 : timeObj.currentTime)}% 100%`,
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>

                {/* <div className="audiomessag__sound">
                  <div>
                    <span></span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="audiomessag__audios">
            <ul className="audiomessag__list">
              {voices.map((item, inx) => (
                <li className={`audiomessag__item ${inx + 1 === audioAct ? "audioItemAct" : ""}`} key={inx + 1}
                  onClick={() => voiceitemChange(item.id)}>
                  <div className="audiomessag__img-box">
                    <img src={item.img} alt="item audio" />
                  </div>

                  <div className="audiomessag__desc-box">
                    <p className="audiomessag__desc-text">{item.title_uz}</p>

                    <div className="audiomessag__desc-data-btns">
                      <span className='audiomessag__desc-data'>
                        <img src={dataIcon} alt="data icon" /> 11:45  |  13.07.2022
                      </span>

                      <dir>
                        <button className='audiomessag__desc-btn'>Tech</button>
                        <button className='audiomessag__desc-btn'>Mobile</button>
                      </dir>
                    </div>
                  </div>

                  <div className={`audiomessag__item-icon ${inx + 1 !== audioAct ? "d-none" : ""}`}>
                    <img src={icon} alt="audio icon" />
                  </div>
                </li>
              ))}
            </ul>

            <div className='audiomessag__btn-box'>
              <button className='audiomessag__btn'>Yana yuklash</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AudioMessages
