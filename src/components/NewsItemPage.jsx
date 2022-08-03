import React from 'react'
import Right from './Right/Right'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import NewsItem from './NewsItem/NewsItem'
import NewsItemSlider from './NewsItem/NewsItemSlider/NewsItemSlider'

function PhonePage() {
  return (
    <>
      <section className='sidebar-main-right'>
        <Sidebar />
        <section className='main'>
          <NewsItem />
        </section>
        <Right />
      </section>
      <NewsItemSlider />
      <Footer />
    </>
  )
}

export default PhonePage
