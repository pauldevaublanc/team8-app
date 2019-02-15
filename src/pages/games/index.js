import React, { Component } from 'react';
import './index.css';

import config from '../../config/index';

import Background from '../../img/background-home.jpg';
// Components
import Navbar from '../../components/Navbar/index';
import Title from '../../components/Title/index';
import FooterT8 from '../../components/FooterT8/index';

class Games extends Component {
  state ={
    games : []
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
    fetch(`${config.urlApi}/games/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title, 
        date: this.state.date
      })
    })
    .then((response) => { return response.json(); })
    .then((data) => {
      this.setState({
        games: data
      })
    });
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleChangeDate = (e) => {
    this.setState({
      date: e.target.value
    
    });
  }


  render() {
    return (
      <div>
        <Navbar/>
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
          <div className="main_container">
          <Title text={'Ma saison'} style={{fontSize: 55, lineHeight:'60px', padding:'15px 0px 35px'}}/>
            <div className="games_wrapper">
              <ul onLoad={this.getGames()}>
                {
                  this.state.games.map((game, key) => {
                    return (
                      <li key={key}>{game.title} / {game.date}</li>
                    )
                })
                }
              </ul>
              <h2>Organiser un match</h2>
              <form>
                <input type="text" placeholder="titre" name="titre" value={this.state.title} onChange={this.handleChangeTitle}/>
                <input type="text" placeholder="date" name="date" value={this.state.date} onChange={this.handleChangeDate}/>
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