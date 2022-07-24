import React from 'react'
// import terminal from './terminal_blank.jpg'
import './Home.css'

export default function Home() {
  return (
    <div>
        <div className="wrapper">
            <div className="typing-wrapper">
                <div className="typing">Hello World!</div>
                <div className="typing1">Welcome to WebDev101!</div>
            </div>
            <img className='terminal' src={require("./terminal_blank.jpg")} alt='terminal_blank' />
        </div>
    </div>
  )
}
