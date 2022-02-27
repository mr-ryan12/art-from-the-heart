import React from 'react'
import UserChoices from '../UserChoices/UserChoices'
import { FeaturedArtProps } from '../interface'

const FeaturedArt: React.FC<FeaturedArtProps> = props => {
  const showLikeButtons = props.userLikesPhoto === undefined ? <UserChoices findPiece={props.findPiece} darkMode={props.darkMode}/> : null
  return (
    <>
      <img className="featured-art" src={`https://www.artic.edu/iiif/2/${props.randomImageId}/full/843,/0/default.jpg`} alt="beautiful artwork" />
      {showLikeButtons}
    </>
  )
}

export default FeaturedArt