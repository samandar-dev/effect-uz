import { Link } from 'react-router-dom'
import GET from '../../../../../API/GET.JSX'
import React, { useEffect, useState } from 'react'
import dataIcon from '../../../../../assets/icons/dataIcon.svg'
import commentIcon from '../../../../../assets/icons/commentIcon.svg'

function TechCardItem({ techCardAct, setTechCardAct }) {
  const [data, setData] = useState([])
  const [apiLang, setApiLang] = useState('oz')
  const [loading, setLoading] = useState(false)
  const lodingList = [1, 2, 3, 4, 5, 6]

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
    return <div className='tech-card-loading-box'><ul>{lodingList.map((itm, inx) => <li key={inx + 1}></li>)}</ul></div>
  }
  return (
    <>
      {data.map((itm, inx) => (
        inx + 1 <= 6 ?
          <li className='main__technology-cards-item'
            onClick={() => setTechCardAct(itm.id)}
            key={itm.id}
          >
            <Link to={`/newsitems/${itm.id}`}>
              <div className={`main__technology-card-box 
                ${techCardAct === itm.id ? "techCards" : ""}`}
              >
                <div className="main__technology-card-categor-box">
                  <span className='main__technology-card-span'>{itm.category_id}</span>
                </div>

                <div className='main__technology-card-desc'>
                  <div className="main__technology-card-text-box">
                    <p className='main__technology-card-text'>
                      {apiLang === 'uz' ? itm.title_oz.substring(0, 55) :
                        apiLang === 'oz' ? itm.title_uz.substring(0, 55) :
                          apiLang === 'ru' ? itm.title_ru.substring(0, 55) :
                            ""}
                      {
                        apiLang === 'uz' && 55 <= itm.title_oz.substring().length ? "..." :
                          apiLang === 'oz' && 55 <= itm.title_uz.substring().length ? "..." :
                            apiLang === 'ru' && 55 <= itm.title_ru.substring().length ? "..." :
                              ""}
                    </p>
                  </div>

                  <div className='main__technology-card-data'>
                    <span><img src={dataIcon} alt="dataIcon" /> 11:45</span>
                    <span><img src={commentIcon} alt="dataIcon" /> {itm.comment_count} izoh</span>
                  </div>
                </div>

                <div className="main__technology-card-img-box">
                  <img src={itm.default_img} alt="TechImg_3" />
                </div>
              </div>
            </Link>
          </li> : ""
      ))}
    </>
  )
}

export default TechCardItem
