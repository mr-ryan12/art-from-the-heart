import React from 'react'
import './ArtDetails.scss'
import '../ArtView/ArtView.scss'
import { Link } from 'react-router-dom'
import { ArtDetailsProps } from '../interface';
import { motion } from "framer-motion"
import { ArtDetailsProps } from '../interface'

const ArtDetails: React.FC<ArtDetailsProps> = props => {
  const likedMessage = props.isLiked ? <p className="percent-message">You have great taste!</p>
                                     : <p className="percent-message">You have amazing taste!</p>
  return (
    <motion.section 
      {"art-details-container" + props.darkMode}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: .4 }}
    >
      <div className={"main-details" + props.darkMode}>
        <h2 className='title-details'>TITLE:</h2><p className="art-details-title">{props.artDetails.title}</p>
        <h2 className='date-details'>STARTING DATE:</h2><p className="art-details-start">{props.artDetails.date_start}</p>
        <h2 className='ending-date-details'>ENDING DATE:</h2><p className="art-details-date">{props.artDetails.date_end}</p>
        <h2 className='artists-details'>ARTIST:</h2><p className="art-details-title">{props.artDetails.artist_title}</p>
        <h2 className='description-details'>DESCRIPTION:</h2><p className="art-details-text">{props.artDetails.thumbnail.alt_text}</p>
        {likedMessage}
      </div>
      <div className="button-container">
        <Link className={"go-back-button" + props.darkMode} to={`/`}>Back To Main Page</Link>
        <button onClick={() => window.location.reload()} className={"generate-new-button" + props.darkMode}>Show New Art Piece</button>
      </div>
    </motion.section>
  )
}

export default ArtDetails;