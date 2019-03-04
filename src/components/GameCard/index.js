import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Pills from '../../components/Pills';
import ProfilePicture from '../../components/ProfilePicture';

class GameCard extends Component {

  static propTypes = {
    gameDay: PropTypes.string,
    gameMonth: PropTypes.string,
    gameHour: PropTypes.string,
    userName: PropTypes.string,
    picture: PropTypes.string,
    numberPlayers: PropTypes.string,
    gameLocation: PropTypes.string,
    availablePlace: PropTypes.bool,
    style: PropTypes.object,

}

  render() {
    return (
      <div>
        <Link to={`/game/${this.props.id}`}>
          <div className="gameCard_wrapper">
          <Pills 
            available={this.props.availablePlace} 
            style={{
              padding:'10px 8px 0px',
              marginTop:10, 
              borderTop: '1px solid rgba(255, 255, 255, 0.5)'
            }}/>
            <div className="line-circle-court"></div>
            <div className="line-court"></div>
            <div className="gameCard_detail-container">
              <div className="gameCard_date-wrapper">
                <div className="gameCard_day">{this.props.gameDay}</div>
                <div>{this.props.gameMonth}</div>
                <div className="gameCard_hour">{this.props.gameHour}</div>
              </div>
              <div className="gameCard_user-detail-wrapper">
                <ProfilePicture size={100} picture={this.props.picture} borderStyle={'border-small'}/>
                <p style={{paddingTop:5}}>Organisé par <br/>{this.props.userName}</p>
              </div>
            </div>
            <div className="gameCard_game-detail-wrapper">
              <div className="gameCard_game-detail-players">{this.props.numberPlayers} <span style={{fontSize:15}}>vs</span> {this.props.numberPlayers}</div>
              <div className="gameCard_game-detail-location">{this.props.gameLocation}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default GameCard;