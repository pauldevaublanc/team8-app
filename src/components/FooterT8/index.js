import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

class FooterT8 extends Component {

  static propTypes = {
    style: PropTypes.object,
}

  render() {
    return (
      <div className="footerT8_wrapper">
        <hr/>
        <img className="profile_logo" src={require(`../../img/logoT8.png`)} alt=""/>
      </div>
    );
  }
}

export default FooterT8;