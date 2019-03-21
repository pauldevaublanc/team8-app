import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import config from '../../config/index';
import Cookies from  'js-cookie';


import { Modal } from 'antd';


// Components
import CourtModalComponent from '../../components/CourtModal/index';
import Button from '../../components/Button/index';

class CourtModalContainer extends Component {

    static propTypes = {
      courtId: PropTypes.string,
      visible: PropTypes.bool,
      cancel: PropTypes.func,
      handleOk: PropTypes.func,
    }

    state = {
        court: null,
        loading: false,
      }

      
    
    getCourtDetail = (courtId) => {
        const id = courtId;
        
        fetch(`${config.urlApi}/courts/${id}`, {
            headers: {
              'Authorization': `Bearer ${Cookies.get('token')}`
            }
          })
        .then((response) => {return response.json();})
        .then((data) => {
            this.setState({
            court: data
            })
        });
    }

    

    componentWillReceiveProps(nextProps) {
      if (nextProps.courtId !== this.props.courtId) {
        this.getCourtDetail(nextProps.courtId)
      }
    }




  render() {
    
    return (
        <div>
          { this.state.court &&
            <Modal
            visible={this.props.visible}
            centered={true}
            title={this.state.court.name}
            onOk={this.props.handleOk}
            onCancel={this.props.cancel}
            footer={[
                <div key={42} style={{display:'flex', justifyContent: 'flex-end'}}>
                  <Button 
                      key="back" 
                      buttonStyle={'button-orange'} 
                      style={{
                      height:30, 
                      minWidth:100, 
                      padding: '5px 10px'
                      }} 
                      text={'Annuler'} 
                      onClick={this.props.cancel}/>
                  <Button 
                      key="submit" 
                      buttonStyle={'button-orange'} 
                      style={{
                      height:30, 
                      minWidth:100, 
                      padding: '5px 10px', 
                      marginLeft:15
                      }} 
                      text={'Confirmer'} 
                      loading={this.state.loading} 
                      onClick={this.props.handleOk}/>
                </div>
            ]}
            >
                <CourtModalComponent court={ this.state.court }/>
            </Modal>
          }
        </div>
   
    );
  }
}

export default CourtModalContainer;


