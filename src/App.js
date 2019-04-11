import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux'



import Home from './pages/home/index';
import LogIn from './pages/logIn/index';
import User from './pages/user/index';
import Game from './pages/game/index';
import Games from './pages/games/index';
import Teammates from './pages/teammates/index';
import CreateGame from './pages/createGame/index';
import Navbar from './components/Navbar';
import { getCourtsAction } from './store/actions/courtAction';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  getCourtsAction: () => dispatch(getCourtsAction()),
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => {
  return {
    courts: state.court.courts
  }
}

class App extends Component {
  
  getCourtsAction = (event) => {
    this.props.getCourtsAction();
  }
  render() {
    return (
      <Router history={ createBrowserHistory() }>   
         
        <div>
            
            {/* <button onClick={this.getCourtsAction}>Test redux action</button> */}
          <Navbar/>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/profile" component={User} /> */}
            <Route exact path="/authentification" component={LogIn} />
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
