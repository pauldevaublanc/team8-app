import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

class Pills extends Component {

  static propTypes = {
    available: PropTypes.bool,
    style: PropTypes.object,
}

  render() {
    return (
      <div className="pills_wrapper" style={this.props.style}>
        <div className="pills" style={{backgroundColor: this.props.available ? '#4BB543' : '#ff6961'}}></div>
        <p>{this.props.available ? 'Places disponibles' : 'Complet'}</p>
      </div>
    );
  }
}

export default Pills;