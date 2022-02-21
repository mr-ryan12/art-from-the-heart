import React, { Component } from 'react';
import Categories from './Categories/Categories';
import Navigation from './Navigation/Navigation';
import { getArtDetails} from './apiCalls';
import './App.scss';
import ArtView from './ArtView/ArtView';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props: object) {
    super(props)
  }

  render() {
    return (
      <>
        <Navigation />
        <main className="App">
          < Route exact path='/' render={() => <Categories /> }/>
          < Route exact path='/:category' render={({ match }) => <ArtView category={match.params.category}/>} />
        </main>
      </>
    )
  }
}

export default App;
