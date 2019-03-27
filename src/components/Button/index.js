import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

class Button extends Component {

  static propTypes = {
    text: PropTypes.string,
    buttonStyle: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    style: PropTypes.object,
}

  render() {
    return (
      <button type={this.props.type} className={`btn ${ this.props.buttonStyle }`} style={this.props.style} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;