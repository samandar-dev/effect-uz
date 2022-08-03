import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GET from '../../API/GET.JSX'
import './Navbar.scss'

function Navbar() {
  const [categorSlider, setCategorSlider] = useState(1)
  const [categorActive, setCategorActive] = useState(1)
  const [data, setData] = useState([])

  const fechData = async () => {
    try {
      const category = await GET.category();
      setData((category.data).reverse())
    } catch (err) {
      console.error(err)
      return;
    }
  }

  useEffect(() => {
    fechData()
  }, []);

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
          className={`main__navbar-categor-right-btn ${categorSlider === data.length - data.length + 2 ? "d-none" : ""}`}
          onClick={() => data.length >= 8 ? setCategorSlider(categorSlider < data.length - data.length + 2 ? categorSlider + 1 : data.length - data.length + 2) : undefined}
        >
          <i className='bx bx-chevron-right' ></i>
        </button>

        <ul className="main__navbar-categor-list"
          style={{
            transform: `translateX(-${categorSlider * 14 - 14}%)`
          }}>
          {data.map((item, inx) => (
            <li
              className={`main__navbar-categor-item 
              ${categorActive === item.id ? "categorAct" : ""}
              `}
              key={item.id}
              onClick={() => setCategorActive(item.id)}
            >
              <Link to={`/${item.name === 'Siyosat' ? 'politics' : "notfound"}`}>
                <p className="main__navbar-categor-title">{item.name_uz}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
