import React from 'react'
import AudioMessages from './AudioMessages/AudioMessages'
import Footer from './Footer/Footer'
import Right from './Right/Right'
import Sidebar from './Sidebar/Sidebar'

function AudioMessag() {
  return (
    <>
      <section className='sidebar-main-right'>
        <Sidebar />
        <section className='main'>
          <AudioMessages />
        </section>
        <Right />
      </section>
      <Footer />
    </>
  )
}

export default AudioMessag
