import React from 'react'
import thumbsUpIcon from '../thumbs-up.svg'
import thumbsDownIcon from '../thumbs-down.svg'
import { UserChoicesProps } from '../interface'


const UserChoices: React.FC<UserChoicesProps> = props => {
  return (
    <div className="user-choices">
      <button className="ratings-choice" onClick={() => props.findPiece(true)}>
        <img src={thumbsUpIcon} alt="I like this art" className="icon"/>
      </button>  
      <button className="ratings-choice" onClick={() => props.findPiece(false)}>
        <img src={thumbsDownIcon} alt="I don't like this art" className="icon"/>
      </button>  
    </div>
  )
}

export default UserChoices