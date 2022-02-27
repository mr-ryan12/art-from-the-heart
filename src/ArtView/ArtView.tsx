import React, { Component } from 'react'
import { getArtDetails } from '../apiCalls'
import ArtDetails from '../ArtDetails/ArtDetails'
import Loading from '../Loading/Loading'
import './ArtView.scss'
import { cleanImages, cleanImageDetails } from '../utils'
import { ArtViewProps, ArtViewState } from '../interface'
import ErrorHandling from '../404/404'
import FeaturedArt from '../FeaturedArt/FeaturedArt'

class ArtView extends Component<ArtViewProps, ArtViewState> {
  constructor(props: ArtViewProps) {
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
      return <ErrorHandling message={this.state.error} darkMode={this.props.darkMode}/>
    } else if (this.state.isLoading) {
      return <Loading />
    } else {
      return (
        <>
          <FeaturedArt randomImageId={this.state.randomImageId} findPiece={this.findPiece} userLikesPhoto={this.state.userLikesPhoto} darkMode={this.props.darkMode}/>
          <section className="image-details-container">
            {this.state.singlePiece ? <ArtDetails artDetails={this.state.singlePiece} isLiked={this.state.userLikesPhoto} darkMode={this.props.darkMode}/> : null}
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