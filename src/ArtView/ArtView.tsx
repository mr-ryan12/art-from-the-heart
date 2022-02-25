import React, { Component } from 'react'
import { getArtDetails } from '../apiCalls'
import ArtDetails from '../ArtDetails/ArtDetails'
import Loading from '../Loading/Loading'
import './ArtView.scss'
import { cleanImages, cleanImageDetails } from '../utils'
import ErrorHandling from '../404/404'
import FeaturedArt from '../FeaturedArt/FeaturedArt'

interface State {
  userLikesPhoto: boolean | undefined;
  singlePiece: undefined | ImageDetails | any;
  isLoading: boolean;
  artPieces: {
    id: number;
    image_src: string;
    description: string;
    title: string;
    date_start: number;
    image_id: string;
    artist_title: string;
  }[];
  randomImageId: string;
  error: string;
}

interface ImageDetails {
  id: number;
  image_src: string;
  description: string;
  title: string;
  date_start: number;
  date_end: number;
  image_id: string;
  artist_title: string;
  thumbnail: {
    alt_text: string;
    height: number;
    lqip: string;
    width: number;
  }
}

interface Props {
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
      randomImageId: '',
      error: ''
    }
  }

  componentDidMount = () => {
    getArtDetails(this.props.category)
      .then(data => {
        this.setState({
          isLoading: false,
          artPieces: data.data,
          randomImageId: cleanImages(data.data)
        })
      })
      .catch(error => this.setState({error: error.message}))
  }

  findPiece = (value: boolean) => {
    const foundPiece = this.state.artPieces.find(piece => piece.image_id === this.state.randomImageId)
    this.setState({ userLikesPhoto: value, singlePiece: cleanImageDetails(foundPiece) })
  }

  checkError = () => {
    if (this.state.error) {
      return <ErrorHandling message={this.state.error}/>
    } else if (this.state.isLoading) {
      return <Loading />
    } else {
      return (
        <>
          <FeaturedArt randomImageId={this.state.randomImageId} findPiece={this.findPiece}/>
          <section className="image-details-container">
            {this.state.singlePiece ? <ArtDetails artDetails={this.state.singlePiece} isLiked={this.state.userLikesPhoto}/> : null}
          </section>
        </>
      )
    }
  }
  
  render() {
    return(
      <div className="art-view-container">
        {this.checkError()}
      </div>
    )
  }
}

export default ArtView;