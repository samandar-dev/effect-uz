import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import GET from '../../API/GET';
import './ResponsiveSidebar.scss'

// ICONS ---------------------------------------

import lenta from '../../assets/icons/lenta.svg'
import media from '../../assets/icons/media.svg'
import lenta2 from '../../assets/icons/lenta-2.svg'
import media2 from '../../assets/icons/media-2.svg'
import navIcon1 from '../../assets/icons/navIcon-1.svg';
import navIcon3 from '../../assets/icons/navIcon-3.svg';
import navIcon6 from '../../assets/icons/navIcon-6.svg';
import navIcon_act_1 from '../../assets/icons/navIcon-act-1.svg';
import navIcon_act_3 from '../../assets/icons/navIcon-act-3.svg';
import navIcon_act_6 from '../../assets/icons/navIcon-act-6.svg';

function ResponsiveSidebar() {
  const { t } = useTranslation()
  const [data, setData] = useState([])
  const [apiLang, setApiLang] = useState('oz')
  const [activeItem, setActiveItem] = useState(1)
  const [itemAccard1, setItemAccard1] = useState(false)
  const [itemAccard2, setItemAccard2] = useState(false)

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
      <section className='respon-sidebar'>
        <div className="respon-sidebar__inner">
          <ul>
            <Link to={'/home'} onClick={() => (setActiveItem(1), setItemAccard1(false), setItemAccard2(false))}>
              <li>
                <img src={activeItem == 1 ? navIcon_act_1 : navIcon1} alt="home" />
                <p className={` ${activeItem == 1 ? "actItem" : ""}`}>{t('asosiy')}</p>
              </li>
            </Link>
            <Link to={'/news'} onClick={() => (setActiveItem(2), setItemAccard1(false), setItemAccard2(false))}>
              <li>
                <img src={activeItem == 2 ? lenta2 : lenta} alt="lenta" />
                <p className={` ${activeItem == 2 ? "actItem" : ""}`}>{t('lenta')}</p>
              </li>
            </Link>
            <li onClick={() => (setItemAccard1(!itemAccard1), setItemAccard2(false), setActiveItem(3))}>
              <img src={activeItem == 3 ? navIcon_act_3 : navIcon3} alt="rukn" />
              <p className={` ${activeItem == 3 ? "actItem" : ""}`}>{t('rukn')}</p>
            </li>
            <li onClick={() => (setItemAccard2(!itemAccard2), setItemAccard1(false), setActiveItem(4))}>
              <img src={activeItem == 4 ? navIcon_act_6 : navIcon6} alt="hudud" />
              <p className={` ${activeItem == 4 ? "actItem" : ""}`}>{t('hudud')}</p>
            </li>
            <Link to={'/audiomessag'} onClick={() => (setActiveItem(5), setItemAccard1(false), setItemAccard2(false))}>
              <li>
                <img src={activeItem == 5 ? media2 : media} alt="media" />
                <p className={` ${activeItem == 5 ? "actItem" : ""}`}>{t('media')}</p>
              </li>
            </Link>
          </ul>
        </div>

        <div
          className={`respon-sidebar__accardion 
            ${itemAccard1 ? "showSidebarBtn" : itemAccard2 ? "showSidebarBtn" : ""}`
          }>
          <h2>Rukunlar</h2>
          <ul>
            {data.map(item => (
              <Link to={`/newsitems/23`} key={item.id}>
                <li>
                  <p>{item.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>

      </section>
    </>
  )
}

export default ResponsiveSidebar
