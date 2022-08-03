import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

import FooterLogo from '../../assets/images/footer-logo.svg'
import meta from '../../assets/icons/meta.svg'
import email from '../../assets/icons/email.svg'
import store1 from '../../assets/icons/store.svg'
import store2 from '../../assets/icons/appstore.svg'
import store3 from '../../assets/icons/winstore.svg'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  return (
    <>
      <section className='footer'>
        <div className="footer__inner">
          <div className="footer__logo-box">
            <img src={FooterLogo} alt="logo" />
          </div>

          <div className="footer__content">
            <div className="footer__menus-desc">
              <div className="footer__menus">
                <div className="footer__menu">
                  <h3 className='footer__menus-title'>{t("Foydali sahifalar")}</h3>

                  <ul className="footer__menus-list">
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Yangiliklar lentasi")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Foto-yangiliklar")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Video-yangiliklar")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Content")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Integrations")}</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer__menu">
                  <h3 className='footer__menus-title'>{t("Ruknlar")}</h3>

                  <ul className="footer__menus-list">
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Siyosat")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Texnologiya")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Sport")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Website Builder")}</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer__menu">
                  <h3 className='footer__menus-title'>{t("Hudutlar")}</h3>

                  <ul className="footer__menus-list">
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Toshkent")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Samarqand")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Qashqadaryo")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Hosting")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Developers")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Support")}</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer__menu">
                  <h3 className='footer__menus-title'>{t("Support")}</h3>

                  <ul className="footer__menus-list">
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("About Us")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Careers")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Ko’p so’raladigan savollar")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Jamoa")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Bo’sh ish o’rni")}</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <p className='footer__desc-text'>
                «EFFECT.UZ» интернет-нашри 2019 йилнинг 1 ноябрь куни электрон ОAВ сифатида Ўзбекистон Республикаси Президенти Aдминстрацияси ҳузуридаги Aхборот ва оммавий коммуникациялар агентлигида рўйхатдан ўтказилган. Гувоҳнома рақами: 1323. Муассис: «EFFECTUZBEK» МЧЖ Сайт раҳбари: Aкмалхон Эшонхонов Электрон манзил: www.effect.uz@gmail.com Таҳририят манзили: 100016, Тошкент шаҳри, Яшнобод тумани, Маҳтумқули кўчаси 26-уй. EFFECT.UZ сайтида эълон қилинган материаллардан нусха кўчириш, тарқатиш ва бошқа шаклларда фойдаланиш фақат таҳририят раҳбариятининг ёзма розилиги билан амалга оширилади.
              </p>
            </div>

            <div className="footer__right">
              <div className="footer__contact">
                <h3 className='footer__contact-title'>{t("Contact Us")}</h3>

                <ul className="footer__contact-list">
                  <li className="footer__contact-item">
                    <img src={meta} alt="meta" />
                    <p>
                      Wisconsin Ave, Suite 700
                      Chevy Chase, Maryland 20815
                    </p>
                  </li>
                  <li className="footer__contact-item">
                    <img src={email} alt="meta" />
                    <Link to={'/'}>support@figma.com</Link>
                  </li>
                </ul>

                <button className='footer__contact-subscribe-btn'>Subscribe</button>
              </div>

              <div className="footer__follow">
                <h3 className='footer__follow-title'>{t("Follow us")}</h3>

                <ul className="footer__follow-list">
                  <li className="footer__follow-item">
                    <Link to={'/'}><i className='bx bxl-facebook'></i></Link>
                  </li>
                  <li className="footer__follow-item">
                    <Link to={'/'}><i className='bx bxl-telegram' ></i></Link>
                  </li>
                  <li className="footer__follow-item">
                    <Link to={'/'}><i className='bx bxl-instagram' ></i></Link>
                  </li>
                  <li className="footer__follow-item">
                    <Link to={'/'}><i className='bx bxl-figma' ></i></Link>
                  </li>
                </ul>
              </div>

              <div className="footer__store">
                <ul className="footer__store-list">
                  <li className="footer__store-item">
                    <img src={store1} alt="google play" />
                  </li>
                  <li className="footer__store-item">
                    <img src={store2} alt="app store" />
                  </li>
                  <li className="footer__store-item">
                    <img src={store3} alt="windows store" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
