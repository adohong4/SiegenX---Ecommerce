import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Introduce from './pages/Introduce/introduce'
import Contact from './pages/Contact/Contact'
import Solution from './pages/Solution/Solution'
import MeetingRoomSolution from './pages/Solution/Solution.MeetingRoomSolution'
import ClassroomSolution from './pages/Solution/Solution.ClassroomSolution'
import BoothSolution from './pages/Solution/Solution.BoothSolution'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Introduce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/solution/meetingRoomSolution" element={<MeetingRoomSolution/>} />
          <Route path="/solution/classroomSolution" element={<ClassroomSolution/>} />
          <Route path="/solution/boothSolution" element={<BoothSolution/>} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
