import React from 'react'
import './ArtDetails.scss'

interface Props {
  artDetails: Details;
}

interface Details {
  id: number;
  image_src: string;
  description: string;
  title: string;
  date_start: number;
  image_id: string;
  artist_title: string;
  classification_titles: Array<string>;
}

const ArtDetails: React.FC<Props> = props => {
  {console.log(props.artDetails.title)}

  return (
    <section className="art-details-container">
      <h2>{props.artDetails.title}</h2>
    </section>
  )
}

export default ArtDetails