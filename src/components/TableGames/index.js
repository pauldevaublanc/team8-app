import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

import Button from './../Button/index';

class TableGames extends Component {

    static propTypes = {  
        style: PropTypes.object,
    }

    state = {
        active: 0
    }

    handleClick = (key) => {
        this.setState({ 
            active: key 
        });
    }
    
    menuElements = ['A venir', 'A compléter', 'Terminés']

    render() {
        return (
            <div>
                <div className="tabs-games-menu" style={this.props.style}>
                    {
                        this.menuElements.map((element, key) => {
                            return(
                                <div 
                                key={key} 
                                className={`tab ${this.state.active === key ? 'active' : ''}`}  
                                onClick={this.handleClick.bind(this, key)} 
                                >
                                    <h3>{element}</h3>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className="table_games-infos-wrapper">
                {
                    this.state.active === 0 ? <table className="table_next-game">
                    <tbody>
                        <tr>
                            <td>Date</td>
                            <td>Heure</td>
                            <td>Adresse</td>
                            <td>Ville</td>
                            <td>Statut</td>
                        </tr>
                        <tr>
                            <td>Lundi 5 mars</td>
                            <td>18:15</td>
                            <td>3 rue brimborion</td>
                            <td>Sèvres</td>
                            <td>Complet</td>
                        </tr>
                    </tbody>
                </table> : this.state.active === 1 ? <table className="table_next-game">
                    <tbody>
                        <tr>
                            <td>Date</td>
                            <td>Adresse</td>
                            <td>Ville</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>mardi 6 septembre</td>
                            <td>6 avenue du Louvre</td>
                            <td>Paris 15</td>
                            <td><Button text={'Enregistrer stats'} buttonStyle={'button-transparent'}/></td>
                        </tr>
                    </tbody>
                </table> : <table className="table_next-game">
                    <tbody>
                        <tr>
                            <td>Date</td>
                            <td>Heure</td>
                            <td>Adresse</td>
                            <td>Ville</td>
                            <td>Résultat</td>
                        </tr>
                        <tr>
                            <td>Samedi 7 décembre</td>
                            <td>12:50</td>
                            <td>31 rue brimborion</td>
                            <td>Aubervilliers</td>
                            <td>Victoire</td>
                        </tr>
                        <tr>
                            <td>Samedi 7 décembre</td>
                            <td>12:50</td>
                            <td>31 rue brimborion</td>
                            <td>Aubervilliers</td>
                            <td>Victoire</td>
                        </tr>
                    </tbody>
                </table>
                }
                </div>
               
            </div>
        );
    }
}

export default TableGames;