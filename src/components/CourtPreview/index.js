import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';


// Components
import ProfilePicture from '../ProfilePicture';


class CourtPreview extends Component {

    static propTypes = {
        numberTeamPlayer: PropTypes.number,
        guests: PropTypes.array,
        hostPicture: PropTypes.string,
        hostName: PropTypes.string,
        guestPicture: PropTypes.string,
    }

    state = {
        isMobile: false
    }

 

    multiEvent = (element, eventNames, listener) => {
        var events = eventNames.split(' ');
        for (var i=0, iLen=events.length; i<iLen; i++) {
            element.addEventListener(events[i], listener, false);
        }
    }

    componentDidMount() {
        this.multiEvent(window, 'load resize click', () => {
            const isMobile = window.innerWidth < 680;
            if (isMobile !== this.state.isMobile){
                this.setState({isMobile})
            }
        }) 
    }

    players = [
        {
            teamPlayer:1,
            top: '50%',
            left: '36%',
            border: 'border-small-orange',
            picture: `${config.urlApi}${this.props.hostPicture}`,
            name: this.props.hostName
        }, 
        {
            teamPlayer:1,
            top: '50%',
            left: '64%',
            border: 'border-small-white',
            picture: this.props.guests[0] ? `${config.urlApi}${this.props.guests[0].picture.url}` : null,
            name: this.props.guests[0] ? this.props.guests[0].username : null
        }, 
        {
            teamPlayer:2,
            top: '65%',
            left: '14%',
            border: 'border-small-orange',
            picture: this.props.guests[1] ? `${config.urlApi}${this.props.guests[1].picture.url}` : null,
            name: this.props.guests[1] ? this.props.guests[1].username : null
        }, 
        {
            teamPlayer:2,
            top: '65%',
            left: '86%',
            border: 'border-small-white',
            picture: this.props.guests[2] ? `${config.urlApi}${this.props.guests[2].picture.url}` : null,
            name: this.props.guests[2] ? this.props.guests[2].username : null
        }, 
        {
            teamPlayer:3,
            top: '35%',
            left: '11%',
            border: 'border-small-orange',
            picture: this.props.guests[3] ? `${config.urlApi}${this.props.guests[3].picture.url}` : null,
            name: this.props.guests[3] ? this.props.guests[3].username : null      
        }, 
        {
            teamPlayer:3,
            top: '35%',
            left: '89%',
            border: 'border-small-white',
            picture: this.props.guests[4] ? `${config.urlApi}${this.props.guests[4].picture.url}` : null,
            name: this.props.guests[4] ? this.props.guests[4].username : null
        }, 
        {
            teamPlayer:4,
            top: '16%',
            left: '32%',
            border: 'border-small-orange',
            picture: this.props.guests[5] ? `${config.urlApi}${this.props.guests[5].picture.url}` : null,
            name: this.props.guests[5] ? this.props.guests[5].username : null
        }, 
        {
            teamPlayer:4,
            top: '16%',
            left: '69%',
            border: 'border-small-white',
            picture: this.props.guests[6] ? `${config.urlApi}${this.props.guests[6].picture.url}` : null,
            name: this.props.guests[6] ? this.props.guests[6].username : null,
        }, 
        {
            teamPlayer:5,
            top: '86%',
            left: '33%',
            border: 'border-small-orange',
            picture: this.props.guests[7] ? `${config.urlApi}${this.props.guests[7].picture.url}` : null,
            name: this.props.guests[7] ? this.props.guests[7].username : null,
        }, 
        {
            teamPlayer:5,
            top: '86%',
            left: '68%',
            border: 'border-small-white',
            picture: this.props.guests[8] ? `${config.urlApi}${this.props.guests[8].picture.url}` : null,
            name: this.props.guests[8] ? this.props.guests[8].username : null,
        }, 
    ];

    createTable = () => {
        let table = [];
        for (let i = 0; i < this.props.numberTeamPlayer; i++) {
            table.push(    
                <div className="court-preview_line" key={ i }>
                    <div className="court-preview_column">
                        
                    </div>
                    <div className="court-preview_column">
                        
                    </div>
                </div>
            )
        }
        return table
      }
    



  render() {
    return (  
        <div className="court-preview_container">
            <div className="court-preview_wrapper">
                <div className="court-preview_line-middle-court"></div>
                <div className="court-preview_half-circle" ></div>
                <div className="court-preview_half-circle circle-right"></div>
                <div className="court-preview_round-middle-court"></div>

                <div className="court-preview_wrapper-players">  
                    {
                        this.players
                            .filter((player) => player.teamPlayer <= this.props.numberTeamPlayer)
                            .map((player, key) => {
                                return(
                                    <div 
                                        key={key}
                                        style={{
                                            position:'absolute',
                                            transform: 'translate(-50%, -50%)',
                                            left: player.left,
                                            top: player.top,
                                            display: player.picture === null ? 'none' : 'block'
                                        }}
                                    >
                                        <ProfilePicture 
                                            size={this.state.isMobile && this.props.numberTeamPlayer > 3 ? 55 : this.state.isMobile ? 70 : 80} 
                                            borderStyle={player.border} 
                                            picture={player.picture}
                                            // picture={require(`../../img/profile-default.jpg`)}
                                        />
                                        <div className="court-preview_player-name">{player.name}</div>
                                    </div>
                                )
                        })
                    }
                </div>
                
            </div>
            <div className="court-preview_table-players">
                <div style={{height:'70%'}}>               
                    <div className="court-preview_separator">vs</div>    

                    <div className="court-preview_line">
                        <div className="court-preview_column header-column" style={{background:'#EF7E4D'}}>
                            Team 1
                        </div>
                        <div className="court-preview_column header-column" style={{background:'#ebebeb', color:'#1d1d1d'}}>
                            Team 2
                        </div>
                    </div>      
                    {
                   
                        this.createTable()
                            
                    }    
                    
                </div>
                
                <div className="court-preview_counter_wrapper">
                    <div>Invités <span>{this.props.guests.length}</span></div>
                    <div>Places restantes <span>3</span></div>
                </div>
            </div>
        </div>
    );
  }
}

export default CourtPreview;