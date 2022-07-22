import React from 'react'
import './Body.css'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Contents from '../Contents/Contents'
import Syllabus from '../Syllabus/Syllabus'
import Outcomes from '../Outcomes/Outcomes'
import Home from '../Home/Home'
import {Routes, Route} from 'react-router-dom'

export default function Body() {
  return (
    <div className='body'>
        <NavBar className='navbar'/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/outcomes' element={<Outcomes />} />
            <Route path='/syllabus' element={<Syllabus />} />
            <Route path='/contents' element={<Contents />} />
          </Routes>
        </div>
    </div>
  )
}
