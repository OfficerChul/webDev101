import React from 'react'
import Line from '../Line/Line'
import './NavBar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className='nav'>
        <ul>
            <Line />
            
            <li><CustomLink to='about' className='tab'>About the Author</CustomLink></li>
            <Line />
            
            <li><CustomLink to='outcomes' className='tab'>Coruse Learning Outcomes</CustomLink></li>
            <Line />
            
            <li><CustomLink to='syllabus' className='tab'>Syllabus</CustomLink></li>
            <Line />
            
            <li><CustomLink to='contents' className='tab'>Contents</CustomLink></li>
            <Line />
        </ul>

      </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}