import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Photos from './components/Photos';
import Photo from './components/Photo';
import Nav from './components/Nav';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact strict component={Home} />
            <Route path="/about" exact strict component={About} />
            <Route path="/photos" exact strict component={Photos} />
            <Route path="/photos/:id" exact strict component={Photo} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;