import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


class TableTopPlayersComponent extends Component {

    static propTypes = {
        topPlayers: PropTypes.array,
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
                        <Link key={key} to={`/user/${player._id}`}>
                            <div className="table-top-players_body">
                                <p style={{textAlign:'left', paddingLeft:10}} className="number-column">{key + 1}</p>
                                <p className="text-column">{player.username}</p>
                                <p className="text-column noMobile">{player.city}</p>
                                <p className="number-column">{player.generalGrade}</p>
                                <p className="number-column">a faire</p>
                            </div>
                        </Link>
                    ) 
                })
            } 
                
            
        </div>
    );
  }
}

export default TableTopPlayersComponent;