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
  const [apiLang, setApiLang] = useState('oz')
  const [loading, setLoading] = useState(false)

  const [voiceItem, setVoiceItem] = useState([])
  const [voices, setVoices] = useState([])
  const audioRef = useRef()

  const [volumeVal, setVolumeVal] = useState(50)
  const [playPause, setPLayPause] = useState(false)
  const [randomMus, setRandomMus] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [timeObj, setTimeObj] = useState({
    currentTime: 0,
    duration: 0
  })

  const fechData = async () => {
    try {
      setLoading(false)
      const voiceone = await GET.voiceItem(1);
      const voiceAll = await GET.voiceAll(1);
      setVoiceItem(voiceone.data)
      setVoices(voiceAll.data.items.reverse())
      setLoading(true)
    } catch (err) {
      console.error(err)
      return;
    }
  }

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

  const nextVoiceFunc = () => {
    audioRef.current.currentTime = 0
    voices.length - 1 >= voiceItem.id ? voiceitemChange(voiceItem.id + 1) : voices.length - 1
  }

  const privetVoiceFunc = () => {
    audioRef.current.currentTime = 0
    voiceItem.id > 1 ? voiceitemChange(voiceItem.id - 1) : 1
  }

  const volumeHandler = (e) => {
    audioRef.current.volume = e.target.value / 100
    setVolumeVal(e.target.value)
    console.log(e.target.value);
  }

  const voiceitemChange = (ID) => {
    setAudioAct(ID)
    voices.map(item => {
      if (item.id === ID) {
        setVoiceItem(item)
      }
    })
  }

  console.log(voiceItem);

  useEffect(() => {
    fechData()
    localStorage.getItem('language') != undefined ? setApiLang(localStorage.getItem('language')) : ""
  }, [localStorage.getItem('language')]);


  if (!loading) {
    return <div className='audio-loading-box'></div>
  }
  return (
    <>
      <section className='audiomessag'>
        <MainTop />

        <div className="audiomessag__inner">
          <h3 className="audiomessag__title">{t('audi-xabar')}</h3>

          <div className="audiomessag__audio-box">
            <p className="audiomessag__desc">
              {apiLang === 'uz' ? voiceItem.title_oz.substring(0, 40) :
                apiLang === 'oz' ? voiceItem.title_uz.substring(0, 40) :
                  apiLang === 'ru' ? voiceItem.title_ru.substring(0, 40) :
                    ""}
            </p>

            <div className="audiomessag__audio-controls">
              <div className="audiomessag__audio-btns">
                <button className='audiomessag__audio-left-btn' onClick={() => privetVoiceFunc()}>
                  <i className='bx bx-chevron-left'></i>
                </button>

                <button className='audiomessag__audio-play-btn' onClick={play_pause_Func}>
                  {audioPlay
                    ? <i className='bx bx-pause'></i>
                    : <i className='bx bx-play'></i>
                  }
                </button>

                <button className='audiomessag__audio-right-btn' onClick={() => nextVoiceFunc()}>
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
                      backgroundSize: `${Math.floor(timeObj.currentTime >= 9 ? timeObj.currentTime / 2.1 : timeObj.currentTime)}% 100%`,
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>

                <div className="audiomessag__volume">
                  <input
                    type="range"
                    onChange={volumeHandler}
                    style={{
                      backgroundImage: 'linear-gradient(#0768b5, #0768b5)',
                      backgroundSize: `${volumeVal}% 100%`,
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="audiomessag__audios">
            <ul className="audiomessag__list">
              {voices.map((item, inx) => (
                <li className={`audiomessag__item ${inx + 1 === audioAct ? "audioItemAct" : ""}`} key={inx + 1}
                  onClick={() => (voiceitemChange(inx + 1), audioRef.current.currentTime = 0)}>
                  <div className="audiomessag__img-box">
                    <img src={item.img} alt="item audio" />
                  </div>

                  <div className="audiomessag__desc-box">
                    <p className="audiomessag__desc-text">
                      {apiLang === 'uz' ? item.title_oz.substring(0, 40) :
                        apiLang === 'oz' ? item.title_uz.substring(0, 40) :
                          apiLang === 'ru' ? item.title_ru.substring(0, 40) :
                            ""}
                    </p>

                    <div className="audiomessag__desc-data-btns">
                      <span className='audiomessag__desc-data'>
                        <img src={dataIcon} alt="data icon" /> 11:45  |  {voiceItem.created_date}
                      </span>

                      <div>
                        <button className='audiomessag__desc-btn'>Tech</button>
                        <button className='audiomessag__desc-btn'>Mobile</button>
                      </div>
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
