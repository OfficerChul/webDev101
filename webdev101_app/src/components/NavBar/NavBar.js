import React from 'react'
import Line from '../Line/Line'

export default function NavBar() {
  return (
    <nav className='nav'>

        <ul>
            <Line />
            <li>About the Author</li>
            <Line />
            <li>Course Learning Outcomes</li>
            <Line />
            <li>Syllabus</li>
            <Line />
        </ul>

      </nav>
  )
}
