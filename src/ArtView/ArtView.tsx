import React, { Component } from 'react';
import { getArtDetails } from '../apiCalls';
import ArtDetails from '../ArtDetails/ArtDetails';
import Loading from '../Loading/Loading';
import './ArtView.scss';

interface State {
  userLikesPhoto: boolean | undefined;
  singlePiece: ImageDetails | any;
  isLoading: boolean;
  artPieces: {
    id: number;
    image_src: string;
    description: string;
    title: string;
    date_start: number;
    image_id: string;
    artist_title: string;
    classification_titles: Array<string>;
  }[];
  randomImageId: string;
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
  category: string;
}

class ArtView extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userLikesPhoto: undefined,
      singlePiece: undefined,
      isLoading: true,
      artPieces: [],
      randomImageId: ''
    }
  }

  componentDidMount = () => {
    getArtDetails(this.props.category)
      .then(data => {
        this.setState({
          isLoading: false,
          artPieces: data.data,
          randomImageId: data.data[this.getRandomIndex(data.data.length)].image_id
        })
      })
  }

  getRandomIndex = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  findPiece = (value: boolean) => {
    const foundPiece = this.state.artPieces.find(piece => piece.image_id === this.state.randomImageId)
    this.setState({ userLikesPhoto: value, singlePiece: foundPiece })
  }
  
  render() {
    const loading = this.state.isLoading ? <Loading /> : <><img className="featured-art" src={`https://www.artic.edu/iiif/2/${this.state.randomImageId}/full/843,/0/default.jpg`} alt="painting of people at a park on a sunny day" />
    <div className="user-choices">
      <button className="ratings-choice" onClick={() => this.findPiece(true)}>👍</button>  
      <button className="ratings-choice" onClick={() => this.findPiece(false)}>👎</button>  
    </div>
    <section className="image-details-container">
      {this.state.singlePiece ? <ArtDetails artDetails={this.state.singlePiece} isLiked={this.state.userLikesPhoto}/> : null}
    </section></>
    return(
      <div className="art-view-container">
        {/* <img className="featured-art" src={`https://www.artic.edu/iiif/2/${this.props.imageId}/full/843,/0/default.jpg`} alt="painting of people at a park on a sunny day" />
        <div className="user-choices">
          <button className="ratings-choice" onClick={() => this.findPiece(true)}>👍</button>  
          <button className="ratings-choice" onClick={() => this.findPiece(false)}>👎</button>  
        </div>
        <section className="image-details-container">
          {this.state.singlePiece ? <ArtDetails artDetails={this.state.singlePiece} isLiked={this.state.userLikesPhoto}/> : null}
        </section> */}
        {loading}
      </div>
    )
  }
}

export default ArtView;