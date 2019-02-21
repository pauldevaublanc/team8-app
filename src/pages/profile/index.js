import React, { Component } from 'react';
import './index.css';

import { Link } from 'react-router-dom';


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

class Profile extends Component {


  componentDidMount() {
    window.scrollTo(0, 0);
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
            
            <ProfilePicture size={100} picture={'lebron.jpg'} borderStyle={'border-small'}/>
            
            
            <div className="profile_description-wrapper">
              <h2>lebron james</h2>
              <p className="profile_description-text">Je suis plutot disponible les weekends, ready to win bitch!!!</p>
              <div className="profile_button-wrapper">
              <Link to={"/teammates"}><Button text={'Ajouter des teammates'} buttonStyle={'button-transparent'} style={{width:'96%', margin:'10px 5px'}}/></Link>
              <Link to={"/games"}><Button text={'Rechercher un match'} buttonStyle={'button-transparent'} style={{width:'96%', margin:'10px 5px'}}/></Link>
            </div>
              <div className="profile_results-wrapper">
                <p><span>5</span><br/>Victoires</p>
                <p><span>3</span><br/>MVP</p>
                <p><span>2</span><br/>Matchs annulés</p>
              </div>
            </div>
            
            
            <div className="profile_infos-wrapper">
              <div className="profile_infos-user">
                <ul>
                  <li>
                    <div>Niveau</div>
                    <div>Rookie</div>
                  </li>
                  <li>
                    <div>Age</div>
                    <div>26 ans</div>
                  </li>
                  <li>
                    <div>Ville</div>
                    <div>Sèvres</div>
                  </li>
                  <li>
                    <div>Poste</div>
                    <div>Meneur de jeu</div>
                  </li>
                </ul>
              </div>
              <div className="profile_infos-grade">
                <div>42<br/><span>GEN</span></div>
              </div>
              <div className="profile_infos-games">
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
                    <div>36</div>
                  </li>
                  <li>
                    <div>Fair play</div>
                    {/*DOCS!!!-> https://www.npmjs.com/package/react-star-ratings */}
                    <StarRatings
                      // rating={this.state.rating}
                      // changeRating={this.changeRating}
                      rating={3.42}
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

            <div className="profile_games-wrapper">
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

export default Profile;