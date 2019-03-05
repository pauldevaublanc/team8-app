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


class GameComponent extends Component {

    static propTypes = {
        game: PropTypes.object,
    }


  render() {
    const moment = require('moment');
    return (  
        <div>
           <Title text={'Mon match'} style={{padding:'15px 0px 55px'}}/>
           <div className="game-infos-subtitle"><img style={{width:24, paddingRight:6}} src={require(`../../img/icones/calendar.png`)} alt="match details"/>Details</div>
           <div className="game-infos-wrapper">
            <div className="game-organizer-infos">
              <ProfilePicture 
                    size={120} 
                    borderStyle={'border-small'} 
                    picture={`${config.urlApi}${this.props.game.OrganizerPicture.url}`}
                    style={{paddingRight: 15}}
                />
                <div>
                  <div>{this.props.game.JoueursEquipe} vs {this.props.game.JoueursEquipe}</div>
                  <div>Organisé par <span>{this.props.game.OrganizerName}</span></div>
                  <p>{this.props.game.description}</p>
                </div>
            </div>
            <div className="game-date-infos">
                <div>{moment(this.props.game.date).locale('fr').format("dddd")}</div>
                <div>{moment(this.props.game.date).format("Do MMMM")}</div>
                <div>{moment(this.props.game.date).format("H : mm")}</div> 
            </div>
           </div>
           <div className="game-infos-subtitle"><img style={{width:25, paddingRight:6}} src={require(`../../img/icones/basketball-court.png`)} alt="adress court"/>Terrain</div>
           <CourtInfos
            address={this.props.game.court.address}
            city={this.props.game.court.city}
            transport={this.props.game.court.transportStation}
            courtPicture={this.props.game.court.courtPicture.url}
            hoop={this.props.game.court.Panneaux}
            gradeCourt={this.props.game.court.gradeCourt}
            gradeCrowd={this.props.game.court.grade}
           />
           <div className="game-infos-subtitle"><img style={{width:24, paddingRight:6}} src={require(`../../img/icones/team.png`)} alt="adress court"/>Equipes</div>
           <CourtPreview numberTeamPlayer={this.props.game.JoueursEquipe}/>
        </div>
    );
  }
}

export default GameComponent;