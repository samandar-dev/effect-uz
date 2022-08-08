import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import itemDataIcon2 from '../../../../assets/icons/item-data-icon2.svg'
import itemDataIcon1 from '../../../../assets/icons/item-data-icon.svg'
import itemComment from '../../../../assets/icons/comments.svg'
import GET from '../../../../API/GET'

function NewsPageItems() {
  const [data, setData] = useState([])
  const [apiLang, setApiLang] = useState('oz')

  const fechData = async () => {
    try {
      const category = await GET.newsAll();
      setData(category.data.items)
    } catch (err) {
      console.error(err)
      return;
    }
  }

  useEffect(() => {
    fechData()
    localStorage.getItem('language') != undefined ? setApiLang(localStorage.getItem('language')) : ""
  }, [localStorage.getItem('language')]);

  return (
    <>
      {data.map((item, inx) => (
        <Link to={`/newsitems/${item.id}`}>
          <li className="news-page__item">
            <span className='news-page__item-data1'>
              22:30 <img src={itemDataIcon2} alt="data icon" />
            </span>
            <span className='news-page__item-data2'>
              22:30 <img src={itemDataIcon1} alt="data icon" />
            </span>

            <div className="news-page__item-box">
              <div className="news-page__item-img-box">
                <img src={item.default_img} alt="item name" />
              </div>

              <div className='news-page__item-box-desc'>
                <div className="news-page__item-desc">
                  <p className='news-page__item-text'>
                    {apiLang === 'uz' ? item.title_oz.substring(0, 150) :
                      apiLang === 'oz' ? item.title_uz.substring(0, 150) :
                        apiLang === 'ru' ? item.title_ru.substring(0, 150) :
                          ""}
                    {
                      apiLang === 'uz' && 150 <= item.title_oz.substring().length ? "..." :
                        apiLang === 'oz' && 150 <= item.title_uz.substring().length ? "..." :
                          apiLang === 'ru' && 150 <= item.title_ru.substring().length ? "..." :
                            ""}
                  </p>
                </div>

                <div className="news-page__item-categor-news-box">
                  <p className='news-page__item-categor-news'>{item.category_id}</p>
                  <p className='news-page__item-comments-news'>
                    <img src={itemComment} alt="comments icon" /> {item.comment_count > 0 ? item.comment_count : 0} izoh
                  </p>
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
