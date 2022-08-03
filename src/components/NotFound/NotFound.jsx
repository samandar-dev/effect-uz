import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.scss'

function NoodFound() {
  const backBtn = useNavigate();

  return (
    <>
      <div className="error-box">
        <h1 className='error'>Page not Found</h1>
        <button className='back' onClick={() => backBtn(-1)}>back</button>
      </div>
    </>
  )
}

export default NoodFound
