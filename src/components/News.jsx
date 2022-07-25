import React from 'react'
import Right from './Right/Right'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import MainTop from './Main/MainTop/MainTop'
import NewsPage from './Main/NewsPage/NewsPage'

function News() {
  return (
    <>
      <section className='sidebar-main-right'>
        <Sidebar />
        <section className='main'>
          <MainTop />
          <Navbar />
          <NewsPage />
        </section>
        <Right />
      </section>
      <Footer />
    </>
  )
}

export default News
