import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';
import Cookies from 'js-cookie'


// Components
import PlayerCard from '../../components/PlayerCard';

class MyTeammates extends Component {

  state = {
    friends : [],
  }

  static propTypes = {
      style: PropTypes.object,
  }

    
  
    getFriends = () => {
      fetch(`${config.urlApi}/users/me`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
        .then((response) => {return response.json();})
        .then((data) => {
          this.setState({
            friends: data.friends
          })
      });
    }

    componentDidMount() {
      this.getFriends();
    }
    

  render() {
    return (
        <div className="mes-teammates_wrapper" style={this.props.style}>
            {
              this.state.friends.map((friend, key) => {
                return(
                  <PlayerCard key={key}
                  id={friend._id}
                  lastName={friend.username}
                  picture={`${config.urlApi}${friend.picture.url}`}
                  grade={friend.generalGrade}
                  poste={friend.position}
                  level={friend.generalLevel}
                  age={friend.age}
                  city={friend.city}
                  matchPlayed={18}
                  wins={1}
                  mvp={friend.mvp}
                  stars={friend.fairplayGrade}
                  icon={'trash.png'}/>
                )
              })
            }
        </div>
    );
  }
}

export default MyTeammates;