import React from 'react'
import './Body.css'
import NavBar from '../NavBar/NavBar'
import About from '../About/About'
import Contents from '../Contents/Contents'
import Outcomes from '../Outcomes/Outcomes'
import Home from '../Home/Home'
import {Routes, Route} from 'react-router-dom'

export default function Body() {
  return (
    <div className='body'>
        <NavBar className='navbar'/>
        <div className="container">
          <Routes>
            <Route path='/webDev101/' element={<Home />} />
            <Route path='/webDev101/about' element={<About />} />
            <Route path='/webDev101/outcomes' element={<Outcomes />} />
            <Route path='/webDev101/contents' element={<Contents />} />
          </Routes>
        </div>
    </div>
  )
}
