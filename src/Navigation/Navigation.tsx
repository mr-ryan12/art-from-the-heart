import React from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import heartIcon from '../logo-heart-icon.png'
import moonIcon from '../moon.svg'
import sunIcon from '../sun.svg'
import { motion } from "framer-motion"
import { NavProps } from '../interface'

const Navigation: React.FC<NavProps> = props => {
  const changeIcon = props.darkMode === '-dark'? <img src={sunIcon} alt="Toggle Dark and Light Mode" className={"icon" + props.darkMode}/> : 
  <img src={moonIcon} alt="Toggle Dark and Light Mode" className={"icon" + props.darkMode}/>
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
          <motion.img 
          src={heartIcon} alt="Art From The Heart" 
          className="logo-icon" 
          animate={{ rotate: [-360, 20] }}
          />
        </Link>
      </div>
      <div className={"angled-end" + props.darkMode}>
      </div>
      <button onClick={() => props.toggleDarkMode()} className="dark-mode-button">
        {changeIcon}
      </button>
    </nav>
    </>
  )
}



export default Navigation