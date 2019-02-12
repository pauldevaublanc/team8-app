import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

class Button extends Component {

  static propTypes = {
    text: PropTypes.string,
    buttonStyle: PropTypes.string,
}

  render() {
    return (
      <div className={`btn ${ this.props.buttonStyle }`}>
        {this.props.text}
      </div>
    );
  }
}

export default Button;