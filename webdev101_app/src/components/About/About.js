import React from 'react'
import jkc_logo from './jkc_logo.png'
import jkc_picture from './jkc_picture.jpg'
import Line from '../Line/Line'
import './About.css'
import '../Footer/Footer'
import Footer from '../Footer/Footer'

export default function About() {
  return (
    <div>
      <h1>
        About the Author
      </h1>
      <Line />
      <div className="about-images">
        <img src={jkc_logo} alt='jkc_logo' />
        <img src={jkc_picture} alt='jkc_picture' />
      </div>
      <h2 className='intro-text1'>I am a Junior year student majoring in Computer Science at Purdue University.</h2>
      <h2 className='intro-text2'>I am very eager to learn new things. Feel free to reach out via those contacts on my GitHub profile!</h2>
      <Footer />
      <Line />
    </div>
  )
}


