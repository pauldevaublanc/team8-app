import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

import Pills from '../../components/Pills';

class GameCard extends Component {

  static propTypes = {
    gameDay: PropTypes.string,
    gameMonth: PropTypes.string,
    gameHour: PropTypes.string,
    userName: PropTypes.string,
    picture: PropTypes.string,
    numberPlayers: PropTypes.string,
    gameLocation: PropTypes.string,
    style: PropTypes.object,
}

  render() {
    return (
      <div className="gameCard_wrapper">
      <Pills available={true} style={{padding:'10px 10px 0px'}}/>
        <div className="line-circle-court"></div>
        <div className="line-court"></div>
        <div className="gameCard_detail-container">
          <div className="gameCard_date-wrapper">
            <div className="gameCard_day">{this.props.gameDay}</div>
            <div>{this.props.gameMonth}</div>
            <div className="gameCard_hour">{this.props.gameHour}</div>
          </div>
          <div className="gameCard_user-detail-wrapper">
            <div className="img-cropper">
              <img src={require(`../../img/${this.props.picture}`)} alt=""/>
            </div>
            <p style={{paddingTop:8}}>Organisé par <br/>{this.props.userName}</p>
          </div>
        </div>
        <div className="gameCard_game-detail-wrapper">
          <div className="gameCard_game-detail-players">{this.props.numberPlayers} vs {this.props.numberPlayers}</div>
          <div style={{zIndex:1}}>/</div>
          <div className="gameCard_game-detail-location">{this.props.gameLocation}</div>
        </div>
      </div>
    );
  }
}

export default GameCard;