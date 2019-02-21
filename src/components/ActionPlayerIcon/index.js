import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

class ActionPlayerIcon extends Component {

  static propTypes = {
    icon: PropTypes.string,
    style: PropTypes.object,
    styleImg: PropTypes.object,
}

  render() {
    return (
      <div className="actionPlayerIcon_wrapper" style={this.props.style}>
        <img src={require(`../../img/icones/${this.props.icon}`)} alt="" style={this.props.styleImg}/>
      </div>
    );
  }
}

export default ActionPlayerIcon;