import GET from '../../API/GET.JSX'
import POST from '../../API/POST'
import parse from 'html-react-parser';
import Rating from '@mui/material/Rating';
import MainTop from '../Main/MainTop/MainTop'
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useParams } from 'react-router-dom'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import './NewsItem.scss'

// IMGS ---------------------------------------------------

import user_img from '../../assets/images/user-img.png'
import telegram from '../../assets/icons/telegram.svg'
import facebook from '../../assets/icons/facebook.svg'
import twitr from '../../assets/icons/twitr.svg'

function NewsItem() {
  let { id } = useParams()
  const { t } = useTranslation()
  const location = useLocation()
  const [data, setData] = useState([])
  const [value, setValue] = useState(2);
  const [nameVal, setNameVal] = useState("")
  const [descVal, setDescVal] = useState("")
  const [apiLang, setApiLang] = useState('oz')
  const [loading, setLoading] = useState(false)
  const [pochtaVal, setPochtaVal] = useState("")
  const [accardIcon, setAccrdIcon] = useState(false)

  const fechData = async () => {
    try {
      setLoading(false)
      const category = await GET.newsItem(id);
      setData(category.data)
      setLoading(true)
    } catch (err) {
      return console.error(err);
    }
  }

  const inputsFunc = (e) => {
    if (e.target.id == 'name') {
      setNameVal(e.target.value)
    }
    if (e.target.id == 'pochta') {
      setPochtaVal(e.target.value)
    }
    if (e.target.id == 'desc') {
      setDescVal(e.target.value)
    }
  }

  const comObj = {
    new_id: id,
    description: descVal,
    userAgent: nameVal
  }

  const addComment = async () => {
    if (descVal != "" && nameVal != "") {
      try {
        await POST.comment(comObj);
      } catch (err) {
        return console.error(err);
      }
    }
  }

  useEffect(() => {
    fechData()
    localStorage.getItem('language') != undefined ? setApiLang(localStorage.getItem('language')) : ""
  }, [localStorage.getItem('language')]);


  if (!loading) {
    return <div className='newItem-loading-box'></div>
  }
  return (
    <>
      <section className='phone'>
        <MainTop />

        <div className="phone__inner" key={data.id}>
          <h3 className="phone__title">
            {apiLang === 'uz' ? data.title_oz :
              apiLang === 'oz' ? data.title_uz :
                apiLang === 'ru' ? data.title_ru : ""}
          </h3>

          <div className="phone__btn-box">
            <button className='phone__btn'>{data.category_id}</button>
          </div>

          <div className="phone__img-box">
            <img src={data.default_img} alt="PhoneImg" />
          </div>

          <p className="phone__desc">
            {apiLang === 'uz' ? parse(data.description_oz) :
              apiLang === 'oz' ? parse(data.description_uz) :
                apiLang === 'ru' ? parse(data.description_ru) : ""}
          </p>

          <div className="phone__user-box">
            <Link className="phone__user-name" to={`/profil/${data.user_id}`}>
              <h4 className="phone__user-name">{data.user}</h4>
            </Link>

            <div className="phone__user-rating">
              <div className="phone__user-star">
                <p className="phone__user-star-tit">{t('baho')}</p>

                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>

              <div className="phone__user-rating-count">
                <div>
                  <p>{t('baholangan')}:</p>
                  <span>{data.views}</span>
                </div>
                <div>
                  <p>{t('reyting')}:</p>
                  <span>3.5</span>
                </div>
              </div>
            </div>

            <div className="phone__forward">
              <p className="phone__forward-tit">{t('ulashing')}</p>

              <ul className="phone__forward-list">
                <li className="phone__forward-item">
                  <a href={`https://telegram.me/share/url?url=effect.uz${location.pathname}`} target="_blank" className="readnews__share-btns">
                    <i className='readnews__tg bx bxl-telegram'></i>
                  </a>
                </li>
                <li className="phone__forward-item">
                  <a href={`https://www.facebook.com/sharer.php?u=effect.uz${location.pathname}`} target="_blank" className="readnews__share-btns">
                    <i className='bx bxl-facebook-circle'></i>
                  </a>
                </li>
                <li className="phone__forward-item">
                  <a href={`https://twitter.com/intent/tweet?text=effect.uz${location.pathname}`} target="_blank" className="readnews__share-btns">
                    <i className='readnews__tw bx bxl-twitter'></i>
                  </a>
                </li>
                <li className="phone__forward-item">
                  <div className="readnews__share-btns" onClick={() => {
                    return (
                      navigator.clipboard.writeText(`https://effect.uz${location.pathname}`),
                      toast.info("Nusxalandi", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      })
                    )
                  }}>
                    <i className='bx bx-link-alt'></i>
                  </div>
                </li>
              </ul>

              <div className="phone__forward-copy">
                <p className="phone__forward-copy-link">{`https://effect.uz${location.pathname}`}</p>
                <span></span>
                <button className='phone__forward-copy-btn'
                  onClick={() => {
                    return (
                      navigator.clipboard.writeText(`https://effect.uz${location.pathname}`),
                      toast.info("Nusxalandi", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      })
                    )
                  }}>{t('nusxa')}</button>
              </div>
            </div>
          </div>

          <div className="phone__comment">
            <div className="phone__comment-form-box">
              <p className="phone__comment-title">{t('izoh-qoldirish')} <span></span></p>

              <form className="phone__comment-form">
                <div className="phone__comment-input-box">
                  <input className='phone__comment-input-user'
                    id='name'
                    name='name'
                    type="text"
                    value={nameVal}
                    placeholder={`${t('ismingiz')}`}
                    onChange={(e) => inputsFunc(e)}
                  />

                  <input className='phone__comment-input-user'
                    id='pochta'
                    name='email'
                    type="text"
                    value={pochtaVal}
                    placeholder={`${t('elektron-pochta')}`}
                    onChange={(e) => inputsFunc(e)}
                  />
                </div>

                <div className="phone__comment-input-box">
                  <textarea className='phone__comment-input-desc'
                    id='desc'
                    name='desc'
                    type="text"
                    value={descVal}
                    placeholder={`${t('izohingiz-bu')}`}
                    onChange={(e) => inputsFunc(e)}
                  />

                  <button className='phone__comment-form-btn'
                    onClick={() => (addComment(), setNameVal(""), setDescVal(""))}>{t('jonatish')}
                  </button>
                </div>
              </form>
            </div>

            <div className="phone__comments-box">
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  onClick={() => setAccrdIcon(!accardIcon)}
                >
                  <p className="phone__comments-title">
                    {t('barcha-izohlar')} ({data.comment_count})
                    <span>{!accardIcon ? <i className='bx bx-chevron-down'></i> : <i className='bx bx-chevron-up'></i>}</span>
                  </p>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>
                    <ul className="phone__comments-list">
                      {data.comments.map((itm, inx) => (
                        <li className="phone__comments-item" key={inx + 1}>
                          <div className="phone__comments-item-like-box">
                            <button>+</button>
                            <p>12</p>
                            <button>-</button>
                          </div>

                          <div className="phone__comments-item-desc">
                            <div className="phone__comments-item-desc-top">
                              <img src={user_img} alt="user img" />
                              <p className='phone__comments-item-desc-user-name'>{itm.userAgent}</p>
                              <span className='phone__comments-item-desc-data-comm'>1 {t('oyiga')} avval</span>
                            </div>

                            <div className="phone__comments-item-desc-box">
                              <p className='phone__comments-item-desc'>{itm.description}</p>
                            </div>
                          </div>
                        </li>
                      )).reverse()}
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <ToastContainer />

      </section>
    </>
  )
}

export default NewsItem
