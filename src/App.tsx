import React, { Component } from 'react';
import Categories from './Categories/Categories';
import Navigation from './Navigation/Navigation';
import { getArtDetails} from './apiCalls';
import './App.scss';
import ArtView from './ArtView/ArtView';
import {Route, Switch} from 'react-router-dom';

interface State {
  artPieces: Props[];
  imgId: string;
  singleImageDetails: {
    date_end: number;
    date_start?: number;
    image_id?: string;
    title?: string;
    _score?: number;
  } | object | undefined
}

interface Props {
  id: number;
  image_src: string;
  description: string;
  title: string;
  date_start: number;
  image_id: string;
  artist_title: string;
  classification_titles: Array<string>;
}

class App extends Component<{}, State> {
  constructor(props: object) {
    super(props)
    this.state = {
      imgId: '',
      artPieces: [],
      singleImageDetails: {}
    }
  }

  getCategory = (category: string) => {
    getArtDetails(category)
    .then(data => {
      this.setState({artPieces: data.data})
      let randomImage = this.state.artPieces[this.getRandomIndex(this.state.artPieces.length)]['image_id']
      this.getImage(randomImage)
      let foundPiece = this.state.artPieces.find(piece => piece.image_id === randomImage)
      this.setState({singleImageDetails: foundPiece})
    })
  }

  getRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
  }

  
  getImage = (image: string) => {
    this.setState({imgId: image})
  }

  render() {
    return (
      <>
        <Navigation />
        <main className="App">
          < Route exact path='/' render={() => <Categories getCategory={this.getCategory} imageId={this.state.imgId} /> }/>
          < Route exact path='/:category' render={({ match }) => <ArtView imageId={this.state.imgId} artPieces={this.state.artPieces} category={match.params.category}/>} />
        </main>
      </>
    )
  }
}

export default App;
