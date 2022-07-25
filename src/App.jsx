import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import Politics from './components/Politics'
import NotFound from './components/NotFound/NotFound'
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
            <Route path='/notfound' element={<NotFound />} />
          </Routes>
        </section>
      </div>
    </>
  )
}

export default App
