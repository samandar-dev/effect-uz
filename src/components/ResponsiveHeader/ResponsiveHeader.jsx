import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/images/logo.svg'
import menuIcon from '../../assets/icons/navbar-icon.svg'
import RightDarkLight from '../Right/RightDark_Light/RightDarkLight'
import RightLanguage from '../Right/RightLanguage/RightLanguage'
import './ResponsiveHeader.scss'
import RightWeather from '../Right/RightWeather/RightWeather'

function ResponsiveHeader() {
  const { t } = useTranslation();
  const [navbarBtn, setNavBarBtn] = useState(false)
  const [searchBtn, setSearchBtn] = useState(false)

  return (
    <>
      <section className='respon-header'>
        <div className="respon-header__inner">
          <button className='respon-header__search-btn'
            onClick={() => (setSearchBtn(!searchBtn), setNavBarBtn(false))}>
            <i className='bx bx-search'></i>
          </button>

          <div className="respon-header__logo-box">
            <img src={logo} alt="logo" />
          </div>

          <button className='respon-header__navbar-btn'
            onClick={() => (setNavBarBtn(!navbarBtn), setSearchBtn(false))}>
            <img src={menuIcon} alt="menu icon" />
          </button>
        </div>

        <div className={`respon-header__navbar ${navbarBtn ? "showNavBar" : ""}`}>
          <div className='respon-header__top'>
            <RightLanguage />
            <RightDarkLight />
          </div>
          <div className="respon-header__weather">
            <RightWeather />
          </div>
        </div>

        <div className={`respon-header__search ${searchBtn ? "showNavBar" : ""}`}>
          <input
            type="text"
            name='search'
            placeholder={t("izlash")}
          />

          <span>
            <i className='bx bx-search'></i>
          </span>
        </div>
      </section>
    </>
  )
}

export default ResponsiveHeader
