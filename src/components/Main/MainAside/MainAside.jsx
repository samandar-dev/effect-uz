import React from 'react'
import giftIcon from '../../../assets/icons/gift.svg'
import './MainAside.scss'

function MainAside() {
  return (
    <>
      <aside className='main__aside'>
        <div>
          <img src={giftIcon} alt="giftIcon" />
          <p className='main__aside-subscribe'>Subscribe to Premium</p>
        </div>

        <div>
          <p className='main__aside-price'>$8<span>/m</span></p>
          <button className='main__aside-btn'>Upgrade</button>
        </div>
      </aside>
    </>
  )
}

export default MainAside
