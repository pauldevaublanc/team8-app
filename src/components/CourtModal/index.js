import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import PropTypes from 'prop-types';
import Cookies from  'js-cookie';


import { Icon, Rate } from 'antd';

// Components
import CourtInfos from '../../components/CourtInfos/index';
import Button from '../../components/Button/index';

class CourtModal extends Component {

    static propTypes = {
        
    }
  
    state = {
        
    }




  render() {
    return ( 
        <div className="court-modal_wrapper">
           <div className="court-modal_left">
                horaire d'ouverture
           </div>
           <div className="court-modal_right">
            <p>hello</p>
           </div>
        </div>
    );
  }
}

export default CourtModal;