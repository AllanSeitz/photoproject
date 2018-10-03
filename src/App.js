import React, { Component } from 'react'
import CategoryList from "./CategoryList"
import PhotoDetail from "./PhotoDetail"
import PhotoList from "./PhotoList"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <React.Fragment>
            <header>
              <Link to='/CategoryList'>CategoryList</Link>
              <Link to='/PhotoDetail'>PhotoDetail</Link>
              <Link to='/PhotoList'>PhotoList</Link>
            </header>
            <Switch>
              <Route path='/CategoryList' Component={CategoryList} />
              <Route path='/PhotoDetail' Component={PhotoDetail} />
              <Route path='/PhotoList' Component={PhotoList} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default App
