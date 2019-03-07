import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

// import config from '../../config/index';



// Components


class Input extends Component {
    
    static propTypes = {
        icon: PropTypes.string,
        inputType: PropTypes.string,
        inputName: PropTypes.string,
        placeholder: PropTypes.string,
        style: PropTypes.object,
    }


  render() {
    return (
        <div className="input-wrapper" style={this.props.style}>
            <div className="input_icon-wrapper">
                <div className="arrow-right"></div>
                <img src={require(`../../img/icones/${this.props.icon}`)} alt=""/>
            </div>
            <input type={this.props.inputType} name={this.props.inputName} placeholder={this.props.placeholder}></input>
        </div>
    );
  }
}

export default Input;