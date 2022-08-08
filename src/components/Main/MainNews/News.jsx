import React from 'react'
import VideoNews from './VideoNews/VideoNews'
import AsideNews from './AsideNews/AsideNews'
import './News'

function News() {
  return (
    <>
      <section className='news'>
        <VideoNews />
        <AsideNews />
      </section>
    </>
  )
}

export default News
