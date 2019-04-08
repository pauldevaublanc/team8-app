import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';
import Cookies from  'js-cookie';


import moment from 'moment';

// Components ant-design
import { DatePicker, Select, TimePicker, Form, Radio, Input } from 'antd';
//Images
import Background from '../../img/background-home.jpg';
// Components
import Title from '../../components/Title/index';
import FooterT8 from '../../components/FooterT8/index';
import CourtList from '../../components/CourtList';
import DraftZone from '../../components/DraftZone';
import Button from '../../components/Button';

const { TextArea } = Input;

class CreateGame extends Component {

  static propTypes = {
    form: PropTypes.object
  }
  
  state ={
    games : [],
    open: false,
    active: null,
    startDate: new Date(),
    currentCourtId: null
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.addGame(values)
      }
    });
  }

  handleOpenChange = (open) => {
    this.setState({ 
      open 
    });
  }

  handleClose = () => {
    this.setState({ 
      open: false 
    });
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  addGame = (value) => {
    
    const dateFromatted = moment(value.datePicker.format('YYYY-MM-DD') + ' ' + value.timePicker.format('HH:mm'))
    
    fetch(`${config.urlApi}/games`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`,
      },
      body: JSON.stringify({
        date: dateFromatted.valueOf(),        
        description: value.description, 
        playersCounter: value.playersCounter,
        level: value.level,
        ball: value.ball,
        private: value.private,
        host: Cookies.get('myId'),
        court: this.state.currentCourtId,
        players: this.state.playersId

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

  handleSelectCourt = (currentCourtId) => {
    this.setState({
      currentCourtId: currentCourtId
    })
  }

  handleInvitePlayers = (playersId) => {
    this.setState({
      playersId: playersId
    })
  }

  render() {
    const Option = Select.Option;
    const { getFieldDecorator } = this.props.form;
    
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
                            {getFieldDecorator('datePicker', {
                              rules: [{ required: true, message: 'Choisis la date du match' }],
                            })(
                            <DatePicker 
                              allowClear={false}
                              className="large-time-picker"
                              dropdownClassName="time-picker-dropdown" 
                              placeholder="Choisis la date" 
                              format="dddd DD MMMM"/>
                              )}
                          </Form.Item>
                          <Form.Item>
                            {getFieldDecorator('timePicker', {
                              rules: [{ required: true, message: 'Choisis l\'heure du match' }],
                            })(
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
                            )}
                          </Form.Item>
                        </div>
                      </div>

                      <label>Apportes des précisions sur ton match</label>
                      <Form.Item> 
                        {getFieldDecorator('description', {
                            rules: [{ required: true, message: 'Ajoute des précisions sur ton match' }],
                          })(
                            <TextArea rows={4} placeholder="ex: objectif de la rencontre, durée du match, besoin d'equipement..."/>
                          )}
                      </Form.Item>

                      <div className="select-option_container">
                        <div style={{textAlign:'left'}}>
                          <label>Nombre de joueurs</label>
                          <Form.Item>
                            {getFieldDecorator('playersCounter', {
                              rules: [
                                { required: true, message: 'Selectionnes le nombre de joueurs' },
                              ],
                            })(
                            <Select 
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
                            )}
                          </Form.Item>
                        </div>

                        <div>
                          <label>Niveau de la rencontre</label>
                          <Form.Item>
                            {getFieldDecorator('level', {
                                rules: [
                                  { required: true, message: 'Selectionnes le niveau de jeu souhaité' },
                                ],
                              })(
                              <Select 
                                style={{ 
                                  width: 150, 
                                  display:'block', 
                                  margin:'10px auto 20px' 
                                }} 
                                dropdownClassName="styledrop">
                                <Option value="rookie">Rookie</Option>
                                <Option value="pro">Pro</Option>
                                <Option value="expert">Expert</Option>
                                <Option value="allstar">All Star</Option>
                                <Option value="halloffame">Hall of Fame</Option>
                              </Select>
                              )}
                          </Form.Item>
                        </div>
                      </div>

                      
                      <div className="select-radio_container" style={{textAlign:'left'}}>
                        <div className="select-radio_wrapper">
                          <label>Je ramène une balle?</label>
                          <div style={{justifyContent:'flex-start'}}>
                            <Form.Item>
                              {getFieldDecorator('ball', {
                                rules: [
                                  { required: true, message: 'Précise si tu ramènes une balle'},
                                ],
                              })(
                                <Radio.Group>
                                  <Radio.Button value={true}>Oui</Radio.Button>
                                  <Radio.Button value={false}>Non</Radio.Button>
                                </Radio.Group>
                              )}
                            </Form.Item>
                          </div>
                        </div>

                        <div className="select-radio_wrapper" style={{textAlign:'right'}}>
                          <label>C'est un match privé?</label>
                          <div style={{justifyContent:'flex-end', display:'flex'}}>
                            <Form.Item>
                            {getFieldDecorator('private', {
                                rules: [
                                  { required: true, message: 'Précise si le match est privé'},
                                ],
                              })(
                                <Radio.Group>
                                  <Radio.Button value={true}>Oui</Radio.Button>
                                  <Radio.Button value={false}>Non</Radio.Button>
                                </Radio.Group>
                              )}
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>


                <div className="right-form-wrapper">
                  <CourtList 
                    onChangeSelectedCourt={(selectedCourt) => this.handleSelectCourt(selectedCourt)} 
                    pageAmount={5}
                  />
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
                  <DraftZone 
                  pageAmount={4}
                    onInvitePlayers={(selectedPlayer) => this.handleInvitePlayers(selectedPlayer)}
                    inviteButton={true}
                    style={{
                      margin:"0px auto",
                      padding: "15px 0px", 
                      textAlign:'center'
                    }}/>
              </div>
              <div className="button-form-wrapper">
                <Button 
                  style={{
                    minWidth:120,
                    maxWidth: 200, 
                    margin:20
                  }} 
                  text={'Annuler'} 
                  buttonStyle={'button-transparent'}
                />
                <Button 
                  type={'submit'} 
                  onClick={this.handleSubmit} 
                  style={{
                    minWidth:120, 
                    maxWidth: 200,
                    margin:20
                  }} 
                  text={'Créer Match'} 
                  buttonStyle={'button-transparent'}
                />
              </div>
            </div>

            <FooterT8/>
          </div>
        </div>
      
     
    );
  }
}

export default Form.create({ name: 'register' })(CreateGame);