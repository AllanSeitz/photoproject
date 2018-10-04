import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <header>
            <h1>Things That Interest ME:</h1>
            <h2>A Gallery of Photos by Allan Seitz</h2>
          </header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:category" component={PhotoList} />
            <Route path="/:category/:index" component={PhotoDetail} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App
