import React from 'react'
import thumbsUpIcon from '../thumbs-up.svg'
import thumbsDownIcon from '../thumbs-down.svg'
import { UserChoicesProps } from '../interface'
import { motion } from "framer-motion"

const UserChoices: React.FC<UserChoicesProps> = props => {
  return (
    <motion.div 
      className="user-choices"
      animate={{ opacity: [0 ,1] }}
      transition={{ duration: .4 }}
    >
      <button className={"ratings-choice" + props.darkMode} onClick={() => props.findPiece(true)}>
        <img src={thumbsUpIcon} alt="I like this art" className={"icon" + props.darkMode}/>
      </button>  
      <button className={"ratings-choice" + props.darkMode} onClick={() => props.findPiece(false)}>
        <img src={thumbsDownIcon} alt="I don't like this art" className={"icon" + props.darkMode}/>
      </button>  
    </motion.div>
  )
}

export default UserChoices