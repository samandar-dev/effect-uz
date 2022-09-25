import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GET from '../../API/GET.JSX'
import './Navbar.scss'

function Navbar() {
  const [categorSlider, setCategorSlider] = useState(1)
  const [categorActive, setCategorActive] = useState(1)
  const [loading, setLoading] = useState(false)
  const [apiLang, setApiLang] = useState('oz')
  const lodingList = [1, 2, 3, 4, 5, 6, 7, 8]
  const [data, setData] = useState([])

  const fechData = async () => {
    try {
      setLoading(false)
      const category = await GET.category();
      setData(category.data)
      setLoading(true)
    } catch (err) {
      return console.error(err);
    }
  }

  useEffect(() => {
    fechData()
    localStorage.getItem('language') != undefined ? setApiLang(localStorage.getItem('language')) : ""
  }, [localStorage.getItem('language')]);

  if (!loading) {
    return <div className='navbar-loading-box'><ul>{lodingList.map((itm, inx) => <li key={inx + 1}></li>)}</ul></div>
  }
  return (
    <>
      <div className="main__navbar-categor">
        <button
          className={`main__navbar-categor-left-btn ${categorSlider === 1 ? "d-none" : ""}`}
          onClick={() => setCategorSlider(categorSlider > 1 ? categorSlider - 1 : 1)}
        >
          <i className='bx bx-chevron-left' ></i>
        </button>

        <button
          className={`main__navbar-categor-right-btn ${categorSlider === data.length - 6 ? "d-none" : ""}`}
          onClick={() => data.length >= 8 ? setCategorSlider(categorSlider < data.length - 6 ? categorSlider + 1 : data.length - 6) : undefined}
        >
          <i className='bx bx-chevron-right' ></i>
        </button>

        <ul className="main__navbar-categor-list"
          style={{
            transform: `translateX(-${categorSlider * 10 - 10}%)`
          }}>
          {data.map(item => (
            <li
              key={item.id}
              className={`main__navbar-categor-item 
              ${categorActive === item.id ? "categorAct" : ""}`}
              onClick={() => setCategorActive(item.id)}
            >
              <Link to={`/${item.name}`}>
                <p className="main__navbar-categor-title">
                  {apiLang === 'uz' ? item.name_oz : apiLang === 'oz' ? item.name_uz : apiLang === 'ru' ? item.name_ru : ""}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
