import React, { Component } from 'react';
import ArtDetails from '../ArtDetails/ArtDetails';
import './ArtView.scss';

interface State {
  userLikesPhoto: boolean | undefined;
  singlePiece: ImageDetails | any;
}

interface ImageDetails {
  id: number;
  image_src: string;
  description: string;
  title: string;
  date_start: number;
  image_id: string;
  artist_title: string;
  classification_titles: Array<string>;
}

interface Props {
  imageId: string;
  artPieces: {
    id: number;
    image_src: string;
    description: string;
    title: string;
    date_start: number;
    image_id: string;
    artist_title: string;
    classification_titles: Array<string>;
  }[]
}

class ArtView extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userLikesPhoto: undefined,
      singlePiece: undefined
    }
  }

  findPiece = () => {
    const foundPiece = this.props.artPieces.find(piece => piece.image_id === this.props.imageId)
    this.setState({ singlePiece: foundPiece })
  }


  render() {
    return(
      <div className="art-view-container">
        <img className="featured-art" src={`https://www.artic.edu/iiif/2/${this.props.imageId}/full/843,/0/default.jpg`} alt="painting of people at a park on a sunny day" />
        <div className="user-choices">
          <button className="ratings-choice" onClick={() => this.findPiece()}>👍</button>  
          <button className="ratings-choice" >👎</button>  
        </div>
        <section className="image-details-container">
          {this.state.singlePiece ? <ArtDetails artDetails={this.state.singlePiece}/> : null}
        </section>
      </div>
    )
  }
}

export default ArtView;