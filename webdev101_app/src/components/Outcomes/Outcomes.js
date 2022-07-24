import React from 'react'
import './Outcomes.css'
import Line from '../Line/Line'

export default function Outcomes() {
  return (
    <div cla>
      <h1>
        Course Learning Outcomes
      </h1>
      <Line />
      <ul className='outcomes'>
        <li>You will learn how to acquire knowledge and solve problems without getting help from the instructor.</li>
        <li>You will learn basic HTML, CSS, javascript for web development, and React.js.</li>
        <li>You will learn how to deploy your website and let others see it.</li>  
      </ul>
      <Line />
    </div>
  )
}
