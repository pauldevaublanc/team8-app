import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import Cookies from  'js-cookie';

import moment from 'moment';


import { DatePicker, Select, TimePicker, Button } from 'antd';


import Background from '../../img/background-home.jpg';
// Components
import Title from '../../components/Title/index';
import FooterT8 from '../../components/FooterT8/index';
import CourtInfos from '../../components/CourtInfos/index';

class CreateGame extends Component {
  
  state ={
    games : [],
    open: false,
    courts : [],
    active: null,
    startDate: new Date()
  }

  handleOpenChange = (open) => {
    this.setState({ open });
  }

  handleClose = () => this.setState({ open: false })

  

  getCourts = () => {
    fetch(`${config.urlApi}/courts`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    })
      .then((response) => {return response.json();})
      .then((data) => {
        this.setState({
          courts: data
        })
    });
  }


  // getGames = () => {
  //   fetch(`${config.urlApi}/games`)
  //     .then((response) => {return response.json();})
  //     .then((data) => {
  //       this.setState({
  //         games: data
  //       })
  //   });
  // }

  // addGame = () => {
  //   fetch(`${config.urlApi}/games`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${Cookies.get('token')}`,
  //     },
  //     body: JSON.stringify({
  //       description: this.refs['descriptionRef'].value, 
  //     })
  //   })
  //   .then((response) => { return response.json(); })
  //   .then((data) => {
  //     const newGames = this.state.games
  //     newGames.push(data)
  //     this.setState({
  //       games: newGames
  //     })
      
  //   });
  // }

  // handleChangeTitle = (e) => {
  //   this.setState({
  //     description: e.target.value
  //   });
  // }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  componentDidMount() {
    // this.getGames()
    this.getCourts()
  }



  render() {
    const Option = Select.Option;
    return (
      <div>
        
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
          <div className="main_container">
          <Title text={'Organiser un match'} style={{fontSize: 55, lineHeight:'60px', padding:'15px 0px 35px'}}/>
            <div className="create-game-wrapper">
              
              <h3>Informations générales</h3>
              
              
              <form className="create-game-detail-form">
               
                <div className="left-form-wrapper">
                  <div style={{marginBottom: 30}}>
                    <label>Cliques pour choisir la date et l'heure du match</label>
                    <div className="select-date_input">
                      <DatePicker 
                        allowClear={false}
                        style={{width:210}} 
                        className="large-time-picker"
                        dropdownClassName="time-picker-dropdown" placeholder="Choisis la date" format="dddd DD MMMM"/>
                      <TimePicker
                        allowClear={false}
                        open={this.state.open}
                        onOpenChange={this.handleOpenChange}
                        addon={() => (
                          <Button size="small" type="primary" onClick={this.handleClose}>
                            Ok
                          </Button>
                        )}
                        className="large-time-picker"
                        popupClassName="time-picker-dropdown"
                        minuteStep={5} 
                        placeholder="Choisis l'heure"
                        format={'HH:mm'} 
                        defaultOpenValue={moment('0:00', 'HH:mm')} 
                      />
                    </div>
                  </div>
                  <label>Apportes des précisions sur ton match</label>
                  <textarea 
                    placeholder="ex: objectif de la rencontre, durée du match, besoin d'equipement..." 
                    maxLength="155" 
                    rows="3" 
                    type="text" 
                    className="input-create-game">
                  </textarea>

                  <div className="select-option_container">
                    <div>
                      <label>Nombre de joueurs</label>
                      <Select defaultValue="1 vs 1" style={{ width: 150, display:'block', margin:'10px auto 20px' }} dropdownClassName="styledrop">
                        <Option value="1">1 vs 1</Option>
                        <Option value="2">2 vs 2</Option>
                        <Option value="3">3 vs 3</Option>
                        <Option value="4">4 vs 4</Option>
                        <Option value="5">5 vs 5</Option>
                      </Select>
                    </div>
                    <div>
                      <label>Niveau de la rencontre</label>
                      <Select defaultValue="Rookie" style={{ width: 150, display:'block', margin:'10px auto 20px' }} dropdownClassName="styledrop">
                        <Option value="Rookie">Rookie</Option>
                        <Option value="Pro">Pro</Option>
                        <Option value="Expert">Expert</Option>
                        <Option value="All Star">All Star</Option>
                        <Option value="Hall of Fame">Hall of Fame</Option>
                      </Select>
                    </div>
                  </div>

                  
                  <div className="select-radio_container">
                    <div className="select-radio_wrapper">
                      <label>Je ramène une balle?</label>
                      <div className="select-radio">
                        <div style={{position:'relative'}}>
                          <input type="radio" name="ball" value={true}></input>
                          <label>Oui</label>
                        </div>
                        <div style={{position:'relative'}}>
                          <input type="radio" name="ball" value={false}></input>
                          <label>Non</label>
                        </div>
                      </div>
                    </div>
                    <div className="select-radio_wrapper" >
                      <label style={{float:'right'}}>C'est un match privé?</label>
                      <div className="select-radio" style={{float:'right'}}>
                        <div style={{position:'relative'}}>
                          <input type="radio" name="private" value={true}></input>
                          <label>Oui</label>
                        </div>
                        <div style={{position:'relative'}}>
                          <input type="radio" name="private" value={false}></input>
                          <label>Non</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="right-form-wrapper">
                  <h4>Choisis ton terrain</h4>
                  <div className="courts_container">
                    {
                      this.state.courts.map((court, key) => {
                        return (
                          <CourtInfos
                            key={key}
                            pictureSize={90}
                            addClass={'small'}
                            address={court.address}
                            city={court.city}
                            postalCode={court.postalCode}
                            transport={court.transportStation}
                            courtPicture={court.courtPicture.url}
                            hoop={court.hoop}
                            gradeCourt={court.gradeCourt}
                            gradeCrowd={court.gradeCrowd}
                            style={{paddingBottom:10}}
                          />
                          
                        )
                      })
                    }
                   
                  </div>
                </div>

              </form>
              <h3>Invitez des teammates</h3>
            </div>
            
           
            
            
            
            
            
            {/* <div className="games_wrapper">
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
            </div> */}




            <FooterT8/>
          </div>
        </div>
      </div>
     
    );
  }
}

export default CreateGame;