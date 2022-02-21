import React from 'react';
import './ArtDetails.scss';
import '../ArtView/ArtView.scss';

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
      <h2>TITLE:</h2><p className="art-details-text">{props.artDetails.title}</p>
      <h2>STARTING DATE:</h2><p className="art-details-text">{props.artDetails.date_start}</p>
      <h2>ENDING DATE:</h2><p className="art-details-text">{props.artDetails.date_end}</p>
      <h2>ARTIST:</h2><p className="art-details-text">{props.artDetails.artist_title}</p>
      <h2>DESCRIPTION:</h2><p className="art-details-text">{props.artDetails.thumbnail.alt_text}</p>
      {likedMessage}
    </section>
  )
}

export default ArtDetails;