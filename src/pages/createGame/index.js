import React, { Component } from 'react';
import './index.css';

import config from '../../config/index';

import Cookies from  'js-cookie';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import Background from '../../img/background-home.jpg';
// Components
import Title from '../../components/Title/index';
import FooterT8 from '../../components/FooterT8/index';

class CreateGame extends Component {
  
  state ={
    games : [],
    startDate: new Date()
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

  handleChange(date) {
    this.setState({
      startDate: date
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
            <div className="create-game-wrapper">
              <div>
                <h3>Details</h3>
              </div>
              
              <form className="create-game-detail-form">
                <div className="select-date_wrapper">
                  <label>Clique pour choisir la date et l'heure du match</label>
                  <div className="select-date_input">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange.bind(this)}
                        timeCaption="Date"
                        minDate={new Date()}
                        showDisabledMonthNavigation
                        dateFormat="dd/MM/yyyy"
                        className="input-create-game"  
                    />
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange.bind(this)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      dateFormat="h:mm"
                      timeCaption="Heure"
                      className="input-create-game"
                    />
                  </div>
                </div>
                <div className="select-description_wrapper">
                  <label>Apportes des précisions sur ton match</label>
                  <textarea placeholder="ex: durée du match, besoin d'equipement..." maxLength="155" rows="3" type="text" className="input-create-game"></textarea>
                </div>
                
                
                <div className="select-radio_wrapper">
                  <label>Ramènes tu la balle pour le match</label>
                  <div className="select-radio" style={{justifyContent:'center'}}>
                    <div style={{position:'relative'}}>
                      <input type="radio" name="drone"></input>
                      <label>Oui</label>
                    </div>
                    <div style={{position:'relative'}}>
                      <input type="radio" name="drone"></input>
                      <label>Non</label>
                    </div>
                  </div>
                </div>



                <div>
                  <label>Nombre de joueurs</label>
                  <select name="places">
                    <option value="1">1 vs 1</option>
                    <option value="2">2 vs 2</option>
                    <option value="3">3 vs 3</option>
                    <option value="4">4 vs 4</option>
                    <option value="5">5 vs 5</option>
                  </select>
                </div>
                <div>
                  <label>Niveau de la rencontre</label>
                  <select name="level">
                    <option value="Rookie">Rookie</option>
                    <option value="Pro">Pro</option>
                    <option value="Expert">Expert</option>
                    <option value="All Star">All Star</option>
                    <option value="Hall of Fame">Hall of Fame</option>
                  </select>
                </div>
              </form>
            </div>
           
            
            
            
            
            
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