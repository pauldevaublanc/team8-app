import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';

import { Link } from 'react-router-dom';

// Images
import Background from '../../img/background-home.jpg';


// Components
import Navbar from '../../components/Navbar/index';
import ProfilePicture from '../../components/ProfilePicture/index';
import StarRatings from 'react-star-ratings';
import Title from '../../components/Title/index';
import Button from '../../components/Button/index';
import TableGames from '../../components/TableGames/index';
import FooterT8 from '../../components/FooterT8/index';
import ActionPlayerIcon from '../../components/ActionPlayerIcon/index';

class UserComponent extends Component {

    static propTypes = {
        user: PropTypes.object,
    }
  // state= {
  //   rating: 3.4
  // }

  // changeRating = ( newRating, name ) => {
  //   this.setState({
  //     rating: newRating
  //   });
  // }

  render() {
    return (
        
    <div>
        <Navbar/>
            <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
                <div className="main_container">

                <ActionPlayerIcon icon={'edit.png'} style={{right:20, top:15}} styleImg={{width:30}}/>
                <Title text={'Mon Joueur'} style={{fontSize: 55, lineHeight:'60px', padding:'15px 0px 35px'}}/>
                
                <ProfilePicture size={180} picture={`${config.urlApi}${this.props.user.picture.url}`} borderStyle={'border-small'}/>
                
                
                <div className="user_description-wrapper">
                    <h2>{this.props.user.username}</h2>
                    <p className="user_description-text">{this.props.user.description}</p>
                    <div className="user_button-wrapper">
                    <Link 
                    to={"/teammates"}>
                        <Button 
                        text={'Ajouter des teammates'} 
                        buttonStyle={'button-transparent'} 
                        style={{
                            width:'96%', 
                            margin:'10px 5px'
                        }}/>
                    </Link>
                    <Link 
                    to={"/games"}>
                        <Button 
                        text={'Rechercher un match'} 
                        buttonStyle={'button-transparent'} 
                        style={{
                            width:'96%', 
                            margin:'10px 5px'
                        }}/>
                    </Link>
                </div>
                    <div className="user_results-wrapper">
                    <p><span>5</span><br/>Victoires</p>
                    <p><span>{this.props.user.mvp}</span><br/>MVP</p>
                    <p><span>2</span><br/>Matchs annulés</p>
                    </div>
                </div>
                
                
                <div className="user_infos-wrapper">
                    <div className="user_infos-user">
                    <ul>
                        <li>
                        <div>Niveau</div>
                        <div>{this.props.user.generalLevel}</div>
                        </li>
                        <li>
                        <div>Age</div>
                        <div>{this.props.user.age} ans</div>
                        </li>
                        <li>
                        <div>Ville</div>
                        <div>{this.props.user.city}</div>
                        </li>
                        <li>
                        <div>Poste</div>
                        <div style={{textTransform:'uppercase'}}>{this.props.user.position}</div>
                        </li>
                    </ul>
                    </div>
                    <div className="user_infos-grade">
                    <div>{this.props.user.generalGrade}<br/><span>GEN</span></div>
                    </div>
                    <div className="user_infos-games">
                    <ul>
                        <li>
                        <div>Matchs joués</div>
                        <div>20</div>
                        </li>
                        <li>
                        <div>Matchs organisés</div>
                        <div>5</div>
                        </li>
                        <li>
                        <div>Teammates</div>
                        <div>{this.props.user.friends.length}</div>
                        </li>
                        <li>
                        <div>Fair play</div>
                        {/*DOCS!!!-> https://www.npmjs.com/package/react-star-ratings */}
                        <StarRatings
                            // rating={this.state.rating}
                            // changeRating={this.changeRating}
                            rating={this.props.user.fairplayGrade}
                            starDimension="17px"
                            starSpacing="2px"
                            starEmptyColor="rgba(255, 255, 255, 0.5)"
                            // starHoverColor= "#EF7E4D"
                            starRatedColor="#EF7E4D"
                        />
                        </li>
                    </ul>
                    </div>
                </div>

                <div className="user_games-wrapper">
                    <h2>Mes derniers matchs</h2>
                    <TableGames/>
                </div>
                <FooterT8/>
            </div>
        </div>
    </div>
    );
  }
}

export default UserComponent;