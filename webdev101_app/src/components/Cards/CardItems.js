import React from 'react'
import github_logo from './card_github_grey_border.png'

export default function CardItems(props) {
    return (
        <div className='card'>
            
            <a href={props.url} target='_blank' rel="noreferrer">
                <img className='card-image' src={github_logo} alt='github-logo' />
                
                <div className="card-title">{props.title}</div>
            </a>
            
        
        </div>
    )
}
