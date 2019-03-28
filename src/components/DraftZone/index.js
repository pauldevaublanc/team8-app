import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';
import Cookies from 'js-cookie'


// Components
import PlayerCard from '../../components/PlayerCard';

class DraftZone extends Component {

  state = {
    teammates: [],
    playersId: []
  }

  static propTypes = {
      style: PropTypes.object,
      onInvitePlayers: PropTypes.func,
  }

  getPlayers = () => {
    fetch(`${config.urlApi}/users`)
      .then((response) => {return response.json();})
      .then((data) => {
        this.setState({
          teammates: data
        })
    });
  }


  getInvitationPlayerId = (playerId) => {
    
    
    const newPlayer = this.state.playersId.slice()
    
    if (this.state.playersId.indexOf(playerId) === -1 ){
      newPlayer.push(playerId)
      this.setState({
        playersId: newPlayer
      }, () => {this.props.onInvitePlayers(this.state.playersId)})
    }
    
  }

  componentDidMount() {
    this.getPlayers();
  }
    

  render() {
    
    return (
      <div className="draft_wrapper" style={this.props.style}>
        {
          this.state.teammates
            .filter((user, key) => {
              return (user._id !== Cookies.get('myId'))
            })
            .map((user, key) => {

            return (
              <PlayerCard 
                key={key}
                id={user._id}
                lastName={user.username}
                picture={`${config.urlApi}${user.picture.url}`}
                grade={user.generalGrade}
                poste={user.position}
                level={user.generalLevel}
                age={user.age}
                city={user.city}
                matchPlayed={18}
                wins={1}
                mvp={user.mvp}
                stars={user.fairplayGrade}
                icon={'add.png'}
                onClick={()=>this.getInvitationPlayerId(user._id)}
              />
            )
          })
        }   
      </div>
    );
  }
}

export default DraftZone;