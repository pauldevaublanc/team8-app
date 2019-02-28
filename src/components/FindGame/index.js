import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';

import 'moment/locale/fr';


// Components
import GameCard from '../../components/GameCard';

class FindGame extends Component {

  state = {
    games: []
  }


    static propTypes = {
        style: PropTypes.object,
    }

    getGames = () => {
      // requete ajax pour recuperer la listes des matchs
      fetch(`${config.urlApi}/games`)
        .then((response) => {return response.json();})
        .then((data) => {
          this.setState({
            games: data
          })
      });
    }

    componentDidMount() {
      this.getGames();
    }
    

  render() {
    const moment = require('moment');
    
    return (
        
        <div className="find-game_wrapper" style={this.props.style}>
            {
                this.state.games.map((game, key) => {
                    return (
                        <GameCard key={key}
                        id={game._id}
                        gameDay={moment(game.date).locale('fr').format("dddd")}
                        gameMonth={moment(game.date).format("Do MMMM")}
                        gameHour={moment(game.date).format("H : mm")}
                        userName={game.OrganizerName}
                        picture={`${config.urlApi}${game.OrganizerPicture.url}`}
                        numberPlayers={'3'}
                        gameLocation={game.court.city}
                        availablePlace={game.availablePlace}/>
                    )
                })
            }
        </div>
    );
  }
}

export default FindGame;