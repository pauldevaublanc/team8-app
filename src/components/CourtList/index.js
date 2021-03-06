import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import PropTypes from 'prop-types';
import Cookies from  'js-cookie';


import { Icon } from 'antd';

// Components
import CourtInfos from '../../components/CourtInfos/index';
import Button from '../../components/Button/index';
import CourtModalContainer from '../../containers/CourtModal';

class CourtList extends Component {

    static propTypes = {
        pageAmount : PropTypes.number,
        onChangeSelectedCourt: PropTypes.func
    }
  
    state = {
        courts : [],
        active: null,
        currentPage: 0,
        buttonLoadMore: true,
        searchMenuOpen: false,
        searchMenuClicked: false,
        searchValue: null,
        visible: false,
        idCourt: null
    }

  getPage = (pageNumber) => {
    const pageSize = this.props.pageAmount
    fetch(`${config.urlApi}/courts?_start=${pageNumber * pageSize}&_limit=${pageSize}`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    })
      .then((response) => {return response.json();})
      .then((data) => {
        const newCourts = [
          ...this.state.courts,
          ...data
        ]
        this.setState({
          courts: newCourts,
          buttonLoadMore: data.length === pageSize
        })
    });
  }

  getSearchCourt = (value) => {
    fetch(`${config.urlApi}/courts?zipCode_containss=${value}`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    })
      .then((response) => {return response.json();})
      .then((searchCourts) => {
        this.setState({ courts: searchCourts })
    });
  }


  //////// MODAL////////
  showModal = (id) => {
    this.setState({
      visible: true,
      idCourt: id
    });
  }

  handleOk = (currentCourtId) => {

    this.setState({ 
      visible: false,
      idCourt: currentCourtId
    });

    this.props.onChangeSelectedCourt(this.state.idCourt)
    
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }
  ////////////////////////// 

  handleSubmit = () => {
      this.getSearchCourt(this.refs['zipCodeRef'].value);
      this.setState({
        searchMenuOpen: false,
        buttonLoadMore: false
      })
    }

  loadNextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
    this.getPage(this.state.currentPage)
  }

  handleOpenSearchMenu(){
    this.refs.courtsList.scrollTo({
      top: this.refs.courtsList.innerHeight - 10,
      behavior: 'smooth'
    });
    this.setState({
      searchMenuOpen: true,
      searchMenuClicked: true
    })
  }

  handleCloseSearchMenu(){
    this.setState({
      searchMenuOpen: false
    })
  }

  componentDidMount() {
    this.getPage(this.state.currentPage)
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }

  render() {
    return ( 
        <div>
            <div className="courts_container_header">
              <h4>
                <img 
                style={{
                  width:25, 
                  paddingRight:6
                }} 
                src={require(`../../img/icones/basketball-court.png`)} 
                alt="adress court"/>
                Selection du terrain
              </h4>
              <Icon onClick={()=>this.handleOpenSearchMenu()} type="search"/>
            </div>
            <div className="courts_container" ref={'courtsList'}>
              <div style={{background:'var(--gradientGray)'}} className={`courts_selector_wrapper ${this.state.searchMenuOpen ? 'animation-slideDown' : this.state.searchMenuClicked===true ? 'animation-slideUp' : ''}`}>
                <div className="courts_selector_input">
                  <label>Entre le code postal</label>
                  <input type='number' placeholder="ex: 75015" className='input-create-game' ref={'zipCodeRef'}></input>
                </div>
                <div className="courts_selector_action">
                
                  <Icon 
                    onClick={()=>this.handleCloseSearchMenu()} 
                    type="close"/>
                  <Button 
                    onClick={()=>this.handleSubmit()} 
                    buttonStyle={'button-transparent'} 
                    style={{
                      height:30, 
                      padding: '5px 10px'
                    }} 
                    text={'Rechercher'}/>
                </div>
              </div>
                {
                  this.state.courts.map((court, key) => {
                    return (
                      <CourtInfos
                      key={key}
                      pictureSize={90}
                      addClass={`small ${court._id === this.state.idCourt ? 'courtSelected' : 'courtNotSelected'}`}
                      address={court.address}
                      city={court.city}
                      zipCode={court.zipCode}
                      transport={court.transportStation}
                      mainPicture={court.mainPicture.url}
                      hoop={court.hoop}
                      gradeCourt={court.gradeCourt}
                      gradeCrowd={court.gradeCrowd}
                      style={{marginBottom:10}}
                      onClick={()=>this.showModal(court._id)}
                      />
                    )
                  })
                }
                {
                  this.state.buttonLoadMore && 
                  <div 
                    onClick={this.loadNextPage} 
                    className="button-show-more">
                    voir plus
                  </div>
                }
                
                  <CourtModalContainer 
                    handleOk={()=>this.handleOk(this.state.idCourt)} 
                    cancel={this.handleCancel} 
                    visible={this.state.visible} 
                    courtId={ this.state.idCourt }
                  />
            </div>
        </div>
    );
  }
}

export default CourtList;