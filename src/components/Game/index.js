import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';




// Components

import Title from '../../components/Title/index';
import CourtPreview from '../CourtPreview';


class GameComponent extends Component {

    static propTypes = {
        game: PropTypes.object,
    }


  render() {
    return (  
        <div>
           <Title text={'Mon match'} style={{fontSize: 55, lineHeight:'60px', padding:'15px 0px 35px'}}/>
           <CourtPreview numberTeamPlayer={this.props.game.JoueursEquipe}/>
        </div>
    );
  }
}

export default GameComponent;