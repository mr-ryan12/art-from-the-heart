import React, { Component } from 'react';
import Categories from './Categories/Categories';
import Navigation from './Navigation/Navigation';
import { getArtDetails} from './apiCalls';
import './App.scss';
import ArtView from './ArtView/ArtView';
import {Route, Switch} from 'react-router-dom';
import ErrorHandling from './404/404'

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

  checkCategory = (input: string) => {
    if (this.state.categories.includes(input)) {
      return ( <ArtView category={input} />)
    } else {
      return ( <ErrorHandling />)
    }
  }

  render() {
    return (
      <>
        <Navigation />
        <main className="App">
          <Switch>
            < Route exact path='/' render={() => <Categories categories={this.state.categories}/> }/>
            < Route exact path='/:category' render={({ match }) => this.checkCategory(match.params.category) } />
            < Route render={() => <ErrorHandling /> } />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;
