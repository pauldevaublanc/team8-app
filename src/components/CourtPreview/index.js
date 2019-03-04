import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import ProfilePicture from '../ProfilePicture';


// Images
import Ball from '../../img/1v1.png';

// Components



class CourtPreview extends Component {

    static propTypes = {
        numberTeamPlayer: PropTypes.string,
    }

    players = [
        {
            teamPlayer:1,
            top: '50%',
            left: '35%',
            border: 'border-small-orange'
        }, 
        {
            teamPlayer:1,
            top: '50%',
            left: '65%',
            border: 'border-small'
        }, 
        {
            teamPlayer:2,
            top: '65%',
            left: '12%',
            border: 'border-small-orange'
        }, 
        {
            teamPlayer:2,
            top: '65%',
            left: '88%',
            border: 'border-small'
        }, 
        {
            teamPlayer:3,
            top: '35%',
            left: '8%',
            border: 'border-small-orange'        
        }, 
        {
            teamPlayer:3,
            top: '35%',
            left: '92%',
            border: 'border-small'
        }, 
        {
            teamPlayer:4,
            top: '15%',
            left: '26%',
            border: 'border-small-orange'
        }, 
        {
            teamPlayer:4,
            top: '15%',
            left: '74%',
            border: 'border-small'
        }, 
        {
            teamPlayer:5,
            top: '85%',
            left: '26%',
            border: 'border-small-orange'
        }, 
        {
            teamPlayer:5,
            top: '85%',
            left: '74%',
            border: 'border-small'
        }, 
    ];


  render() {
    return (  
        <div className="court-preview_wrapper">
            <div className="court-preview_line-middle-court"></div>
            <div className="court-preview_half-circle" ></div>
            <div className="court-preview_half-circle circle-right"></div>
            <div className="court-preview_round-middle-court" style={{backgroundImage: `url(${Ball})`}}></div>

            <div className="court-preview_wrapper-players">  
                {
                    this.players.map((player, key) => {
                        if (player.teamPlayer <= this.props.numberTeamPlayer){
                            return(
                                <ProfilePicture key={key}
                                size={90} 
                                borderStyle={player.border} 
                                picture={require(`../../img/profile-default.jpg`)}
                                style={{
                                    position:'absolute',
                                    transform: 'translate(-50%, -50%)',
                                    left: player.left,
                                    top: player.top,
                                }}
                            />
                            )
                        }
                    })
                }
               
            </div>
        </div>
    );
  }
}

export default CourtPreview;