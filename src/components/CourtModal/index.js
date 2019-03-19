import React, { Component } from 'react';
import './index.css';

import GoogleMapReact from 'google-map-react';
import { Rate, Icon, Carousel } from 'antd';


const MyCursor = () => (
    <div style={{
      color: '#EF7E4D', 
      transform: 'translate(-50%, -50%)',
      fontSize: 26
    }}>
      <Icon type="environment" />
    </div>
  );


class CourtModal extends Component {

    static defaultProps = {
        center: {
          lat: 48.866667,
          lng: 2.333333
        },
        zoom: 12
      };
  
    

    render() {
        return ( 
        <div className="court-modal_wrapper">
            <div className="court-modal_left">
                <div>Terrain</div>
                <Rate disabled allowHalf defaultValue={5} className="rating-antd"/>
                <div style={{paddingTop:12}}>Affluence</div>
                <Rate disabled allowHalf defaultValue={5} className="rating-antd" character={<Icon type="user"/>}/>
                <div style={{paddingTop:12}}>Paniers</div>
                <div className="court-modal_orange-text">3</div>
                <div style={{paddingTop:12}}>Ouverture</div>
                <div className="court-modal_orange-text">7:45 - 18:00</div>
                <div style={{paddingTop:12}}>Couvert</div>
                <div className="court-modal_orange-text">Non</div>
                <div style={{paddingTop:12}}>Nocture</div>
                <div className="court-modal_orange-text">Non</div>
                <div style={{paddingTop:12}}>Gratuit</div>
                <div className="court-modal_orange-text">Oui</div>
                
            </div>
            
            <div className="court-modal_right">
                <Carousel effect="fade" autoplay>
                    <div><img className="carousel-img" src={require(`../../img/equipe.jpg`)} alt=""/></div>
                    <div><img className="carousel-img" src={require(`../../img/lebron.jpg`)} alt=""/></div>
                    <div><img className="carousel-img" src={require(`../../img/raptors.jpg`)} alt=""/></div>
                </Carousel>
                <div className="court-modal_location">
                    <div><Icon type="environment" /> 28 rue Troyon, 92310, Sèvres</div>
                    <p><img style={{width:20, paddingRight:4}} src={require(`../../img/icones/subway.png`)} alt="M"/>Pont de Sèvres</p>
                    
                </div>
                <div className="google-map_wrapper">

                
                    <GoogleMapReact 
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}>
                        <MyCursor
                            lat={this.props.center.lat}
                            lng={this.props.center.lng}
                        />
                    </GoogleMapReact>    
                </div>
                </div>
            </div>
        );
    }
}

export default CourtModal;