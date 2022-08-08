import React, { useEffect, useState } from 'react'
import GET from '../../../../API/GET'
import parse from 'html-react-parser';
import './TechTopContent.scss';

import timeIcon from '../../../../assets/icons/time-icon.svg'
import TechTopRightItem from './TechTopRighItem/TechTopRightItem'
import techIcon from '../../../../assets/icons/technology-icon.svg'
import AsideNews from '../../MainNews/AsideNews/AsideNews';
import MainAside from '../../MainAside/MainAside';
import giftIcon from '../../../../assets/icons/gift.svg'

function TechTopContent() {
  const [loading, setLoading] = useState(false)
  const [apiLang, setApiLang] = useState('oz')
  const [data, setData] = useState([])

  const fechData = async () => {
    try {
      setLoading(false)
      const category = await GET.newsAll();
      setData(category.data.items)
      setLoading(true)
    } catch (err) {
      console.error(err)
      return;
    }
  }

  useEffect(() => {
    fechData()
    localStorage.getItem('language') != undefined ? setApiLang(localStorage.getItem('language')) : ""
  }, [localStorage.getItem('language')]);

  if (!loading) {
    return <div className='tech-loading-box'></div>
  }
  return (
    <>
      <div className="main__technology-inner">
        {data.map((item, inx) => (
          inx + 1 <= 1 ?
            <div className="main__technology-left" key={item.id}>
              <div className="main__technology-img-box">
                <img src={item.default_img} alt="TechImg_1" />
              </div>

              <div className="main__technology-left-desc">
                <div className="main__technology-left-tit">
                  <span><img src={techIcon} alt="techIcon" /> {item.category_id}</span>
                  <span><img src={timeIcon} alt="timeIcon" /> Bugun • 15:45</span>
                </div>

                <h4 className='main__technology-lfet-title'>
                  {apiLang === 'uz' ? item.title_oz.substring(0, 80) :
                    apiLang === 'oz' ? item.title_uz.substring(0, 80) :
                      apiLang === 'ru' ? item.title_ru.substring(0, 80) :
                        ""}...
                </h4>

                <p className='main__technology-lfet-text'>
                  {apiLang === 'uz' ? parse(item.description_oz.substring(0, 95)) :
                    apiLang === 'oz' ? parse(item.description_uz.substring(0, 95)) :
                      apiLang === 'ru' ? parse(item.description_ru.substring(0, 95)) :
                        ""}...
                </p>
              </div>
            </div> : ""
        ))}

        <div className="main__technology-aside">
          <aside className='main__aside'>
            <div className='main__aside-technoly'>
              <img src={giftIcon} alt="giftIcon" />
              <p className='main__aside-subscribe'>Subscribe to Premium</p>
            </div>
          </aside>
        </div>

        <div className="main__technology-right">
          <ul className="main__technology-right-list">
            <TechTopRightItem data={data} apiLang={apiLang} />
          </ul>
        </div>
      </div>
    </>
  )
}

export default TechTopContent
