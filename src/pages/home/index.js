import React, { Component } from 'react';
import './index.css';

import Typewriter from 'typewriter-effect';
// import config from '../../config/index';

// Images
import Background from '../../img/background-home.jpg';

// Components
import Title from '../../components/Title/index';
import IntroIcon from '../../components/IntroIcon';
import GameCard from '../../components/GameCard';

class Home extends Component {


  scrollOnClick() {
    window.scrollTo({
      top: window.innerHeight - 70,
      behavior: 'smooth'
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
            <div className="home_news-container">
                <GameCard 
                gameDay={'Dimanche'} 
                gameMonth={'12 avril'} 
                gameHour={'12:55'} 
                userName={'Didier'}
                picture={'didier.jpg'}
                numberPlayers={'1'}
                gameLocation={'Sèvres'}
                availablePlace={true}/>
              </div>
          </div>

          <div className="home_counter">
              <div><span>104</span> <br/>Teammates inscrits</div>
              <div><span>344</span> <br/>matchs joués</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;