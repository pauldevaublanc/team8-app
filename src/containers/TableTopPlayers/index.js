import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';


// Components
import TableTopPlayersComponent from '../../components/TableTopPlayers/index';


class TableTopPlayersContainer extends Component {

    static propTypes = {
        style: PropTypes.object,
        
    }

    state = {
        topPlayers: null
      }
    
    getPlayerDetail = () => {
        
        fetch(`${config.urlApi}/users`)
        .then((response) => {return response.json();})
        .then((data) => {
            this.setState({
            topPlayers: data
            })
        });
    }
    
    componentDidMount() {
        this.getPlayerDetail();
    }


    render () {
        return (
            <div>
                { this.state.topPlayers &&
                    <TableTopPlayersComponent topPlayers={ this.state.topPlayers }/>
                }
            </div>
            
        )
    }
}

export default TableTopPlayersContainer