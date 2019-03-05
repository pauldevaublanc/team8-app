import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';


import StarRatings from 'react-star-ratings';

import config from '../../config/index';




// Components
import ProfilePicture from '../ProfilePicture';


class CourtInfos extends Component {

    static propTypes = {
        address: PropTypes.string,
        city: PropTypes.string,
        transport: PropTypes.string,
        hoop: PropTypes.number,
        courtPicture: PropTypes.string,
        gradeCourt: PropTypes.number,
        gradeCrowd: PropTypes.number,
        style: PropTypes.object,
    }


  render() {
    return (  
      <div style={this.props.style}>
        <div className="court-infos_wrapper">
          <div className="court-infos_adress">
            <ProfilePicture 
              size={120} 
              borderStyle={'border-small'} 
              picture={`${config.urlApi}${this.props.courtPicture}`}
              style={{paddingRight: 15}}
            />
            <div>
              <div>{this.props.address}</div>
              <div>{this.props.city}</div>
              <p><img style={{width:20, paddingRight:4}} src={require(`../../img/icones/subway.png`)} alt="M"/>{this.props.transport}</p>
            </div>
          </div>
          <div className="court-infos_detail">
            <div style={{paddingBottom: 5}}>
              Nombre de panier: <span>{this.props.hoop}</span>
            </div>
            <div>
              Terrain: <StarRatings
                rating={this.props.gradeCourt}
                starDimension="17px"
                starSpacing="2px"
                starEmptyColor="rgba(255, 255, 255, 0.5)"
                starRatedColor="#EF7E4D"
              />
            </div>
            <div>
              Affluence: <StarRatings
                rating={this.props.gradeCrowd}
                starDimension="17px"
                starSpacing="2px"
                starEmptyColor="rgba(255, 255, 255, 0.5)"
                starRatedColor="#EF7E4D"
              />
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default CourtInfos;