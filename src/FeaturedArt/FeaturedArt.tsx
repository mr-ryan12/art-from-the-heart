import React from 'react'
import UserChoices from '../UserChoices/UserChoices'
import { FeaturedArtProps } from '../interface'

const FeaturedArt: React.FC<FeaturedArtProps> = props => {
  const showLikeButtons = props.userLikesPhoto === undefined ? <UserChoices findPiece={props.findPiece} /> : null
// import thumbsUpIcon from '../thumbs-up.svg'
// import thumbsDownIcon from '../thumbs-down.svg'

// interface Props {
//   randomImageId: string;
//   findPiece: (value: boolean) => void;
//   userLikesPhoto: boolean | undefined;
// }

// const FeaturedArt: React.FC<Props> = props => {
//   const showLikeButtons = props.userLikesPhoto === undefined ? <div className="user-choices">
//   <button className="ratings-choice" onClick={() => props.findPiece(true)}>
//     <img src={thumbsUpIcon} alt="I like this art" className="icon" />
//   </button>  
//   <button className="ratings-choice" onClick={() => props.findPiece(false)}>
//     <img src={thumbsDownIcon} alt="I don't like this art" className="icon" />
//   </button>  
// </div> : null;
  return (
    <>
      <img className="featured-art" src={`https://www.artic.edu/iiif/2/${props.randomImageId}/full/843,/0/default.jpg`} alt="beautiful artwork" />
      {showLikeButtons}
    </>
  )
}

export default FeaturedArt