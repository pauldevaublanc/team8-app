import React, { Component } from 'react';
import './index.css';


// Components
import Navbar from '../../components/Navbar/index';
import UserContainer from '../../containers/User/index';


class User extends Component {


  render() {
    return (
      <div>
        <Navbar/>
        <UserContainer userId={ this.props.match.params.userId }/>
      </div>
    );
  }
}

export default User;