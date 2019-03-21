import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';
import { Rate, Icon, Carousel } from 'antd';

import config from '../../config/index';


const MyCursor = () => (
    <div style={{
      color: '#EF7E4D', 
      transform: 'translate(-50%, -50%)',
      fontSize: 26
    }}>
      <Icon type="environment" />
    </div>
  );


class CourtModalComponent extends Component {

    static propTypes = {
        court: PropTypes.object,
    }

    static defaultProps = {
        center: {
          lat: 48.8587177291641,
          lng: 2.3421980147936665
        },
        zoom: 10
      };
  
    

    render() {
        return ( 
        <div className="court-modal_wrapper">
            <div className="court-modal_left">
                <div>Terrain</div>
                <Rate disabled allowHalf value={this.props.court.gradeCourt} className="rating-antd"/>
                <div style={{paddingTop:12}}>Affluence</div>
                <Rate disabled allowHalf value={this.props.court.gradeCrowd} className="rating-antd" character={<Icon type="user"/>}/>
                <div style={{paddingTop:12}}>Paniers</div>
                <div className="court-modal_orange-text">{this.props.court.hoop}</div>
                <div style={{paddingTop:12}}>Ouverture</div>
                <div className="court-modal_orange-text">{this.props.court.open}</div>
                <div style={{paddingTop:12}}>Couvert</div>
                <div className="court-modal_orange-text">{this.props.court.covered ? 'Oui' : 'Non'}</div>
                <div style={{paddingTop:12}}>Nocture</div>
                <div className="court-modal_orange-text">{this.props.court.nocturnal ? 'Oui' : 'Non'}</div>
                <div style={{paddingTop:12}}>Gratuit</div>
                <div className="court-modal_orange-text">{this.props.court.free ? 'Oui' : 'Non'}</div>
            </div>
            
            <div className="court-modal_right">
                <Carousel effect="fade" autoplay>
                    {
                        this.props.court.pictures.map((picture, key) => {
                            return(
                                <div key={key}><img className="carousel-img" src={`${config.urlApi}${picture.url}`} alt=""/></div>
                            )  
                        })
                        
                    }
                </Carousel>
                <div className="court-modal_location">
                    <div><Icon type="environment"/> {this.props.court.address}, {this.props.court.zipCode} {this.props.court.city}</div>
                    <p>
                        <img 
                            style={{
                                width:16, 
                                paddingRight:4
                            }} 
                            src={require(`../../img/icones/subway.png`)} 
                            alt="M"/>
                        {this.props.court.transportStation}
                    </p>
                    
                </div>
                <div className="google-map_wrapper">

                
                    <GoogleMapReact 
                        bootstrapURLKeys={{ key: 'AIzaSyA6zqFf4Va0LuezFO0Xjxt-iFSjSoO7VhM' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}>
                        <MyCursor
                            lat={this.props.court.lat}
                            lng={this.props.court.lng}
                        />
                    </GoogleMapReact>    
                </div>
                </div>
            </div>
        );
    }
}

export default CourtModalComponent;