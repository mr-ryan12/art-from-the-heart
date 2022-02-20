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
  classification_titles: Array<string>
}

const ArtDetails: React.FC<Props> = props => {
  {console.log(props.artDetails.title)}
  return (
    <h1>{props.artDetails.title}</h1>
    )
}

export default ArtDetails