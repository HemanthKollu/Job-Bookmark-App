import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Jobs from './Components/Jobs'
import Bookmarks from './Components/Bookmarks'
import JobDetails from './Components/JobDetails'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
        </div>
    </Router>
  )
}

export default App