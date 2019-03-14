import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';
import Cookies from 'js-cookie'


// Components
import PlayerCard from '../../components/PlayerCard';

class DraftZone extends Component {

  state = {
    teammates: []
  }


    static propTypes = {
        style: PropTypes.object,
    }

    getPlayers = () => {
      // requete ajax pour recuperer la listes des joueurs
      fetch(`${config.urlApi}/users`)
        .then((response) => {return response.json();})
        .then((data) => {
          this.setState({
            teammates: data
          })
      });
    }

    componentDidMount() {
      this.getPlayers();
     
    }
    

  render() {
    
    return (
        <div className="draft_wrapper" style={this.props.style}>

            {
              this.state.teammates
                .filter((user, key) => {
                  return (user._id !== Cookies.get('myId'))
                })
                .map((user, key) => {

                return (
                  <PlayerCard key={key}
                  id={user._id}
                  lastName={user.username}
                  picture={`${config.urlApi}${user.picture.url}`}
                  grade={user.generalGrade}
                  poste={user.position}
                  level={user.generalLevel}
                  age={user.age}
                  city={user.city}
                  matchPlayed={18}
                  wins={1}
                  mvp={user.mvp}
                  stars={user.fairplayGrade}
                  icon={'add.png'}/>
                )
            })
            }
            
        </div>
    );
  }
}

export default DraftZone;