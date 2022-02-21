import React, { Component } from 'react';
import Categories from './Categories/Categories';
import Navigation from './Navigation/Navigation';
import { getArtDetails} from './apiCalls';
import './App.scss';
import ArtView from './ArtView/ArtView';
import {Route, Switch} from 'react-router-dom';

interface State {
  categories: Array<string>;
}

class App extends Component<{}, State> {
  constructor(props: object) {
    super(props)

    this.state = {
      categories: ['photography', 'watercolor', 'painting', 'oil painting', 'sculpture', 'pencil', 'pastels', 'chalk']  
    }
  }

  render() {
    return (
      <>
        <Navigation />
        <main className="App">
          < Route exact path='/' render={() => <Categories categories={this.state.categories}/> }/>
          < Route exact path='/:category' render={({ match }) => <ArtView category={match.params.category}/>} />
        </main>
      </>
    )
  }
}

export default App;
