import React from 'react'
import FotoNews from './FotoNews/FotoNews'
import VideoNews from './VideoNews/VideoNews'
import AsideNews from './AsideNews/AsideNews'
import './News'

function News() {
  return (
    <>
      <section className='news'>
        <FotoNews />
        <VideoNews />
        <AsideNews />
      </section>
    </>
  )
}

export default News
