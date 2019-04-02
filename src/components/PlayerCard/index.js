import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import StarRatings from 'react-star-ratings';

// COMPONENTS
import ProfilePicture from '../ProfilePicture';
import Button from '../Button';
import PlayerModalComponent from '../../components/PlayerModal/index';

class PlayerCard extends Component {

  state = { 
    visible: false 
  }

  static propTypes = {
    id: PropTypes.string,
    username: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    grade: PropTypes.number,
    poste: PropTypes.string,
    level: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
    matchPlayed: PropTypes.number,
    wins: PropTypes.number,
    mvp: PropTypes.number,
    stars: PropTypes.number,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
}

showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
        <div className="playerCard_wrapper" style={this.props.style}>
            <div className="playerCard_left-infos">
                <div className="playerCard_grade">
                    <div>{this.props.grade}<br/><span>GEN</span></div>
                </div>
                <h3 style={{paddingTop:15}}>{this.props.poste}</h3>
                <p style={{textTransform:'capitalize', paddingBottom:15}}>{this.props.level}</p>
                
                
                <Button 
                    onClick={this.showModal}
                    text={'Plus d\'infos'} 
                    buttonStyle={'button-transparent'} 
                    style={{
                        padding: '10px 4px', 
                        margin:'10px auto 5px', 
                        fontSize:12
                    }}
                />
                
                <Button 
                    text={'Inviter'} 
                    buttonStyle={'button-transparent'} 
                    onClick={this.props.onClick}
                    style={{
                        padding: '10px 4px', 
                        margin:'5px auto 10px', 
                        fontSize:12
                    }}
                />
            </div>

            <div className="playerCard_right-infos">
                <ProfilePicture size={100} picture={this.props.picture} borderStyle={'border-small'}/>
                <div className="playerCard_name">
                    <h2>{this.props.firstName} {this.props.username}</h2>
                </div>
                <ul className="playerCard_list-stats">
                    <li>
                        <div>Matchs joués</div>
                        <div>{this.props.matchPlayed}</div>
                    </li>
                    <li>
                        <div>Victoires</div>
                        <div>{this.props.wins}</div>
                    </li>
                    <li>
                        <div>MVP</div>
                        <div>{this.props.mvp}</div>
                    </li>
                    <li>
                        <div>Fair-play</div>
                        <StarRatings
                        rating={this.props.stars}
                        starDimension="14px"
                        starSpacing="2px"
                        starEmptyColor="rgba(255, 255, 255, 0.5)"
                        starRatedColor="#EF7E4D"
                        />
                    </li>
                </ul>
            </div>
            <Modal
            title={this.props.username}
            centered={true}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <div key={42} style={{display:'flex', justifyContent: 'flex-end'}}>
                <Button 
                    key="submit" 
                    buttonStyle={'button-orange'} 
                    style={{
                    height:30, 
                    width: 100,
                    minWidth:100, 
                    padding: '5px 10px', 
                    marginLeft:15
                    }} 
                    text={'Ok'} 
                    loading={this.state.loading} 
                    onClick={this.handleOk}/>
              </div>
          ]}
            >
              <PlayerModalComponent 
                player={{
                  generalGrade:this.props.grade,
                  age:this.props.age, 
                  level:this.props.level, 
                  position:this.props.poste,
                  picture: this.props.picture,
                  description: this.props.description,
                  matchPlayed: this.props.matchPlayed,
                  mvp: this.props.mvp,
                  wins: this.props.wins,
                  fairPlay: this.props.stars,
                  city: this.props.city
                }}
              />
            </Modal>
      </div>
    );
  }
}

export default PlayerCard;