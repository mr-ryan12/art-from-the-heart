import React from 'react'
import UserChoices from '../UserChoices/UserChoices'
// import '../ArtView/ArtView.scss'
// import '../ArtDetails/ArtDetails.scss'
import { FeaturedArtProps } from '../interface'
import { motion } from "framer-motion"

const FeaturedArt: React.FC<FeaturedArtProps> = props => {
  const showLikeButtons = props.userLikesPhoto === undefined ? <UserChoices findPiece={props.findPiece} /> : null
  return (
    <>
      <motion.img 
        className="featured-art" src={`https://www.artic.edu/iiif/2/${props.randomImageId}/full/843,/0/default.jpg`} 
        alt="beautiful artwork"
        animate={{ opacity: [0 ,1] }}
        transition={{ duration: .4 }}
      />
      {showLikeButtons}
    </>
  )
}

export default FeaturedArt