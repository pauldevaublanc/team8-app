import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';



// Components
import UserComponent from '../../components/User/index';

class UserContainer extends Component {

    static propTypes = {
      userId: PropTypes.string,
    }

    state = {
        user: null
      }
    
    getUserDetail = () => {
        const id = this.props.userId;
        
        fetch(`${config.urlApi}/users/${id}`)
        .then((response) => {return response.json();})
        .then((data) => {
            this.setState({
            user: data
            })
        });
    }
    
    componentDidMount() {
        this.getUserDetail();
    }



  render() {
    
    return (
        <div>
          { this.state.user &&
            <UserComponent user={ this.state.user } />
          }
          
        </div>
   
    );
  }
}

export default UserContainer;