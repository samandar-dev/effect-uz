import Home from './components/Home'
import News from './components/News'
import Profil from './components/Profil'
import Politics from './components/Politics'
import { Route, Routes } from 'react-router-dom'
import AudioMessag from './components/AudioMessag'
import NewsItemPage from './components/NewsItemPage'
import NotFound from './components/NotFound/NotFound'
import ScrollTop from './components/ScrollTop/ScrollTop'
import ResponsiveHeader from './components/ResponsiveHeader/ResponsiveHeader'
import ResponsiveSidebar from './components/ResponsiveSidebar/ResponsiveSidebar'
import './App.scss'

function App() {
  return (
    <>
      <div className='container'>
        <section className="app">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route path='/politics' element={<Politics />} />
            <Route path='/profil/:id' element={<Profil />} />
            <Route path='/audiomessag' element={<AudioMessag />} />
            <Route path='/newsitems/:id' element={<NewsItemPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </section>
      </div>
      <div className="responsive-content">
        <ResponsiveHeader />
        <ResponsiveSidebar />
      </div>
      <ScrollTop />
    </>
  )
}

export default App
