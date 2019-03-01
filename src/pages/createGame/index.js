import React, { Component } from 'react';
import './index.css';

import config from '../../config/index';

import { Link } from 'react-router-dom';

import Background from '../../img/background-home.jpg';
// Components
import Navbar from '../../components/Navbar/index';
import Title from '../../components/Title/index';
import FooterT8 from '../../components/FooterT8/index';

class CreateGame extends Component {
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



  render() {
    return (
      <div>
        <Navbar/>
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
          <div className="main_container">
          <Title text={'Organiser un match'} style={{fontSize: 55, lineHeight:'60px', padding:'15px 0px 35px'}}/>
           
           
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

export default CreateGame;