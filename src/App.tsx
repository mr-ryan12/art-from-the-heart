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
      categories: ['photography', 'watercolor', 'painting', 'oil painting', 'sculpture', 'pencil', 'pastel', 'chalk'],
      darkMode: localStorage.length === 0 ? '' : localStorage.getItem('dark-mode'),
      isDarkModeOn: false
    }
  }

  componentDidMount = () => {
    if (localStorage.getItem('dark-mode') === '') {
      document.body.style.backgroundColor = '#FFF'
      document.body.style.color = '#000'
    } else if (localStorage.getItem('dark-mode') === '-dark') {
      document.body.style.backgroundColor = '#000'
      document.body.style.color = '#FFF'
    }
  }

  checkCategory = (input: string) => {
    if (this.state.categories.includes(input)) {
      return ( <ArtView category={input} darkMode={this.state.darkMode}/>)
    } else {
      return ( <ErrorHandling message='Just going to paint a happy little error message right here.' darkMode={this.state.darkMode}/>)
    }
  }

  toggleDarkMode = () => {
    if (localStorage.getItem('dark-mode') === '-dark') {
      localStorage.setItem('dark-mode', '')
      document.body.style.backgroundColor = '#FFF'
      document.body.style.color = '#000'
      this.setState({
        isDarkModeOn: false,
        darkMode: localStorage.getItem('dark-mode')
      })
    } else {
      localStorage.setItem('dark-mode', '-dark')
      document.body.style.backgroundColor = '#000'
      document.body.style.color = '#FFF'
      this.setState({
        isDarkModeOn: true,
        darkMode: localStorage.getItem('dark-mode')
      })
    }
  }

  render() {
    return (
      <>
        <Navigation darkMode={this.state.darkMode} toggleDarkMode={this.toggleDarkMode}/>
        <main className="App">
          <Switch>
            <Route exact path='/' render={() => <Categories categories={this.state.categories} darkMode={this.state.darkMode}/>} />
            <Route exact path='/:category' render={({ match }) => this.checkCategory(match.params.category)} />
            <Route render={() => <ErrorHandling message='Just going to paint a happy little error message right here.' darkMode={this.state.darkMode}/>} />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;
