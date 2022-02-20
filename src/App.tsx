import React, { Component } from 'react';
import Categories from './Categories/Categories'
import Navigation from './Navigation/Navigation'
import { getArtDetails, getArtImage } from './apiCalls';
import './App.scss';
import ArtView from './ArtView/ArtView'
import {Route, Link, Switch} from 'react-router-dom'


interface State {
  artPieces: Props[];
  imgId: string
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
      artPieces: [
        // {
        //   id: 1,
        //   image_src: 'https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg',
        //   description: 'Some Description',
        //   title: 'A really pretty painting',
        //   date_start: 2009,
        //   image_id: '239832',
        //   artist_title: 'Someone',
        //   classification_titles: ['bronze', 'metal', 'sculpture', 'modern and contemporary art']
        // },
        // {
        //   id: 2,
        //   image_src: 'https://www.artic.edu/iiif/2/65272293-e9c9-fc2b-887c-0e9687ec4221/full/843,/0/default.jpg',
        //   description: 'Some other description',
        //   title: 'Another amazing thing',
        //   date_start: 1844,
        //   image_id: '2789832',
        //   artist_title: 'Someone else',
        //   classification_titles: ['sculpture', 'figure']
        // },
        // {
        //   id: 3,
        //   image_src: 'https://www.artic.edu/iiif/2/6bec08f2-cb32-6bd4-54f0-6ac8cb68c218/full/843,/0/default.jpg',
        //   description: 'Some other other description',
        //   title: 'Another something else',
        //   date_start: 1458,
        //   image_id: '291832',
        //   artist_title: 'Someone someone else',
        //   classification_titles: ['painting', 'modern and contemporary art']
        // }
      ]
    }
  }

  getCategory = (category: string) => {
    getArtDetails(category)
    .then(data => {
      console.log(data.data)
      this.setState({artPieces: data.data})
      let randomImage = this.state.artPieces[this.getRandomIndex(this.state.artPieces.length)]['image_id']
      this.getImage(randomImage)
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
          < Route exact path='/:category' render={() => <ArtView imageId={this.state.imgId} />} />
        </main>
      </>
    )
  }
}

export default App;
