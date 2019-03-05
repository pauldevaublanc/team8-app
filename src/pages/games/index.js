import React, { Component } from 'react';
import './index.css';

import config from '../../config/index';

import { Link } from 'react-router-dom';

import Background from '../../img/background-home.jpg';
// Components
import Navbar from '../../components/Navbar/index';
import Title from '../../components/Title/index';
import FindGame from '../../components/FindGame/index';
import FooterT8 from '../../components/FooterT8/index';

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
        <Navbar/>
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
          <div className="main_container">
          <Title text={'Ma saison'} style={{padding:'15px 0px 35px'}}/>
           
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
                      className={`tab ${this.state.active === key ? 'active' : ''}`}  
                      onClick={this.handleClick.bind(this, key)}>
                        <h3>{element}</h3>
                      </div>
                    </Link>
                  )
                })
              }        
            </div>
            {
              this.state.active === 0 ? <FindGame/> : this.state.active === 1 ?<FindGame/> : <FindGame/>
            }
           
      




            <FooterT8/>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Games;