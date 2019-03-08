import React, { Component } from 'react';
import './index.css';

import config from '../../config/index';

import Cookies from  'js-cookie';


import Background from '../../img/background-home.jpg';
// Components
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
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`,
      },
      body: JSON.stringify({
        description: this.refs['descriptionRef'].value, 
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


  componentDidMount() {
    this.getGames()
  }



  render() {
    return (
      <div>
        
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
          <div className="main_container">
          <Title text={'Organiser un match'} style={{fontSize: 55, lineHeight:'60px', padding:'15px 0px 35px'}}/>
           
           
            <div className="games_wrapper">
              <ul>
                {
                  this.state.games.map((game, key) => {
                    return (
                      <li key={key}>{game.description}</li>
                    )
                })
                }
              </ul>
              <h2>Organiser un match</h2>
              <form>
                <input type="text" placeholder="description" name="description" ref={'descriptionRef'}/>
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