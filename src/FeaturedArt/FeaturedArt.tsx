import React from 'react'
import thumbsUpIcon from '../thumbs-up.svg'
import thumbsDownIcon from '../thumbs-down.svg'
import './FeaturedArt.scss'
import { FeaturedArtProps } from '../interface'

const FeaturedArt: React.FC<FeaturedArtProps> = props => {
  const showLikeButtons = props.userLikesPhoto === undefined ? <div className="user-choices">
    <button className="ratings-choice" onClick={() => props.findPiece(true)}>
      <img src={thumbsUpIcon} alt="I like this art" />
    </button>  
    <button className="ratings-choice" onClick={() => props.findPiece(false)}>
      <img src={thumbsDownIcon} alt="I don't like this art" />
    </button>  
  </div> : null;
  return (
    <>
      <img className="featured-art" src={`https://www.artic.edu/iiif/2/${props.randomImageId}/full/843,/0/default.jpg`} alt="beautiful artwork" />
      {showLikeButtons}
    </>
  )
}

export default FeaturedArt