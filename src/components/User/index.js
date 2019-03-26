import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';

import { Link } from 'react-router-dom';


// Components
import ProfilePicture from '../../components/ProfilePicture/index';
import StarRatings from 'react-star-ratings';
import Title from '../../components/Title/index';
import Button from '../../components/Button/index';
import TableGames from '../../components/TableGames/index';
// import ActionPlayerIcon from '../../components/ActionPlayerIcon/index';

class UserComponent extends Component {

    static propTypes = {
        user: PropTypes.object,
    }

  render() {
    return (
        
    <div>
        {/* <ActionPlayerIcon icon={'cross.png'} style={{right:20, top:15}} styleImg={{width:25}}/> */}
        <Title text={'Mon Joueur'} style={{padding:'15px 0px 35px'}}/>
        
        
            
            
            <div className="user_description-wrapper">
                <div className="user_info-wrapper">
                    <ProfilePicture size={150} picture={`${config.urlApi}${this.props.user.picture.url}`} borderStyle={'border-small'}/>
                    <div className="user_description-container">
                        <h2>{this.props.user.username}</h2>
                        <p className="user_description-text">{this.props.user.description}</p>
                        <div className="user_button-wrapper">
                            <Link 
                            to={"/teammates"}>
                                <Button 
                                text={'Rechercher des teammates'} 
                                buttonStyle={'button-transparent'} 
                                style={{
                                    width:'98%', 
                                    margin:'0px 5px 0px 0px'
                                }}/>
                            </Link>
                            <Link 
                            to={"/games"}>
                                <Button 
                                text={'Rechercher un match'} 
                                buttonStyle={'button-transparent'} 
                                style={{
                                    width:'98%', 
                                    margin:'0px 5px'
                                }}/>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="user_results-wrapper">
                <p><span>5</span><br/>Victoires</p>
                <p><span>{this.props.user.mvp}</span><br/>MVP</p>
                <p><span>2</span><br/>Matchs</p>
                </div>
            </div>
            
            
            <div className="user_infos-table-wrapper">
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
                            <div>Terrains pratiqués</div>
                            <div>{this.props.user.friends.length}</div>
                        </li>
                        <li>
                            <div>Fair play</div>
                            {/*DOCS!!!-> https://www.npmjs.com/package/react-star-ratings */}
                            <StarRatings
                                rating={this.props.user.fairplayGrade}
                                starDimension="17px"
                                starSpacing="2px"
                                starEmptyColor="rgba(255, 255, 255, 0.5)"
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
        </div>
    );
  }
}

export default UserComponent;