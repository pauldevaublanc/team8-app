import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from  'js-cookie';

import Button from './../Button/index';

class Navbar extends Component {
  
  static propTypes = {
    style2: PropTypes.object,
    style: PropTypes.object,
  }

  state = {
    menuOpen: false,
    windowWidth: window.innerWidth,
    isTop: true,
  }

  handleClick = () => {
    this.setState({
        menuOpen: !this.state.menuOpen
    })
  }

  closeNavbar = () => {
    this.setState({
        menuOpen: false
    })
  }

  handleWindowWidth = () => {
    this.setState({ 
      windowWidth: window.innerWidth 
    });
    if (this.state.windowWidth >=680 ){
      this.setState({
        menuOpen: false
      })
    }
  }

  handleScroll = () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop){
          this.setState({isTop})
      }
  }

  componentDidMount() {
      document.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleWindowWidth);
  }
  
  componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
      document.removeEventListener('resize', this.handleWindowWidth);
  }


  render() {
    return (
      <div className={`navbar_wrapper ${this.state.isTop ? '': 'navbar_bgBlack'}`} style={this.props.style}>
        <div className="navbar_logo">
          <NavLink onClick={this.closeNavbar} to={"/"}><img src={require(`../../img/logoT8.png`)} alt=""/></NavLink>
        </div>
        
          {
            !Cookies.get('token') ? 
            <div>
            </div> :
            <div className="navbar_links">
              <NavLink className="noMobile" activeClassName={'activeLink'} to={"/"} exact><p>Accueil</p></NavLink>
              <NavLink activeClassName={'activeLink'} to={"/profile"} exact><p>Profil</p></NavLink>
              <NavLink activeClassName={'activeLink'} to={"/games"} exact><p>Saison</p></NavLink>
              <NavLink activeClassName={'activeLink'} to={"/teammates/mesteammates"} exact><p>Teammates</p></NavLink>
              <NavLink activeClassName={'active-button'} to={"/createGame"} exact><Button text={'Organiser un match'} buttonStyle={'button-orange'}/></NavLink>
            </div>
          }
        
        
            {
              !Cookies.get('token') ? 
              <div>
              <NavLink activeClassName={'active-button'} to={"/authentification"} exact><Button text={'Se connecter'} buttonStyle={'button-orange margin-nav'}/></NavLink>
              </div> :
              <div>
              <div 
                  onClick={this.handleClick} 
                  data={this.state} 
                  className={`burgerMenuWrapper ${this.state.menuOpen ? 'open' : ''}`}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
              </div>
              <div className={`navbar_line ${this.state.isTop ? '': 'navbar_full-line'}`} style={this.props.style2}>
              </div>
              <div className={`navbar-dropdown_wrapper ${this.state.menuOpen ? 'dropdown-visible' : ''}`}>
              <ul>
                <NavLink 
                  activeClassName={'activeLink'} 
                  to={"/profile"} 
                  exact>
                    <li 
                      style={{
                        borderBottom: '1px solid var(--white)'
                      }}
                      onClick={this.closeNavbar}>Profil
                    </li>
                  </NavLink>
                <NavLink 
                  activeClassName={'activeLink'} 
                  to={"/games"} 
                  exact>
                    <li 
                      style={{
                        borderBottom: '1px solid var(--white)'
                      }} 
                      onClick={this.closeNavbar}>Saison
                    </li>
                </NavLink>
                <NavLink 
                  activeClassName={'activeLink'} 
                  to={"/teammates/mesteammates"}>
                    <li 
                      style={{
                        borderBottom: '1px solid var(--white)'
                      }}  
                      onClick={this.closeNavbar}>
                      Teammates
                    </li>
                </NavLink>
                <NavLink 
                  activeClassName={'activeLink'} 
                  to={"/createGame"} 
                  exact 
                  onClick={this.closeNavbar}>
                  <li>Organiser un match
                  </li>
                </NavLink>
              </ul>
              </div>
              </div>
            }
            
          
        
      </div>
    );
  }
}

export default Navbar;