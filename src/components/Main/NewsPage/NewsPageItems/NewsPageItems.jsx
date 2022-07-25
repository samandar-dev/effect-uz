import React from 'react'

import itemDataIcon from '../../../../assets/icons/item-data-icon2.svg'
import itemComment from '../../../../assets/icons/comments.svg'

function NewsPageItems({ newsObj }) {

  return (
    <>
      {newsObj.map((item, inx) => (
        <li className="news-page__item">
          <span className='news-page__item-data'>
            {item.time} <img src={itemDataIcon} alt="data icon" />
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
      ))}
    </>
  )
}

export default NewsPageItems
