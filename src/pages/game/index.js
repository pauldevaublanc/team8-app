import React, { Component } from 'react';
import './index.css';

// Images
import Background from '../../img/background-home.jpg';
// Components
import GameContainer from '../../containers/Game/index';
import FooterT8 from '../../components/FooterT8/index';


class Game extends Component {


  render() {
    return (
      <div>
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
            <div className="main_container"> 
                <GameContainer gameId={ this.props.match.params.gameId }/>
                <FooterT8/>
            </div>
        </div>
      </div>
    );
  }
}

export default Game;