import React, { Component } from 'react';
import './index.css';

import config from '../../config/index';

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
      <div className="games_wrapper">
        <h2>Liste des matchs</h2>
        <ul onLoad={this.getGames()}>
          {
            this.state.games.map((game, key) => {
              return (
                <li key={key}>{game.title} / {game.date}</li>
              )
          })
          }
        </ul>
        <h2>Ajouter match</h2>
        <form>
          <input type="text" placeholder="titre" name="titre" value={this.state.title} onChange={this.handleChangeTitle}/>
          <input type="text" placeholder="date" name="date" value={this.state.date} onChange={this.handleChangeDate}/>
          <button type="button" value="Submit" onClick={this.addGame}>Envoyer</button>
        </form>
      </div>
    );
  }
}

export default Games;