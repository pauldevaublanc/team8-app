import React, { Component } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './pages/home/index';
import User from './pages/user/index';
import Games from './pages/games/index';
import Teammates from './pages/teammates/index';

class App extends Component {
  render() {
    return (
      <Router>         
          <div>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/games" component={Games} />
            <Route exact path="/games/:list" component={Games} />
            <Route exact path="/teammates" component={Teammates} />
            <Route exact path="/teammates/:panel" component={Teammates} />
            
            <Route exact path="/user/:userId" component={User} />
            
            
          </div>
      </Router>
    );
  }
}
export default App;
