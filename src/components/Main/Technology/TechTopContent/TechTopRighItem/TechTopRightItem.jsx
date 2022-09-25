import React from 'react'
import { Link } from 'react-router-dom';
import dataIcon from '../../../../../assets/icons/dataIcon.svg'

function TechTopRightItem({ data, apiLang }) {
  return (
    <>
      {data.map((itm, inx) => (
        inx + 1 <= 4 ?
          <Link to={`/newsitems/${itm.id}`} key={itm.id}>
            <li
              className="main__technology-right-item"
              onClick={() => setTechItemsAct(itm.id)}
              key={itm.id}
            >
              <div className="main__technology-right-item-desc">
                <span className="main__technology-data-tit">
                  <img src={dataIcon} alt="dataIcon" /> 11:45  |  {itm.created_date}
                </span>
                <div className="main__technology-text-box">
                  <p className='main__technology-text'>
                    {apiLang === 'uz' ? itm.title_oz.substring(0, 40) :
                      apiLang === 'oz' ? itm.title_uz.substring(0, 40) :
                        apiLang === 'ru' ? itm.title_ru.substring(0, 40) :
                          ""}
                    {
                      apiLang === 'uz' && 40 <= itm.title_oz.substring().length ? "..." :
                        apiLang === 'oz' && 40 <= itm.title_uz.substring().length ? "..." :
                          apiLang === 'ru' && 40 <= itm.title_ru.substring().length ? "..." :
                            ""}
                  </p>
                </div>
              </div>

              <div className="main__technology-right-item-img-box">
                <img src={itm.default_img} alt="TechImg_2" />
              </div>
            </li>
          </Link> : ""
      ))}
    </>
  )
}

export default TechTopRightItem
