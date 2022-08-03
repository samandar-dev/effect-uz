import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MainTop from '../Main/MainTop/MainTop'
import './NewsItem.scss'

import PhoneImg from '../../assets/images/phone-img.png'
import user_img from '../../assets/images/user-img.png'
import telegram from '../../assets/icons/telegram.svg'
import facebook from '../../assets/icons/facebook.svg'
import twitr from '../../assets/icons/twitr.svg'
import GET from '../../API/GET.JSX'

function NewsItem() {
  const location = useLocation()
  const [data, setData] = useState([])

  const fechData = async () => {
    try {
      const category = await GET.newsAll();
      setData(category.data.items)
    } catch (err) {
      console.error(err)
      return;
    }
  }

  useEffect(() => {
    fechData()
  }, []);

  return (
    <>
      <section className='phone'>
        <MainTop />

        {data.map(item => (
          location.pathname.split('/').at(-1) == item.id ?
            <div className="phone__inner">
              <h3 className="phone__title">Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August</h3>

              <div className="phone__btn-box">
                <button className='phone__btn'>{ }</button>
                <button className='phone__btn'>Mobile</button>
              </div>

              <div className="phone__img-box">
                <img src={item.default_img} alt="PhoneImg" />
              </div>

              <p className="phone__desc">
                Samsung had a pretty quiet Mobile World Congress event, but it did tell us we’d learn more about its upcoming Google-approved smartwatch at its next Unpacked event. Unfortunately, the company didn’t tell us when exactly that would be, but a new report from Korean publication DigitalDaily News (via 9to5Google) claims the next Unpacked will take place on August 11, at 10 AM ET.
              </p>

              <p className='phone__desc'>
                Notably, the new Galaxy Watches will be Samsung’s first to not use Tizen OS. Google collaborated with Samsung to revamp Wear OS from the ground up, making it smoother and more efficient.
              </p>
              <p className='phone__desc'>
                Hopefully, the devices are able to maintain the long battery life Samsung’s smartwatches have been known for, while having much greater compatibility with smartwatch apps via Wear OS. That said, the watch will use a custom One UI Watch skin — because it wouldn’t be Samsung if it didn’t put its own twist on the software.
              </p>
              <p className="phone__desc">
                As for the Z Fold 3, it’s expected to be a refinement of the original Fold’s concept without major changes to the form factor. The biggest change aside from the expected spec bump is that the Z Fold 3 will support the S-Pen.
              </p>

              <div className="phone__user-box">
                <Link className="phone__user-name" to={'/profil/:id'}>
                  <h4 className="phone__user-name">Saidalixon Sobirov</h4>
                </Link>

                <div className="phone__user-rating">
                  <div className="phone__user-star">
                    <p className="phone__user-star-tit">Yangilikga baho bering</p>

                    <ul className="phone__user-star-list">
                      <li className="phone__user-star-item">
                        <span>
                          <i className='bx bxs-star' style={{ color: '#faff05' }}  ></i>
                        </span>
                      </li>
                      <li className="phone__user-star-item">
                        <span>
                          <i className='bx bxs-star' style={{ color: '#CCCCCC' }}  ></i>
                        </span>
                      </li>
                      <li className="phone__user-star-item">
                        <span>
                          <i className='bx bxs-star' style={{ color: '#CCCCCC' }}  ></i>
                        </span>
                      </li>
                      <li className="phone__user-star-item">
                        <span>
                          <i className='bx bxs-star' style={{ color: '#CCCCCC' }}  ></i>
                        </span>
                      </li>
                      <li className="phone__user-star-item">
                        <span>
                          <i className='bx bxs-star' style={{ color: '#CCCCCC' }}  ></i>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="phone__user-rating-count">
                    <div>
                      <p>Baholangan:</p>
                      <span>1605</span>
                    </div>
                    <div>
                      <p>Reyting:</p>
                      <span>3.5</span>
                    </div>
                  </div>
                </div>

                <div className="phone__forward">
                  <p className="phone__forward-tit">Maqolani ulashing</p>

                  <ul className="phone__forward-list">
                    <li className="phone__forward-item">
                      <img src={telegram} alt="telegram" />
                    </li>
                    <li className="phone__forward-item">
                      <img src={facebook} alt="telegram" />
                    </li>
                    <li className="phone__forward-item">
                      <img src={twitr} alt="telegram" />
                    </li>
                  </ul>

                  <div className="phone__forward-copy">
                    <p className="phone__forward-copy-link">{`https://effect.uz${location.pathname}`}</p>
                    <span></span>
                    <button className='phone__forward-copy-btn'>Nusxa olish</button>
                  </div>
                </div>
              </div>

              <div className="phone__comment">
                <div className="phone__comment-form-box">
                  <p className="phone__comment-title">Izoh qoldirish <span></span></p>

                  <form className="phone__comment-form">
                    <div className="phone__comment-input-box">
                      <input className='phone__comment-input-user'
                        name='name'
                        type="text"
                        placeholder='Ismingiz'
                      />
                      <input className='phone__comment-input-user'
                        name='email'
                        type="text"
                        placeholder='Elektron pochtangiz (ixtiyoriy)'
                      />
                    </div>
                    <div className="phone__comment-input-box">
                      <textarea className='phone__comment-input-desc'
                        name='desc'
                        type="text"
                        placeholder='Izohingizni bu yerga yozing…'
                      />
                      <button className='phone__comment-form-btn'>JO’NATISH</button>
                    </div>
                  </form>
                </div>

                <div className="phone__comments-box">
                  <p className="phone__comments-title">Barcha izohlar (02) <span><i className='bx bx-chevron-up'></i></span></p>

                  <ul className="phone__comments-list">
                    <li className="phone__comments-item">
                      <div className="phone__comments-item-like-box">
                        <button>+</button>
                        <p>12</p>
                        <button>-</button>
                      </div>

                      <div className="phone__comments-item-desc">
                        <div className="phone__comments-item-desc-top">
                          <Link to={'/profil/:id'}>
                            <img src={user_img} alt="user img" />
                          </Link>
                          <Link to={'/profil/:id'}>
                            <p className='phone__comments-item-desc-user-name'>amyrobson</p>
                          </Link>
                          <span className='phone__comments-item-desc-data-comm'>1 oy avval</span>
                        </div>

                        <div className="phone__comments-item-desc-box">
                          <p className='phone__comments-item-desc'>
                            Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.
                            You’ve nailed the design and the responsiveness at various breakpoints works really well.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="phone__comments-item">
                      <div className="phone__comments-item-like-box">
                        <button>+</button>
                        <p>12</p>
                        <button>-</button>
                      </div>

                      <div className="phone__comments-item-desc">
                        <div className="phone__comments-item-desc-top">
                          <Link to={'/profil/:id'}>
                            <img src={user_img} alt="user img" />
                          </Link>
                          <Link to={'/profil/:id'}>
                            <p className='phone__comments-item-desc-user-name'>amyrobson</p>
                          </Link>
                          <span className='phone__comments-item-desc-data-comm'>1 oy avval</span>
                        </div>

                        <div className="phone__comments-item-desc-box">
                          <p className='phone__comments-item-desc'>
                            Impressive! Though it seems the drag feature could be improved. But overall it looks incredible.
                            You’ve nailed the design and the responsiveness at various breakpoints works really well.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> : ""
        ))}
      </section>
    </>
  )
}

export default NewsItem
