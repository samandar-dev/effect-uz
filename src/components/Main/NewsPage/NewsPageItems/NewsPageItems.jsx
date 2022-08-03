import React from 'react'
import { Link } from 'react-router-dom'

import itemDataIcon2 from '../../../../assets/icons/item-data-icon2.svg'
import itemDataIcon1 from '../../../../assets/icons/item-data-icon.svg'
import itemComment from '../../../../assets/icons/comments.svg'

function NewsPageItems({ newsObj }) {
  return (
    <>
      {newsObj.map((item, inx) => (
        <Link to={`/newsitems/${item.id}`}>
          <li className="news-page__item">
            <span className='news-page__item-data1'>
              {item.time} <img src={itemDataIcon2} alt="data icon" />
            </span>
            <span className='news-page__item-data2'>
              {item.time} <img src={itemDataIcon1} alt="data icon" />
            </span>

            <div className="news-page__item-box">
              <div className="news-page__item-img-box">
                <img src={item.img} alt="item name" />
              </div>

              <div className='news-page__item-box-desc'>
                <div className="news-page__item-desc">
                  <p className='news-page__item-text'>{item.desc}</p>
                </div>

                <div className="news-page__item-categor-news-box">
                  <p className='news-page__item-categor-news'>{item.categor}</p>
                  {item.comments > 0 ?
                    <p className='news-page__item-comments-news'>
                      <img src={itemComment} alt="comments icon" /> {item.comments} izoh
                    </p>
                    : ""}
                </div>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </>
  )
}

export default NewsPageItems
