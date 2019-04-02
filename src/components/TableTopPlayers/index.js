import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';

import { Modal } from 'antd';

// COMPONENTS
import Button from '../Button';
import PlayerModalComponent from '../../components/PlayerModal/index';


class TableTopPlayersComponent extends Component {
    state = { 
        visible: false,
        currentPlayerId: null 
      }

    static propTypes = {
        topPlayers: PropTypes.array,
    }

    showModal = (currentPlayer) => {
        this.setState({
          visible: true,
          currentPlayerId: currentPlayer
        });
      }
    
      handleOk = (e) => {
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        this.setState({
          visible: false,
        });
      }
    

  render() {
    return (
        <div className="table-top-players_wrapper" style={this.props.style}>
            
            <div className="table-top-players_header"> 
                <p style={{textAlign:'left'}} className="number-column">N°</p>
                <p className="text-column">Nom</p> 
                <p className="text-column noMobile">Ville</p>
                <p className="number-column">Générale</p>
                <p className="number-column">Victoires</p>
            </div>
            
            {
                this.props.topPlayers.sort((a, b) => {
                    return (
                        b.generalGrade - a.generalGrade
                    )
                }).slice(0 , 10).map((player, key) => {
                    return (
                        <div key={key}>
                            <div className="table-top-players_body" onClick={()=>this.showModal(player._id)}>
                                <p style={{textAlign:'left', paddingLeft:10}} className="number-column">{key + 1}</p>
                                <p className="text-column">{player.username}</p>
                                <p className="text-column noMobile">{player.city}</p>
                                <p className="number-column">{player.generalGrade}</p>
                                <p className="number-column">a faire</p>
                            </div>
                            <Modal
                                title={player.username}
                                centered={true}
                                visible={this.state.currentPlayerId === player._id ? this.state.visible : false}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                footer={[
                                <div 
                                key={42} style={{display:'flex', justifyContent: 'flex-end'}}>
                                    <Button 
                                        key="submit" 
                                        buttonStyle={'button-orange'} 
                                        style={{
                                        height:30, 
                                        width: 100,
                                        minWidth:100, 
                                        padding: '5px 10px', 
                                        marginLeft:15
                                        }} 
                                        text={'Ok'} 
                                        loading={this.state.loading} 
                                        onClick={this.handleOk}/>
                                </div>
                            ]}>
                                <PlayerModalComponent 
                                    player={{
                                    generalGrade:player.generalGrade,
                                    age:player.age, 
                                    level:player.generalLevel, 
                                    position:player.position,
                                    picture: `${config.urlApi}${player.picture.url}`,
                                    description: player.description,
                                    matchPlayed: player.games.length,
                                    mvp: player.mvp,
                                    wins: player.wins,
                                    fairPlay: player.fairplayGrade,
                                    city: player.city
                                    }}
                                />
                            </Modal>
                        </div>
                    ) 
                })
            }   
        </div>
    );
  }
}

export default TableTopPlayersComponent;