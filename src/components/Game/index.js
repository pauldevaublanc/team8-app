import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

import 'moment/locale/fr';

import config from '../../config/index';


// Components

import Title from '../../components/Title/index';
import CourtPreview from '../CourtPreview';
import ProfilePicture from '../ProfilePicture';
import CourtInfos from '../CourtInfos';
import Button from '../Button';


class GameComponent extends Component {

    static propTypes = {
        game: PropTypes.object,
    }


  render() {
    const moment = require('moment');
    return (  
        <div>
          <Title text={'Feuille de match'} style={{padding:'15px 0px 55px'}}/>
          <div className="game-infos-subtitle">
            <img 
              style={{
                width:24, 
                paddingRight:6
              }} 
              src={require(`../../img/icones/calendar.png`)} 
              alt="match details"/>
            Details
          </div>
          <div className="game-infos-wrapper">
            <div className="game-organizer-infos">
              <ProfilePicture 
                size={120} 
                borderStyle={'border-small'} 
                picture={`${config.urlApi}${this.props.game.host.picture.url}`}
                style={{paddingRight: 15}}
              />
              <div>
                <div>{this.props.game.playersCounter} vs {this.props.game.playersCounter}</div>
                <div>Organisé par <span>{this.props.game.host.username}</span></div>
                <p>{this.props.game.description}</p>
              </div>
            </div>
            <div className="game-date-infos">
                <div>{moment(this.props.game.date).locale('fr').format("dddd")}</div>
                <div>{moment(this.props.game.date).format("Do MMMM")}</div>
                <div style={{display:'flex', alignItems:'center'}}><img style={{width:18, marginRight:8}} src={require(`../../img/icones/clock.png`)} alt="hour"/>{moment(this.props.game.date).format("H : mm")}</div> 
            </div>
          </div>
          <div className="game-infos-subtitle">
            <img 
              style={{
                width:25, 
                paddingRight:6
              }} 
              src={require(`../../img/icones/basketball-court.png`)} 
              alt="adress court"/>
              Terrain
          </div>
            <CourtInfos
              pictureSize={120}
              address={this.props.game.court.address}
              city={this.props.game.court.city}
              zipCode={this.props.game.court.zipCode}
              transport={this.props.game.court.transportStation}
              mainPicture={this.props.game.court.mainPicture.url}
              hoop={this.props.game.court.Panneaux}
              gradeCourt={this.props.game.court.gradeCourt}
              gradeCrowd={this.props.game.court.gradeCrowd}
              style={{border:'1px solid var(--gray)', borderTop: '1px solid var(--white)'}}
            />
            <div className="game-infos-subtitle">
              <img 
                style={{
                  width:24, 
                  paddingRight:6
                }} 
                src={require(`../../img/icones/team.png`)} 
                alt="adress court"/>
                Equipes
            </div>
           <CourtPreview 
            numberTeamPlayer={this.props.game.playersCounter}
            guests={this.props.game.players}
            hostPicture={this.props.game.host.picture.url}
            hostName={this.props.game.host.username}
            />

           <Button 
            text={'Participer à ce match'} 
            buttonStyle={'button-transparent'} 
            style={{
                width:'250px', 
                margin:'50px auto 0px'
            }}/>
        </div>
    );
  }
}

export default GameComponent;