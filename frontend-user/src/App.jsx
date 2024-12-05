import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Introduce from './pages/Introduce/introduce'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Introduce />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
