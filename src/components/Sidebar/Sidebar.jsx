import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'

import Logo from '../../assets/images/logo.svg'
import navIcon1 from '../../assets/icons/navIcon-1.svg';
import navIcon2 from '../../assets/icons/navIcon-2.svg';
import navIcon3 from '../../assets/icons/navIcon-3.svg';
import navIcon4 from '../../assets/icons/navIcon-4.svg';
import navIcon5 from '../../assets/icons/navIcon-5.svg';
import navIcon6 from '../../assets/icons/navIcon-6.svg';
import navIcon_act_1 from '../../assets/icons/navIcon-act-1.svg';
import navIcon_act_2 from '../../assets/icons/navIcon-act-2.svg';
import navIcon_act_3 from '../../assets/icons/navIcon-act-3.svg';
import navIcon_act_4 from '../../assets/icons/navIcon-act-4.svg';
import navIcon_act_5 from '../../assets/icons/navIcon-act-5.svg';
import navIcon_act_6 from '../../assets/icons/navIcon-act-6.svg';
import iconRight from '../../assets/icons/right-icon.svg';
import iconBottom from '../../assets/icons/bottom-icon.svg';

function Sidebar() {
  const [navItemAcardionOne, setNavItemAcardionOne] = useState(false)
  const [navItemAcardionTwo, setNavItemAcardionTwo] = useState(false)

  const navItems = [
    {
      id: 1,
      name: 'Bosh sahifa',
      pathName: "/home",
      icon: navIcon1,
      iconAct: navIcon_act_1
    },
    {
      id: 2,
      name: 'Yangiliklar lentasi',
      pathName: "/news",
      icon: navIcon2,
      iconAct: navIcon_act_2
    },
    {
      id: 3,
      name: 'Ruknlar',
      pathName: "/politics",
      icon: navIcon3,
      iconAct: navIcon_act_3
    },
    {
      id: 4,
      name: 'Audio xabarlar',
      pathName: "/notfound",
      icon: navIcon4,
      iconAct: navIcon_act_4
    },
    {
      id: 5,
      name: 'Video xabarlar',
      pathName: "/notfound",
      icon: navIcon5,
      iconAct: navIcon_act_5
    },
    {
      id: 6,
      name: 'Hududlar',
      pathName: "/notfound",
      icon: navIcon6,
      iconAct: navIcon_act_6
    },
  ]

  const navItemAcardionItem = [
    {
      id: 1,
      name: 'Toshkent (with hover)',
      active: true,
    },
    {
      id: 1,
      name: 'Samarqand',
      active: false,
    },
    {
      id: 1,
      name: 'Buxoro',
      active: false,
    },
    {
      id: 1,
      name: 'Samarqand',
      active: false,
    },
    {
      id: 1,
      name: 'Buxoro',
      active: false,
    },
    {
      id: 1,
      name: 'Samarqand',
      active: false,
    },
    {
      id: 1,
      name: 'Buxoro',
      active: false,
    },
    {
      id: 1,
      name: 'Buxoro',
      active: false,
    },
  ]

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
                    inx + 1 === 3 ?
                      setNavItemAcardionOne(!navItemAcardionOne)
                      :
                      inx + 1 === 6 ?
                        setNavItemAcardionTwo(!navItemAcardionTwo)
                        : (setNavItemAcardionOne(false), setNavItemAcardionTwo(false))
                  }
                >
                  <NavLink to={item.pathName}>
                    {({ isActive }) =>
                      <div className={`sidebar__item-box ${isActive ? "navItemAct" : ""}`}>
                        <span
                          className={`sidebar__item-act-span ${isActive ? "navItemAct-span" : ""}`}>
                        </span>

                        <img
                          className='sidebar__item-icon'
                          src={isActive ? item.iconAct : item.icon}
                          alt="nav icons"
                        />

                        <p className={`sidebar__item-title ${isActive ? "navItemTitle" : ""}`}>{item.name}</p>

                        {inx + 1 === 3 ?
                          <span className='sidebar__item-span-icon'>
                            <img src={navItemAcardionOne ? iconBottom : iconRight} alt="right icon" />
                          </span>
                          : undefined
                        }

                        {inx + 1 === 6 ?
                          <span className='sidebar__item-span-icon'>
                            <img src={navItemAcardionTwo ? iconBottom : iconRight} alt="bottom icon" />
                          </span>
                          : undefined
                        }
                      </div>}
                  </NavLink>

                  {inx + 1 === 3 ?
                    <div
                      className={`sidebar__item-acardion 
                    ${navItemAcardionOne ? "navItemAcardShow" : ""}`}>
                      <ul className="sidebar__item-acardion-list">
                        {navItemAcardionItem.map((itm, indx) => (
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
                    : ""}

                  {inx + 1 === 6 ?
                    <div className={`sidebar__item-acardion ${navItemAcardionTwo ? "navItemAcardShow" : ""}`}>
                      <ul className="sidebar__item-acardion-list">
                        {navItemAcardionItem.map((itm, indx) => (
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
                    : ""}
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
