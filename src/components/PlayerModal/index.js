import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

import { Rate } from 'antd';
// COMPONENTS
import ProfilePicture from '../ProfilePicture';



class PlayerModalComponent extends Component {

    static propTypes = {
        player: PropTypes.object,
    }
  
    

    render() {
        const { player } = this.props
        return ( 
            <div className="player-modal_wrapper">
                <div className="player-modal_left">
                    <div style={{background:'var(--gray)', padding:'15px 10px'}}>
                        <div className="player-modal_grade">
                            <div>{player.generalGrade}<br/><span>GEN</span></div>
                        </div>
                        <div className="player-modal_general-infos">
                            <p className="player-modal_position">{player.position}</p>
                            <p style={{textTransform:'capitalize'}}>{player.level}</p>
                        </div>
                    </div>
                    <div style={{borderTop:'3px solid var(--white)', paddingTop:15, paddingLeft:10}}>
                        <p>{player.age} ans</p>
                        <p style={{textTransform:'capitalize'}}>{player.city}</p>
                        <p style={{paddingTop:15}}>Fair-play</p>
                        <Rate disabled allowHalf defaultValue={player.fairPlay} className="rating-antd" style={{lineHeight:0}}/>
                    </div>
                </div>
                
                <div className="player-modal_right">
                    <ProfilePicture size={140} picture={player.picture} borderStyle={'border-small'}/>
                    <p style={{padding:'10px 0px 5px'}}>{player.description}</p>
                    <div className="player-modal_table-results">
                        <div><span>{player.matchPlayed}</span><br/>Matchs</div>
                        <div><span>{player.mvp}</span><br/>MVP</div>
                        <div><span>{player.wins}</span><br/>Victoires</div>
                    </div>
                    <ul className="player-modal_table-detail">
                        <li>
                            <div>Matchs organisés</div>
                            <div>0</div>
                        </li>
                        <li>
                            <div>Matchs annulés</div>
                            <div>0</div>
                        </li>
                        <li>
                            <div>Terrains pratiqués</div>
                            <div>0</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PlayerModalComponent;