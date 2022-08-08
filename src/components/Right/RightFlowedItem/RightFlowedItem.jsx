import GET from '../../../API/GET.JSX'
import React, { useEffect, useState } from 'react'
import dataIcon from '../../../assets/icons/dataIcon.svg'
import './RightFlowedItem.scss'

function RightFlowedItem() {
  const [apiLang, setApiLang] = useState('oz')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fechData = async () => {
    try {
      setLoading(false)
      const category = await GET.more();
      setData(category.data)
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
    return <div className='right-items-box'></div>
  }
  return (
    <>
      {data.map((item, inx) => (
        inx + 1 <= 10 ?
          <li className="right__flowed-item" key={item.id}>
            <span className="main__technology-data-tit">
              <img src={dataIcon} alt="dataIcon" /> 11:45  |  {item.created_date}
            </span>
            <p>
              {apiLang === 'uz' ? item.title_oz.substring(0, 65) :
                apiLang === 'oz' ? item.title_uz.substring(0, 65) :
                  apiLang === 'ru' ? item.title_ru.substring(0, 65) :
                    ""}
              {
                apiLang === 'uz' && 65 <= item.title_oz.substring().length ? "..." :
                  apiLang === 'oz' && 65 <= item.title_uz.substring().length ? "..." :
                    apiLang === 'ru' && 65 <= item.title_ru.substring().length ? "..." :
                      ""}
            </p>
          </li> : ""
      ))}
    </>
  )
}

export default RightFlowedItem
