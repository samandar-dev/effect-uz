import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import GET from '../../API/GET.JSX';
import './Sidebar.scss'

// ICONS -------------------------------------------------------

import Logo from '../../assets/images/logo.svg'
import navIcon1 from '../../assets/icons/navIcon-1.svg';
import navIcon2 from '../../assets/icons/navIcon-2.svg';
import navIcon3 from '../../assets/icons/navIcon-3.svg';
import navIcon4 from '../../assets/icons/navIcon-4.svg';
import navIcon5 from '../../assets/icons/navIcon-5.svg';
import navIcon6 from '../../assets/icons/navIcon-6.svg';
import iconRight from '../../assets/icons/right-icon.svg';
import iconBottom from '../../assets/icons/bottom-icon.svg';
import navIcon_act_1 from '../../assets/icons/navIcon-act-1.svg';
import navIcon_act_2 from '../../assets/icons/navIcon-act-2.svg';
import navIcon_act_3 from '../../assets/icons/navIcon-act-3.svg';
import navIcon_act_4 from '../../assets/icons/navIcon-act-4.svg';
import navIcon_act_5 from '../../assets/icons/navIcon-act-5.svg';
import navIcon_act_6 from '../../assets/icons/navIcon-act-6.svg';

function Sidebar() {
  const { t } = useTranslation();
  const [data, setData] = useState([])
  const [apiLang, setApiLang] = useState('oz')
  const [navItemAcardionOne, setNavItemAcardionOne] = useState(false)
  const [navItemAcardionTwo, setNavItemAcardionTwo] = useState(false)

  const navItems = [
    {
      id: 1,
      name: t('bosh-sahifa'),
      pathName: "/home",
      icon: navIcon1,
      iconAct: navIcon_act_1
    },
    {
      id: 2,
      name: t('yangi-lentasi'),
      pathName: "/news",
      icon: navIcon2,
      iconAct: navIcon_act_2
    },
    {
      id: 3,
      name: t('rukun'),
      pathName: "/politics",
      icon: navIcon3,
      iconAct: navIcon_act_3
    },
    {
      id: 4,
      name: t('audi-xabar'),
      pathName: "/audiomessag",
      icon: navIcon4,
      iconAct: navIcon_act_4
    },
    {
      id: 5,
      name: t('vide-xabar'),
      pathName: "/videomessag",
      icon: navIcon5,
      iconAct: navIcon_act_5
    },
    {
      id: 6,
      name: t('hududlar'),
      pathName: "/areas",
      icon: navIcon6,
      iconAct: navIcon_act_6
    },
  ]

  const fechData = async () => {
    try {
      const category = await GET.provence();
      setData(category.data)
    } catch (err) {
      return console.error(err);
    }
  }

  useEffect(() => {
    fechData()
    localStorage.getItem('language') != undefined ? setApiLang(localStorage.getItem('language')) : ""
  }, [localStorage.getItem('language')]);

  return (
    <>
      <section className='sidebar'>
        <div className="sidebar__inner">
          <div className="sidebar__logo-box">
            <Link to={'/'}>
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <nav className="sidebar__nav">
            <ul className="sidebar__list">
              {navItems.map((item, inx) => (
                <li
                  className="sidebar__item"
                  key={inx + 1}
                  onClick={() =>
                    inx + 1 === 3 ? setNavItemAcardionOne(!navItemAcardionOne)
                      : inx + 1 === 6 ? setNavItemAcardionTwo(!navItemAcardionTwo)
                        : (setNavItemAcardionOne(false), setNavItemAcardionTwo(false))
                  }>

                  <NavLink to={item.pathName}>
                    {({ isActive }) =>
                      <div className={`sidebar__item-box ${isActive ? "navItemAct" : ""}`}>
                        <span className={`sidebar__item-act-span ${isActive ? "navItemAct-span" : ""}`}></span>

                        <img
                          src={isActive ? item.iconAct : item.icon}
                          className='sidebar__item-icon'
                          alt="nav icons"
                        />

                        <p className={`sidebar__item-title ${isActive ? "navItemTitle" : ""}`}>
                          {item.name}
                        </p>

                        {/* <p className={`sidebar__item-title ${isActive ? "navItemTitle" : ""}`}>
                          {apiLang === 'uz' ? item.name_oz : apiLang === 'oz' ? item.name_uz : apiLang === 'ru' ? item.name_ru : ""}
                        </p> */}

                        {
                          inx + 1 === 3 ?
                            <span className='sidebar__item-span-icon'>
                              <img src={navItemAcardionOne ? iconBottom : iconRight} alt="right icon" />
                            </span>
                            : undefined
                        }

                        {
                          inx + 1 === 6 ?
                            <span className='sidebar__item-span-icon'>
                              <img src={navItemAcardionTwo ? iconBottom : iconRight} alt="bottom icon" />
                            </span>
                            : undefined
                        }
                      </div>}
                  </NavLink>

                  {
                    inx + 1 === 3 ?
                      <div className={`sidebar__item-acardion ${navItemAcardionOne ? "navItemAcardShow" : ""}`}>
                        <ul className="sidebar__item-acardion-list">
                          {data.map((itm, indx) => (
                            <li
                              className="sidebar__item_acardion-item"
                              key={indx + 1}
                            >
                              <p className="sidebar__item-acardion-tit">
                                <span
                                  className={`sidebar__item-acardion-span ${itm.active ? "navItemAcardActSpan" : ""}`}>
                                </span> {itm.name}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      : ""
                  }
                  {
                    inx + 1 === 6 ?
                      <div className={`sidebar__item-acardion ${navItemAcardionTwo ? "navItemAcardShow" : ""}`}>
                        <ul className="sidebar__item-acardion-list">
                          {data.map((itm, indx) => (
                            <li className="sidebar__item_acardion-item" key={indx + 1}>
                              <p className="sidebar__item-acardion-tit">
                                <span
                                  className={`sidebar__item-acardion-span ${itm.active ? "navItemAcardActSpan" : ""}`}>
                                </span> {itm.name}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      : ""
                  }
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Sidebar
