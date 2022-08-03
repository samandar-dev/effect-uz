import React from 'react'
import MainTop from '../Main/MainTop/MainTop'
import RightDarkLight from '../Right/RightDark_Light/RightDarkLight'
import RightLanguage from '../Right/RightLanguage/RightLanguage'
import './UzerPage.scss'

import user from '../../assets/images/user.png'
import teleg from '../../assets/icons/telegram.svg'

function UzerPage() {
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
                <img src={user} alt="user" />
              </div>

              <div className="userpage__main-user-name-categor">
                <p className='userpage__main-user-categor'>Bosh muharrir</p>
                <h3 className="userpage__main-user-name">Sobirov Saidalixon</h3>

                <ul className="userpage__main-list">
                  <li className="userpage__main-item">
                    <button>
                      <img src={teleg} alt="telegram" />
                    </button>
                  </li>
                  <li className="userpage__main-item">
                    <button>
                      <img src={teleg} alt="telegram" />
                    </button>
                  </li>
                  <li className="userpage__main-item">
                    <button>
                      <img src={teleg} alt="telegram" />
                    </button>
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
                <span>1605</span>
              </div>
              <div className="userpage__main-right-status-items">
                <p>Baholangan:</p>
                <span>1605</span>
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
