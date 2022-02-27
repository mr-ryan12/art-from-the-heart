import React from 'react'
import thumbsUpIcon from '../thumbs-up.svg'
import thumbsDownIcon from '../thumbs-down.svg'
import { UserChoicesProps } from '../interface'


const UserChoices: React.FC<UserChoicesProps> = props => {
  return (
    <div className="user-choices">
      <button className={"ratings-choice" + props.darkMode} onClick={() => props.findPiece(true)}>
        <img src={thumbsUpIcon} alt="I like this art" className={"icon" + props.darkMode}/>
      </button>  
      <button className={"ratings-choice" + props.darkMode} onClick={() => props.findPiece(false)}>
        <img src={thumbsDownIcon} alt="I don't like this art" className={"icon" + props.darkMode}/>
      </button>  
    </div>
  )
}

export default UserChoices