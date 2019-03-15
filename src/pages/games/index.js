import React, { Component } from 'react';
import './index.css';

import config from '../../config/index';

import { Link } from 'react-router-dom';

import Background from '../../img/background-home.jpg';
// Components
import Title from '../../components/Title/index';
import FindGame from '../../components/FindGame/index';
import FooterT8 from '../../components/FooterT8/index';
import MyGames from '../../components/MyGames';

class Games extends Component {
  state ={
    games : [],
    active: 0
  }

  getGames = () => {
    fetch(`${config.urlApi}/games`)
      .then((response) => {return response.json();})
      .then((data) => {
        this.setState({
          games: data
        })
    });
  }


  handleClick = (key) => {
    this.setState({ 
        active: key 
    });
}


  componentDidMount() {
    this.getGames()
  }

  menuElements = ['Mes Matchs', 'Rechercher match', 'Invitations'];


  render() {
    return (
      <div>
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
          <div className="main_container">
            <Title text={'Ma saison'} style={{padding:'15px 0px 35px'}}/>

            <div className="tabs-games-container">
              <div className="tabs-games-menu" style={{justifyContent:'center', paddingBottom: 10}}>
                  {
                    this.menuElements.map((element, key) => {
                      return(
                        <Link 
                        to={`/games/${element.replace(/\s+/, "").toLocaleLowerCase()}`} 
                        key={key} 
                        style={{
                          width:'100%'
                        }}>
                          <div 
                          className={`tab ${this.props.match.params.list === element.replace(/\s+/, "").toLocaleLowerCase() ? 'active' : ''}`}  
                          onClick={this.handleClick.bind(this, key)}>
                            <h3>{element}</h3>
                          </div>
                        </Link>
                      )
                    })
                  }        
                </div>
                {
                  this.props.match.params.list === 'mesmatchs' ? <MyGames/> : this.props.match.params.list === 'recherchermatch' ? <FindGame/> : ''
                }
              </div>
              <FooterT8/>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Games;