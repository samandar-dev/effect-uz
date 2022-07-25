import React from 'react'
import Navbar from '../Navbar/Navbar'
import MainTop from './MainTop/MainTop'
import Technology from './Technology/Technology'
import './Main.scss'

function Main() {
  return (
    <>
      <section className='main'>
        <MainTop />
        <Navbar />
        <Technology />
      </section>
    </>
  )
}

export default Main
