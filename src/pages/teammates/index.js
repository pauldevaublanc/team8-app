import React, { Component } from 'react';
import './index.css';

import { Link } from 'react-router-dom';



// Images
import Background from '../../img/background-home.jpg';

// Components
import Title from '../../components/Title/index';
import FooterT8 from '../../components/FooterT8/index';
import MyTeammates from '../../components/MyTeammates';
import DraftZone from '../../components/DraftZone';
import TableTopPlayers from '../../containers/TableTopPlayers';

class Teammates extends Component {

  state = {
    active: 0
  }


  handleClick = (key) => {
      this.setState({ 
          active: key 
      });
  }


  menuElements = ['Mes Teammates', 'Draft Zone', 'Top Players'];

  render() {

    return (
      <div>
        
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
          <div className="main_container">
            <Title 
            text={'Teammates Zone'} 
            style={{
              padding:'15px 0px 35px'
            }}/>
            <div className="tabs-games-container">
              <div className="tabs-games-menu" style={{justifyContent:'center', paddingBottom: 10}}>
                {
                  this.menuElements.map((element, key) => {
                    return(
                      <Link 
                      to={`/teammates/${element.replace(/\s+/, "").toLocaleLowerCase()}`} 
                      key={key} 
                      style={{
                        width:'100%'
                      }}>
                        <div 
                        className={`tab ${this.props.match.params.panel === element.replace(/\s+/, "").toLocaleLowerCase() ? 'active' : ''}`}  
                        onClick={this.handleClick.bind(this, key)}>
                          <h3>{element}</h3>
                        </div>
                      </Link>
                    )
                  })
                }     
                
              </div>
              {
                this.props.match.params.panel === 'mesteammates' ? <MyTeammates/> : this.props.match.params.panel === 'draftzone' ?<DraftZone/> : <TableTopPlayers/>
              }   
            </div>
            
            <FooterT8/>
          </div>
        </div>
      </div>
    );
  }
}

export default Teammates;