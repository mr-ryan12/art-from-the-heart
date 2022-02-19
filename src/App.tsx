import React, { Component } from 'react';
import Categories from './Categories/Categories'
import Navigation from './Navigation/Navigation'
import './App.scss';
import ArtView from './ArtView/ArtView'

interface State {
  artPieces: Props[];
}

interface Props {
  id: number;
  image_src: string;
  description: string;
  title: string;
  date_start: number;
  artist_title: string;
  classification_titles: Array<string>;
}

class App extends Component<{}, State> {
  constructor(props: object) {
    super(props)
    this.state = {
      artPieces: [
        {
          id: 1,
          image_src: 'https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg',
          description: 'Some Description',
          title: 'A really pretty painting',
          date_start: 2009,
          artist_title: 'Someone',
          classification_titles: ['bronze', 'metal', 'sculpture', 'modern and contemporary art']
        },
        {
          id: 2,
          image_src: 'https://www.artic.edu/iiif/2/65272293-e9c9-fc2b-887c-0e9687ec4221/full/843,/0/default.jpg',
          description: 'Some other description',
          title: 'Another amazing thing',
          date_start: 1844,
          artist_title: 'Someone else',
          classification_titles: ['sculpture', 'figure']
        },
        {
          id: 3,
          image_src: 'https://www.artic.edu/iiif/2/6bec08f2-cb32-6bd4-54f0-6ac8cb68c218/full/843,/0/default.jpg',
          description: 'Some other other description',
          title: 'Another something else',
          date_start: 1458,
          artist_title: 'Someone someone else',
          classification_titles: ['painting', 'modern and contemporary art']
        }
      ]
    }
  }

  render() {
    return (
      <>
        <Navigation />
        <main className="App">
          <Categories />
          <ArtView />
        </main>
      </>
    )
  }
}

export default App;
