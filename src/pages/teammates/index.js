import React, { Component } from 'react';
import './index.css';

// Images
import Background from '../../img/background-home.jpg';

// Components
import Navbar from '../../components/Navbar/index';
import Title from '../../components/Title/index';
import FooterT8 from '../../components/FooterT8/index';
import MesTeammates from '../../components/MesTeammates';
import DraftZone from '../../components/DraftZone';
import TableTopPlayers from '../../components/TableTopPlayers';

class Teammates extends Component {

  state = {
    active: 0
  }

  handleClick = (key) => {
      this.setState({ 
          active: key 
      });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  menuElements = ['Mes Teammates', 'Draft Zone', 'Top Players']

  render() {
    return (
      <div>
        <Navbar/>
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
          <div className="main_container">
            <Title 
            text={'Teammates'} 
            style={{
              fontSize: 55, 
              lineHeight:'60px', 
              padding:'15px 0px 35px'
            }}/>
            <div className="tabs-games-menu" style={{justifyContent:'center', paddingBottom: 10}}>
              {
                this.menuElements.map((element, key) => {
                  return(
                    <div 
                    key={key} 
                    className={`tab ${this.state.active === key ? 'active' : ''}`}  
                    onClick={this.handleClick.bind(this, key)} 
                    >
                      <h3>{element}</h3>
                    </div>
                  )
                })
              }        
            </div>
            {
              this.state.active === 0 ? <MesTeammates/> : this.state.active === 1 ?<DraftZone/> : <TableTopPlayers/>
            }
            <FooterT8/>
          </div>
        </div>
      </div>
    );
  }
}

export default Teammates;