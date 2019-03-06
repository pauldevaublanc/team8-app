import React, { Component } from 'react';
import './index.css';

// Images
import Background from '../../img/background-home.jpg';
// Components
import Navbar from '../../components/Navbar/index';
import UserContainer from '../../containers/User/index';
import FooterT8 from '../../components/FooterT8/index';


class User extends Component {


  render() {
    return (
      <div>
        <Navbar/>
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
            <div className="main_container"> 
              <UserContainer userId={ this.props.match.params.userId }/>
              <FooterT8/>
            </div>
        </div>
      </div>
    );
  }
}

export default User;