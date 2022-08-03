import React from 'react'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import UzerPage from './UzerPage/UzerPage'

function Profil() {
  return (
    <>
      <section className='sidebar-main-right'>
        <Sidebar />
        <section className='profil'>
          <UzerPage />
        </section>
      </section>
      <Footer />
    </>
  )
}

export default Profil
