import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

class ProfilePicture extends Component {

  static propTypes = {
    picture: PropTypes.string,
    size: PropTypes.number,
    borderStyle: PropTypes.string,
    style: PropTypes.object
}

  render() {
    return (
      <div className={`profilePicture_wrapper ${this.props.borderStyle}`} style={{width:this.props.size, height:this.props.size}}>
        <img src={require(`../../img/${this.props.picture}`)} alt=""/>
      </div>
    );
  }
}

export default ProfilePicture;