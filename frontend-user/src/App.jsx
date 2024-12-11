import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Introduce from './pages/Introduce/introduce'
import Contact from './pages/Contact/Contact'
import Profile from './pages/MyProfile/profile'
import Cart from './pages/Cart/Cart'
function App() {
  return (
    <>
    <div className='container'>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Introduce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
        </div>
      </div>
    </>
  )
}

export default App
