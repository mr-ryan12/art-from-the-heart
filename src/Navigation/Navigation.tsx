import React from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import heartIcon from '../logo-heart-icon.png'

const Navigation = () => {
  return (
    <nav className="navigation-bar">
      <Link className='title-link' to='/' >
        <h1 className="logo">
          <div className='art-from-the'>
            Art From The 
          </div>
          <div className="logo-accent">
            Heart
          </div>
        </h1>
        <img src={heartIcon} alt="Art From The Heart" className="logo-icon" />
      </Link>
    </nav>
  )
}



export default Navigation