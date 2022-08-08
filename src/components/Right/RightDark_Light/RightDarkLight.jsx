import React, { useState } from 'react'
import light from '../../../assets/icons/light.svg'
import dark from '../../../assets/icons/dark.svg'

function RightDarkLight() {
  const [darkLight, setDarkLight] = useState(true)

  return (
    <>
      {/* <style>{`.app, body ${!darkLight ? "{ background-color : #fff) }" : "{ background-color : #fff }"}`}</style> */}
      <div className="right__top-dark-light">
        <button className={`right__top-light ${darkLight ? "LightActBtn" : ""}`}
          onClick={() => setDarkLight(true)}>
          <img src={light} alt="" />
        </button>

        <button className={`right__top-dark ${!darkLight ? "DarkActBtn" : ""}`}
          onClick={() => setDarkLight(false)}>
          <img src={dark} alt="" />
        </button>
      </div>
    </>
  )
}

export default RightDarkLight
