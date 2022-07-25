import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  const [categorSlider, setCategorSlider] = useState(1)
  const [categorActive, setCategorActive] = useState(1)
  const categorItems = ['Barchasi', 'Siyosat', 'Jamiyat', 'Sport', 'Iqtisod', 'Texnologiya', 'Ilm_fan', 'Turizm', 'Siyosat']

  return (
    <>
      <div className="main__navbar">
        <h2 className="main__navbar-title">
          {categorItems.map((item, inx) => categorActive === inx + 1 ? item : "")}
        </h2>

        <div className="main__navbar-categor">
          <button
            className={`main__navbar-categor-left-btn ${categorSlider === 1 ? "d-none" : ""}`}
            onClick={() => setCategorSlider(categorSlider > 1 ? categorSlider - 1 : 1)}
          >
            <i className='bx bx-chevron-left' ></i>
          </button>

          <button
            className={`main__navbar-categor-right-btn ${categorSlider === 2 ? "d-none" : ""}`}
            onClick={() => setCategorSlider(categorSlider < 2 ? categorSlider + 1 : 2)}
          >
            <i className='bx bx-chevron-right' ></i>
          </button>

          <ul className="main__navbar-categor-list"
            style={{
              transform: `translateX(-${categorSlider * 11 - 11}%)`
            }}>
            {categorItems.map((item, inx) => (
              <li
                className={`main__navbar-categor-item 
              ${categorActive === inx + 1 ? "categorAct" : ""}
              `}
                key={inx + 1}
                onClick={() => setCategorActive(inx + 1)}
              >
                <Link to={`/${item === 'Siyosat' ? 'politics' : "notfound"}`}>
                  <p className="main__navbar-categor-title">{item}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
