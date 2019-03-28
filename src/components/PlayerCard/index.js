import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StarRatings from 'react-star-ratings';

// COMPONENTS
import ProfilePicture from '../ProfilePicture';
import Button from '../Button';

class PlayerCard extends Component {

  static propTypes = {
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
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

  render() {
    return (
        <div className="playerCard_wrapper" style={this.props.style}>
            <div className="playerCard_left-infos">
                <div className="playerCard_grade">
                    <div>{this.props.grade}<br/><span>GEN</span></div>
                </div>
                <h3>{this.props.poste}</h3>
                <p style={{textTransform:'capitalize'}}>{this.props.level}</p>
                <p>{this.props.age} ans</p>
                <p style={{textTransform:'capitalize'}}>{this.props.city}</p>
                <Link to={`/user/${this.props.id}`}>
                    <Button 
                        text={'Plus d\'infos'} 
                        buttonStyle={'button-transparent'} 
                        style={{
                            padding: '10px 4px', 
                            margin:'10px auto 5px', 
                            fontSize:12
                        }}
                    />
                </Link>
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
                    <h2>{this.props.firstName} {this.props.lastName}</h2>
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
                        // rating={this.state.rating}
                        // changeRating={this.changeRating}
                        rating={this.props.stars}
                        starDimension="14px"
                        starSpacing="2px"
                        starEmptyColor="rgba(255, 255, 255, 0.5)"
                        // starHoverColor= "#EF7E4D"
                        starRatedColor="#EF7E4D"
                        />
                    </li>
                </ul>
            </div>
      </div>
    );
  }
}

export default PlayerCard;