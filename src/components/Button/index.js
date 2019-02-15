import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

class Button extends Component {

  static propTypes = {
    text: PropTypes.string,
    buttonStyle: PropTypes.string,
    style: PropTypes.object,
}

  render() {
    return (
      <div className={`btn ${ this.props.buttonStyle }`} style={this.props.style}>
        {this.props.text}
      </div>
    );
  }
}

export default Button;