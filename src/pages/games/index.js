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

  addGame = () => {
    fetch(`${config.urlApi}/games`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: this.refs['descriptionRef'].value, 
        city: this.refs['cityRef'].value
      })
    })
    .then((response) => { return response.json(); })
    .then((data) => {
      const newGames = this.state.games
      newGames.push(data)
      this.setState({
        games: newGames
      })
      
    });
  }

  handleClick = (key) => {
    this.setState({ 
        active: key 
    });
}

  handleChangeTitle = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  handleChangeDate = (e) => {
    this.setState({
      city: e.target.value
    
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
          <Title text={'Ma saison'} style={{fontSize: 55, lineHeight:'60px', padding:'15px 0px 35px'}}/>
           
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
           
           
            <div className="games_wrapper">
              <ul>
                {
                  this.state.games.map((game, key) => {
                    return (
                      <li key={key}>{game.description} / {game.city}</li>
                    )
                })
                }
              </ul>
              <h2>Organiser un match</h2>
              <form>
                <input type="text" placeholder="description" name="description" ref={'descriptionRef'}/>
                <input type="text" placeholder="city" name="city" ref={'cityRef'}/>
                <button type="button" value="Submit" onClick={this.addGame}>Envoyer</button>
              </form>
            </div>




            <FooterT8/>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Games;