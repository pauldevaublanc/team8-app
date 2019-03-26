import React, { Component } from 'react';
import './index.css';


import moment from 'moment';


import { DatePicker, Select, TimePicker, Form, Radio, Input } from 'antd';


import Background from '../../img/background-home.jpg';
// Components
import Title from '../../components/Title/index';
import FooterT8 from '../../components/FooterT8/index';
import CourtList from '../../components/CourtList';
import DraftZone from '../../components/DraftZone';
import Button from '../../components/Button';

const { TextArea } = Input;

class CreateGame extends Component {
  
  state ={
    games : [],
    open: false,
    active: null,
    startDate: new Date(), 
  }


  handleOpenChange = (open) => {
    this.setState({ open });
  }

  handleClose = () => this.setState({ open: false })

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


  render() {
    const Option = Select.Option;
    return (
      
        
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
          <div className="main_container">
          <Title text={'Organiser un match'} style={{padding:'15px 0px 40px'}}/>
            <div className="create-game-wrapper">
              
              <h2 className="create-game_title">Informations générales</h2>
              
              
              <div className="create-game-detail-form">
              
                <div className="left-form-wrapper">
                  <h4 className="create-game_subtitle">
                    <img 
                      style={{
                        width:24, 
                        paddingRight:6
                      }} 
                      src={require(`../../img/icones/calendar.png`)} 
                      alt="match details"/>
                    Conditions du match
                  </h4>
                  
                  <Form onSubmit={this.handleSubmit}>
                    <div style={{padding:'20px 15px 9px'}}>
                      <div>
                        <label>Cliques pour choisir la date et l'heure</label>
                        <div className="select-date_input">
                          <Form.Item>
                            <DatePicker 
                              allowClear={false}
                              className="large-time-picker"
                              dropdownClassName="time-picker-dropdown" 
                              placeholder="Choisis la date" 
                              format="dddd DD MMMM"/>
                          </Form.Item>
                          <Form.Item>
                            <TimePicker
                              allowClear={false}
                              open={this.state.open}
                              onOpenChange={this.handleOpenChange}
                              addon={() => (
                                <Button style={{padding:5}} 
                                  text={'Ok'} 
                                  buttonStyle={'button-transparent'} 
                                  onClick={this.handleClose}/>
                              )}
                              className="large-time-picker"
                              popupClassName="time-picker-dropdown"
                              minuteStep={5} 
                              placeholder="Choisis l'heure"
                              format={'HH:mm'} 
                              defaultOpenValue={moment('0:00', 'HH:mm')} 
                            />
                          </Form.Item>
                        </div>
                      </div>

                      <label>Apportes des précisions sur ton match</label>
                      <Form.Item> 
                        <TextArea rows={4} placeholder="ex: objectif de la rencontre, durée du match, besoin d'equipement..."/>
                      </Form.Item>

                      <div className="select-option_container">
                        <div style={{textAlign:'left'}}>
                          <label >Nombre de joueurs</label>
                          <Form.Item>
                            <Select 
                              defaultValue="1" 
                              style={{ 
                                width: 150, 
                                display:'block', 
                                margin:'10px auto 20px' 
                              }} 
                              dropdownClassName="styledrop">
                              <Option value="1">1 vs 1</Option>
                              <Option value="2">2 vs 2</Option>
                              <Option value="3">3 vs 3</Option>
                              <Option value="4">4 vs 4</Option>
                              <Option value="5">5 vs 5</Option>
                            </Select>
                          </Form.Item>
                        </div>

                        <div>
                          <label>Niveau de la rencontre</label>
                          <Form.Item>
                            <Select 
                              defaultValue="Rookie" 
                              style={{ 
                                width: 150, 
                                display:'block', 
                                margin:'10px auto 20px' 
                              }} 
                              dropdownClassName="styledrop">
                              <Option value="Rookie">Rookie</Option>
                              <Option value="Pro">Pro</Option>
                              <Option value="Expert">Expert</Option>
                              <Option value="All Star">All Star</Option>
                              <Option value="Hall of Fame">Hall of Fame</Option>
                            </Select>
                          </Form.Item>
                        </div>
                      </div>

                      
                      <div className="select-radio_container" style={{textAlign:'left'}}>
                        <div className="select-radio_wrapper">
                          <label>Je ramène une balle?</label>
                          <div style={{justifyContent:'flex-start'}}>
                            <Form.Item>
                                <Radio.Group>
                                  <Radio.Button value={true}>Oui</Radio.Button>
                                  <Radio.Button value={false}>Non</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                          </div>
                        </div>

                        <div className="select-radio_wrapper" style={{textAlign:'right'}}>
                          <label>C'est un match privé?</label>
                          <div style={{justifyContent:'flex-end', display:'flex'}}>
                            <Form.Item>
                                <Radio.Group>
                                  <Radio.Button value={true}>Oui</Radio.Button>
                                  <Radio.Button value={false}>Non</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>


                <div className="right-form-wrapper">
                  <CourtList pageAmount={5}/>
                </div>
                  
              </div>

              <div className="bottom-form-wrapper">
                <h4 className="create-game_subtitle">
                  <img 
                    style={{
                      width:24, 
                      paddingRight:6
                    }} 
                    src={require(`../../img/icones/team.png`)} 
                    alt="teammates"/>
                  Invitation des teammates
                </h4>
                  <DraftZone style={{margin:"15px auto", textAlign:'center'}}/>
              </div>
              <div className="button-form-wrapper">
                <Button style={{minWidth:120, margin:20}} text={'Annuler'} buttonStyle={'button-transparent'}/>
                <Button style={{minWidth:120, margin:20}} text={'Creer Match'} buttonStyle={'button-transparent'}/>
              </div>
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
      
     
    );
  }
}

export default CreateGame;