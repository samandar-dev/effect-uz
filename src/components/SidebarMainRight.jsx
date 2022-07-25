import React from 'react'
import Main from './Main/Main'
import Right from './Right/Right'
import Sidebar from './Sidebar/Sidebar'
import './SidebarMainRight.scss'

function SidebarMainRight() {
  return (
    <>
      <section className='sidebar-main-right'>
        <Sidebar />
        <Main />
        <Right />
      </section>
    </>
  )
}

export default SidebarMainRight
