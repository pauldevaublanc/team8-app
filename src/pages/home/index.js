import React, { Component } from 'react';
import './index.css';

import Typewriter from 'typewriter-effect';
import config from '../../config/index';
import Cookies from  'js-cookie';

// Images
import Background from '../../img/background-home.jpg';

// Components
import Title from '../../components/Title/index';
import IntroIcon from '../../components/IntroIcon';

import { Carousel } from 'antd';

class Home extends Component {

  state = {
    courts: [],
    users: [],
    games: []
  }
  
  
  getCourts = () => {
    fetch(`${config.urlApi}/courts`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
      .then((response) => {return response.json();})
      .then((data) => {
        this.setState({
          courts: data
        })
    });
  }

  getUsers = () => {
    fetch(`${config.urlApi}/users`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
      .then((response) => {return response.json();})
      .then((data) => {
        this.setState({
          users: data
        })
    });
  }

  getGames= () => {
    fetch(`${config.urlApi}/games`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
      .then((response) => {return response.json();})
      .then((data) => {
        this.setState({
          games: data
        })
    });
  }


  scrollOnClick() {
    window.scrollTo({
      top: window.innerHeight - 70,
      behavior: 'smooth'
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getCourts();
    this.getUsers();
    this.getGames();
  }

  render() {
    return (
      <div>
        <div className="home_wrapper">
          <div className="home_introduction-wrapper" style={{backgroundImage: `url(${Background})`}}>
            <Title text={'Bienvenue sur'} addClass={'home-subtitle'}/>
            <Title text={'Team8'}/>
            <p className="home_introduction-text">Le seul club de basket qui te permet de choisir,</p>
            <div className="home_introduction-typing-text">
              <Typewriter
                options={{
                strings: ['ton terrain', 
                  'l\'heure et la date du match', 
                  'tes teammates', 
                  'tes adversaires', 
                  'le niveau de la rencontre', 
                  'le nombre de joueurs', 
                  'le MVP du match'],
                autoStart: true,
                loop: true,
                cursorClassName : 'cursor'
                }}
              />
            </div>
            <div className="home_introduction-arrow" onClick={this.scrollOnClick.bind(this)}>
              <img src={require(`../../img/icones/icon-arrow-down.png`)} alt="arrow-down"/>
            </div>
          </div>

          <div className="home_presentation-wrapper">
              <IntroIcon 
                number={'1'} 
                text={'Inscris toi en créant ton profil, seul ou avec des amis, pour commencer ta saison'}
              />
              <IntroIcon 
                number={'2'} 
                text={'Organise ou rejoins des matchs dans toute l\'ile de France, contre des joueurs de ton niveau'}
              />
              <IntroIcon 
                number={'3'} 
                text={'Reussis tes matchs pour obtenir les meilleures notes et te hisser vers le haut du classement'}
              />
              <IntroIcon 
                number={'4'} 
                text={'Evalue tes teammates et fait toi évaluer après match, pour améliorer tes statistiques'}
              />
          </div>

          <div className="home_news-wrapper">
            <h2>Les prochains matchs</h2>

            <Carousel>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
                
          </div>

          <div className="home_counter">
              <div><span>{this.state.courts.length}</span> <br/>Terrains disponibles</div>
              <div><span>{this.state.users.length}</span> <br/>Teammates inscrits</div>
              <div><span>{this.state.games.length}</span> <br/>Matchs joués</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;