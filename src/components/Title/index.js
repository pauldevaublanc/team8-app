import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

class Title extends Component {

  static propTypes = {
    text: PropTypes.string,
    addClass: PropTypes.string,
    style: PropTypes.object,
}

  render() {
    return (
      <div className={`title ${this.props.addClass}`} style={this.props.style}>
        {this.props.text}
      </div>
    );
  }
}

export default Title;