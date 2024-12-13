import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Introduce from './pages/Introduce/Introduce'
import Contact from './pages/Contact/Contact'
import Profile from './pages/MyProfile/profile'
import Products from './pages/Products/Products'
import ProductsAttributes from './pages/ProductAttributes/ProductAttributes'
function App() {
  return (
    <>
    <div className='container'>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:productId" element={<ProductsAttributes />} />
          <Route path="/about" element={<Introduce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
        </div>
      </div>
    </>
  )
}

export default App
