import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';




class TableTopPlayers extends Component {

    static propTypes = {
        style: PropTypes.object,
    }
    

  render() {
    return (
        <div className="table-top-players_wrapper" style={this.props.style}>
            <table>
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Prénom/nom</th> 
                        <th>Ville</th>
                        <th>Générale</th>
                        <th>Victoires</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Smith</td>
                        <td>Issy-les-moulineaux</td>
                        <td>98</td>
                        <td>50</td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mickael Jackson</td>
                        <td>Fontainbleau</td>
                        <td>97</td>
                        <td>43</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Herve Matthoux</td>
                        <td>Paris 15ème</td>
                        <td>97</td>
                        <td>43</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Gustave Eiffel</td>
                        <td>Paris 18ème</td>
                        <td>94</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Marry Poppins</td>
                        <td>Paris 20ème</td>
                        <td>94</td>
                        <td>34</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
  }
}

export default TableTopPlayers;