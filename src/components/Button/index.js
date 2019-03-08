import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

class Button extends Component {

  static propTypes = {
    text: PropTypes.string,
    buttonStyle: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
}

  render() {
    return (
      <div className={`btn ${ this.props.buttonStyle }`} style={this.props.style} onClick={this.props.onClick}>
        {this.props.text}
      </div>
    );
  }
}

export default Button;