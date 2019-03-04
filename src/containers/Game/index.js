import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';



// Components
import GameComponent from '../../components/Game/index';

class GameContainer extends Component {

    static propTypes = {
      gameId: PropTypes.string,
    }

    state = {
        game: null
      }
    
    getGameDetail = () => {
        const id = this.props.gameId;
        
        fetch(`${config.urlApi}/games/${id}`)
        .then((response) => {return response.json();})
        .then((data) => {
            this.setState({
            game: data
            })
        });
    }
    
    componentDidMount() {
        this.getGameDetail();
    }



  render() {
    
    return (
        <div>
          { this.state.game &&
            <GameComponent game={ this.state.game } />
          }
          
        </div>
   
    );
  }
}

export default GameContainer;