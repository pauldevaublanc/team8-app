import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';
import Cookies from 'js-cookie'

import 'moment/locale/fr';


// Components
import GameCard from '../../components/GameCard';

class MyGames extends Component {

    state = {
      games: []
    }

    static propTypes = {
        style: PropTypes.object,
    }

    getGames = () => {
      fetch(`${config.urlApi}/users/me`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
        .then((response) => {return response.json();})
        .then((data) => {
          this.setState({
            games: data.games
          })
      });
    }

    componentDidMount() {
      this.getGames();
    }
    

  render() {
    const moment = require('moment');
    
    return (
      <div className="my-games_wrapper" style={this.props.style}>
          {
            this.state.games.map((game, key) => {
              return (
                  <GameCard key={key}
                  id={game._id}
                  gameDay={moment(game.date).locale('fr').format("dddd")}
                  gameMonth={moment(game.date).format("Do MMMM")}
                  gameHour={moment(game.date).format("H : mm")}
                  userName={game.host.username}
                  picture={`${config.urlApi}${game.host.picture.url}`}
                  numberPlayers={game.playersCounter}
                  gameLocation={game.city}
                  availablePlace={game.availablePlace}/>
              )
            })
          }
      </div>
    );
  }
}

export default MyGames;