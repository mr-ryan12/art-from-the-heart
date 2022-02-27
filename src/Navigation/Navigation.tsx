import React from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import heartIcon from '../logo-heart-icon.png'

interface NavProps {
  darkMode: string | null;
  toggleDarkMode: () => void;
}

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
    </nav>
    <button onClick={() => props.toggleDarkMode()} className="dark-mode-button">dark mode</button>
    </>
  )
}



export default Navigation