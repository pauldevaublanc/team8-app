import React, { Component } from 'react';
import './index.css';

import Typewriter from 'typewriter-effect';

import config from '../../config/index';

import Navbar from '../../components/Navbar/index';
import Title from '../../components/Title/index';

import Background from '../../img/background-home.jpg';
import IntroIcon from '../../components/IntroIcon';
import GameCard from '../../components/GameCard';

class Home extends Component {
  state ={
    users : []
  }


  getPlayers = () => {
    // requete ajax pour recuperer la listes des joueurs
    fetch(`${config.urlApi}/users`)
      .then((response) => {return response.json();})
      .then((data) => {
        this.setState({
          users: data
        })
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
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
            <div className="home_introduction-arrow">
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
                text={'Evalue tes teammates et fait toi évaluer après match, pour améliorer tes statistiques'}
              />
              <IntroIcon 
                number={'4'} 
                text={'Reussi tes matchs pour obtenir les meilleures notes et te hisser vers le haut du classement'}
              />
          </div>

          <div className="home_news-wrapper">
            <h2>Les prochains matchs</h2>
            <GameCard 
              gameDay={'Lundi'} 
              gameMonth={'23 septembre'} 
              gameHour={'18:00'} 
              userName={'Jean-Pierre'}
              picture={'lebron.jpg'}
              numberPlayers={'4'}
              gameLocation={'Paris 16'}/>
          </div>

          <h2>Liste des joueurs</h2>
          <button onClick={this.getPlayers}>Récuperer liste des joueurs en ajax</button>
          <ul>
            {
              this.state.users.map((user, key) => {
                return (
                  <li key={key}>{user.name} / {user.age}</li>
                )
            })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;