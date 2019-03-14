import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

import { Rate, Icon } from 'antd';

import config from '../../config/index';




// Components
import ProfilePicture from '../ProfilePicture';


class CourtInfos extends Component {

    static propTypes = {
        pictureSize: PropTypes.number,
        address: PropTypes.string,
        city: PropTypes.string,
        postalCode: PropTypes.string,
        transport: PropTypes.string,
        hoop: PropTypes.number,
        courtPicture: PropTypes.string,
        gradeCourt: PropTypes.number,
        gradeCrowd: PropTypes.number,
        addClass: PropTypes.string,
        onClick: PropTypes.func,
        style: PropTypes.object,
    }


  render() {
    return (  
      <div className={this.props.addClass} style={this.props.style} onClick={this.props.onClick}>
        <div className="court-infos_wrapper">
          <div className="court-infos_adress">
            <ProfilePicture 
              size={this.props.pictureSize} 
              borderStyle={'border-small'} 
              picture={`${config.urlApi}${this.props.courtPicture}`}
              style={{paddingRight: 15}}
            />
            <div>
              <div>{this.props.address}</div>
              <div>{this.props.postalCode}, {this.props.city}</div>
              <p><img style={{width:20, paddingRight:4}} src={require(`../../img/icones/subway.png`)} alt="M"/>{this.props.transport}</p>
            </div>
          </div>
          <div className="court-infos_detail">
            <div>
              Nombre de panier: <span>{this.props.hoop}</span>
            </div>
            <div className="rating">
              Terrain:<Rate disabled allowHalf defaultValue={this.props.gradeCourt} className="rating-antd"/>
            </div>
            <div className="rating">
              Affluence:<Rate disabled allowHalf defaultValue={this.props.gradeCrowd} className="rating-antd" character={<Icon type="user"/>}/>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default CourtInfos;