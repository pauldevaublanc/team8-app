import React, { Component } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './pages/home/index';
import LogIn from './pages/logIn/index';
import User from './pages/user/index';
import Game from './pages/game/index';
import Games from './pages/games/index';
import Teammates from './pages/teammates/index';
import CreateGame from './pages/createGame/index';

class App extends Component {
  render() {
    return (
      <Router>         
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={LogIn} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/games/:list" component={Games} />
            <Route exact path="/teammates" component={Teammates} />
            <Route exact path="/createGame" component={CreateGame} />
            <Route exact path="/teammates/:panel" component={Teammates} />
            
            <Route exact path="/game/:gameId" component={Game} />
            <Route exact path="/user/:userId" component={User} />
            
            
          </div>
      </Router>
    );
  }
}
export default App;
