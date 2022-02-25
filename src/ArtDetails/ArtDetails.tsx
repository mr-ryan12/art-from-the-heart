import React from 'react';
import './ArtDetails.scss';
import '../ArtView/ArtView.scss';
import { Link } from 'react-router-dom'

interface Props {
  artDetails: Details;
  isLiked: boolean | undefined;
}

interface Details {
  id: number;
  _score: number;
  thumbnail: {
    alt_text: string;
    width: number;
    lqip: string;
    height: number;
  };
  date_start: number;
  date_end: number;
  title: string;
  image_id: string;
  artist_title: string;
}

const ArtDetails: React.FC<Props> = props => {
  const likedMessage = props.isLiked ? <p className="percent-message">You and {Math.floor(Math.random() * 100) + 1 + '%'} of other voters liked this art! You have great taste!</p>
                                    : <p className="percent-message">You and {Math.floor(Math.random() * 100) + 1 + '%'} of other people agree! Congratulations!</p>
  return (
    <section className="art-details-container">
      <div className='main-details'>
        <h2 className='title-details'>TITLE:</h2><p className="art-details-title">{props.artDetails.title}</p>
        <h2 className='date-details'>STARTING DATE:</h2><p className="art-details-start">{props.artDetails.date_start}</p>
        <h2 className='ending-date-details'>ENDING DATE:</h2><p className="art-details-date">{props.artDetails.date_end}</p>
        <h2 className='artists-details'>ARTIST:</h2><p className="art-details-title">{props.artDetails.artist_title}</p>
        <h2 className='description-details'>DESCRIPTION:</h2><p className="art-details-text">{props.artDetails.thumbnail.alt_text}</p>
        {likedMessage}
      </div>
      <div className='button-container'>
        <Link className='go-back-button' to={`/`} >Back To Main Page</Link>
        <button onClick={() => window.location.reload()} className='generate-new-button'>Show New Art Piece</button>
      </div>
    </section>
  )
}

export default ArtDetails;