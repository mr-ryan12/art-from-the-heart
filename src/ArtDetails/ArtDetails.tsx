import React from 'react';
import './ArtDetails.scss';
import '../ArtView/ArtView.scss';

interface Props {
  artDetails: Details;
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
  return (
    <section className="art-details-container">
      <h2>TITLE:</h2><p className="art-details-text">{props.artDetails.title}</p>
      <h2>STARTING DATE:</h2><p className="art-details-text">{props.artDetails.date_start}</p>
      <h2>ENDING DATE:</h2><p className="art-details-text">{props.artDetails.date_end}</p>
      <h2>ARTIST:</h2><p className="art-details-text">{props.artDetails.artist_title}</p>
      <h2>DESCRIPTION:</h2><p className="art-details-text">{props.artDetails.thumbnail.alt_text}</p>
      <p className="percent-message">You and 78% of other voters liked this art! You have great taste!</p>
    </section>
  )
}

export default ArtDetails;