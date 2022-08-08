import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import MainTop from '../Main/MainTop/MainTop'
import RightDarkLight from '../Right/RightDark_Light/RightDarkLight'
import RightLanguage from '../Right/RightLanguage/RightLanguage'
import './UzerPage.scss'

import user from '../../assets/images/user.png'
import teleg from '../../assets/icons/telegram.svg'
import GET from '../../API/GET'

function UzerPage() {
  let { id } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [apiLang, setApiLang] = useState('oz')

  const fechData = async () => {
    try {
      setLoading(false)
      const category = await GET.reporter(id);
      setData(category.data)
      setLoading(true)
    } catch (err) {
      return console.error(err);
    }
  }

  console.log(data);

  useEffect(() => {
    fechData()
    localStorage.getItem('language') != undefined ? setApiLang(localStorage.getItem('language')) : ""
  }, [localStorage.getItem('language')]);

  if (!loading) {
    return <div className='reporter-loading-box'><span></span><div></div></div>
  }
  return (
    <>
      <section className='userpage'>
        <div className="userpage__top">
          <MainTop />

          <div className="userpage__dark-lang">
            <div className="right__top">
              <RightDarkLight />
              <RightLanguage />
            </div>

            <div className="right__btns">
              <ul className="right__btns-list">
                <li className="right__btns-item">
                  <button className='right__btns-item-btn'></button>
                </li>
                <li className="right__btns-item">
                  <button className='right__btns-item-btn'></button>
                </li>
                <li className="right__btns-item">
                  <button className='right__btns-item-btn'></button>
                </li>
                <li className="right__btns-item">
                  <button className='right__btns-item-btn'></button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="userpage__main">
          <div className="userpage__main-left">
            <div className="userpage__main-user-box">
              <div className="userpage__main-img-box">
                <img src={data.img} alt="user" />
              </div>

              <div className="userpage__main-user-name-categor">
                <h3 className="userpage__main-user-name">{data.fullName}</h3>

                <ul className="userpage__main-list">
                  <li className="userpage__main-item">
                    <a href={`https://telegram.me/share/url?url=${data.telegram}`} target="_blank" className="readnews__share-btns">
                      <i className='readnews__tg bx bxl-telegram'></i>
                    </a>
                  </li>
                  <li className="userpage__main-item">
                    <a href={`https://telegram.me/share/url?url=${data.telegram}`} target="_blank" className="readnews__share-btns">
                      <i className='readnews__tg bx bxl-telegram'></i>
                    </a>
                  </li>
                  <li className="userpage__main-item">
                    <a href={`https://telegram.me/share/url?url=${data.telegram}`} target="_blank" className="readnews__share-btns">
                      <i className='readnews__tg bx bxl-telegram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="userpage__main-right">
            <div className="userpage__main-right-desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sed vulputate varius eget libero odio.
                Et amet aenean phasellus massa. Lobortis egestas arcu suspendisse cursus ac. Laoreet morbi nunc pharetra risus.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sed vulputate varius eget libero odio.
                Et amet aenean phasellus massa. Lobortis egestas arcu suspendisse cursus ac. Laoreet morbi nunc pharetra risus.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sed vulputate varius eget libero odio.
                Et amet aenean phasellus massa. Lobortis egestas arcu suspendisse cursus ac. Laoreet morbi nunc pharetra risus.
              </p>
            </div>

            <div className="userpage__main-right-status">
              <div className="userpage__main-right-status-items">
                <p>Maqolalar:</p>
                <span>{data.news_count}</span>
              </div>
              <div className="userpage__main-right-status-items">
                <p>Baholangan:</p>
                <span>{data.stars}</span>
              </div>
              <div className="userpage__main-right-status-items">
                <p>Reyting:</p>
                <span>3.5</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default UzerPage
