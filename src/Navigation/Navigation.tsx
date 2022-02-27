import React from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import heartIcon from '../logo-heart-icon.png'
import sunIcon from '../sun.svg'
import { NavProps } from '../interface'

const Navigation: React.FC<NavProps> = props => {
  return (
    <>
    <nav className={"navigation-bar" + props.darkMode}>
      <div className={"behind-logo" + props.darkMode}>
        <Link className='title-link' to='/' >
          <h1 className="logo">
            <div className={"art-from-the" + props.darkMode}>
              Art From The 
            </div>
            <div className="logo-accent">
              Heart
            </div>
          </h1>
          <img src={heartIcon} alt="Art From The Heart" className="logo-icon" />
        </Link>
      </div>
      <div className={"angled-end" + props.darkMode}>
      </div>
      <button onClick={() => props.toggleDarkMode()} className="dark-mode-button">
        <img src={sunIcon} alt="Toggle Dark and Light Mode" className={"icon" + props.darkMode}/>
      </button>
    </nav>
    </>
  )
}



export default Navigation