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
                  <h3 className='footer__menus-title'>{t("fsahifalar")}</h3>

                  <ul className="footer__menus-list">
                    <li className="footer__menus-item">
                      <Link to={'/news'}>{t("yangi-lentasi")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/news'}>{t("ftyangi")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/news'}>{t("vdyangi")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("content")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("integrations")}</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer__menu">
                  <h3 className='footer__menus-title'>{t("rukun")}</h3>

                  <ul className="footer__menus-list">
                    <li className="footer__menus-item">
                      <Link to={'/politics'}>{t("siyosat")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/politics'}>{t("texno")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/politics'}>{t("sport")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("Website Builder")}</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer__menu">
                  <h3 className='footer__menus-title'>{t("hududlar")}</h3>

                  <ul className="footer__menus-list">
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("toshkent")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("samarqand")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("qashqadaryo")}</Link>
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
                      <Link to={'/'}>{t("kop-sovollar")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("jamoa")}</Link>
                    </li>
                    <li className="footer__menus-item">
                      <Link to={'/'}>{t("bosh-ish-orin")}</Link>
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
