import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';


// Components
import PlayerCard from '../../components/PlayerCard';

class MesTeammates extends Component {

    static propTypes = {
        style: PropTypes.object,
    }
    

  render() {
    return (
        <div className="mes-teammates_wrapper" style={this.props.style}>
            {
              config.players.map((element, key) => {
                return(
                  <PlayerCard key={key}
                  lastName={element.lastName}
                  firstName={element.firstName}
                  picture={element.picture}
                  grade={element.grade}
                  poste={element.poste}
                  level={element.level}
                  age={element.age}
                  city={element.city}
                  matchPlayed={element.matchPlayed}
                  wins={element.wins}
                  mvp={element.mvp}
                  stars={element.stars}
                  icon={element.icon}/>
                )
              })
            }
        </div>
    );
  }
}

export default MesTeammates;