import React from 'react'
import './ArtDetails.scss'
import '../ArtView/ArtView.scss'

// {
//   "_score": 92.88719,
//   "thumbnail": {
//     "alt_text": "A work made of gelatin silver print.",
//     "width": 1281,
//     "lqip": "data:image/gif;base64,R0lGODlhBwAFAPQAAD8/P0NDQ0ZGRmZmZnp6eoqKipGRkZmZmZ2dnZ6enqCgoKGhoaSkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra+vr7Ozs7e3t7q6ugAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAAIf4KQXBwbGVNYXJrCgAh/wtJbWFnZU1hZ2ljaw5nYW1tYT0wLjQ1NDU0NQAsAAAAAAcABQAABR2gJEFT1DCIcjBRYgTCkCkFAQwOVi2K0lwPisUSAgA7",
//     "height": 907
//   },
//   "date_start": 2003,
//   "date_end": 2004,
//   "id": 202832,
//   "image_id": "ad8092b2-f422-01b5-908a-e1911ce469b1",
//   "title": "29 Palms: Security and Stabilization Operations, Graffiti I"
//   },

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
  {console.log(props.artDetails)}

  return (
    <section className="art-details-container">
      {/* <h2>{props.artDetails.title}</h2>
      <h2>{props.artDetails.thumbnail}</h2> */}
      <div className="centered">
        <h2>{props.artDetails.title}</h2>
        <p>{props.artDetails.date_start}</p>
        <p>{props.artDetails.date_end}</p>
        <p>{props.artDetails.artist_title}</p>
        <p>{props.artDetails.thumbnail.alt_text}</p>

      </div>
    </section>
  )
}

export default ArtDetails