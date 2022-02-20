import React from 'react'
import './Navigation.scss'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navigation-bar">
      <h1 className="logo">
        <Link className='title-link' to='/' >
          <div className='art-from-the'>
            Art From The 
          </div>
          <div className="logo-accent">
            Heart
          </div>
        </Link>
      </h1>
    </nav>
  )
}



export default Navigation