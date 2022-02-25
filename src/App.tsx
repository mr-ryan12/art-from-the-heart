import React, { Component } from 'react'
import Categories from './Categories/Categories'
import Navigation from './Navigation/Navigation'
import './App.scss'
import ArtView from './ArtView/ArtView'
import { Route, Switch } from 'react-router-dom'
import ErrorHandling from './404/404'
import { AppState } from './interface'

class App extends Component<{}, AppState> {
  constructor(props: object) {
    super(props)

    this.state = {
      categories: ['photography', 'watercolor', 'painting', 'oil painting', 'sculpture', 'pencil', 'pastel', 'chalk']  
    }
  }

  checkCategory = (input: string) => {
    if (this.state.categories.includes(input)) {
      return ( <ArtView category={input} />)
    } else {
      return ( <ErrorHandling message='Sorry, that page is not found.'/>)
    }
  }

  render() {
    return (
      <>
        <Navigation />
        <main className="App">
          <Switch>
            <Route exact path='/' render={() => <Categories categories={this.state.categories}/>} />
            <Route exact path='/:category' render={({ match }) => this.checkCategory(match.params.category)} />
            <Route render={() => <ErrorHandling message='Sorry, that page is not found.' />} />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;
