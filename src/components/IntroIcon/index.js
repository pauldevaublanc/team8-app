import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

import Background from '../../img/basketball.png';

class IntroIcon extends Component {

  static propTypes = {
    text: PropTypes.string,
    number: PropTypes.string
}

  render() {
    return (
      <div className="IntroIcon_wrapper" > 
        <div className='IntroIcon_img-wrapper' style={{backgroundImage: `url(${Background})`}}>
          <p className="IntroIcon_number">{this.props.number}</p>
        </div>
        <p className={"IntroIcon_text"}>{this.props.text}</p>
      </div>
    );
  }
}

export default IntroIcon;