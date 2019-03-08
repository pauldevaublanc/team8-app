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
    isMobile: false
  }

  handleClick = () => {
    this.setState({
        menuOpen: !this.state.menuOpen
    })
  }

  handleScroll = () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop){
          this.setState({isTop})
      }
  }

  componentDidMount() {
      document.addEventListener('scroll', this.handleScroll); 
  }
  
  componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
  }


  render() {
    return (
      <div className={`navbar_wrapper ${this.state.isTop ? '': 'navbar_bgBlack'}`} style={this.props.style}>
        <div className="navbar_logo">
          <NavLink to={"/"}><img src={require(`../../img/logoT8.png`)} alt=""/></NavLink>
        </div>
        
          {
            !Cookies.get('token') ? 
            <div className="navbar_links">
              <NavLink className="noMobile" activeClassName={'activeLink'} to={"/"} exact><p>Accueil</p></NavLink>
              <NavLink activeClassName={'active-button'} to={"/authentification"} exact><Button text={'Se connecter'} buttonStyle={'button-orange'}/></NavLink>
            </div> :
            <div className="navbar_links">
              <NavLink className="noMobile" activeClassName={'activeLink'} to={"/"} exact><p>Accueil</p></NavLink>
              <NavLink activeClassName={'activeLink'} to={"/profile"} exact><p>Profil</p></NavLink>
              <NavLink activeClassName={'activeLink'} to={"/games"} exact><p>Saison</p></NavLink>
              <NavLink activeClassName={'activeLink'} to={"/teammates/mesteammates"} exact><p>Teammates</p></NavLink>
              <NavLink activeClassName={'active-button'} to={"/createGame"} exact><Button text={'Organiser un match'} buttonStyle={'button-orange'}/></NavLink>
            </div>
          }
        
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
            <NavLink activeClassName={'active-link_mobile'} to={"/profile"} exact><li style={{borderBottom: '1px solid var(--white)'}}>Profil</li></NavLink>
            <NavLink activeClassName={'active-link_mobile'} to={"/games"} exact><li style={{borderBottom: '1px solid var(--white)'}}>Saison</li></NavLink>
            <NavLink activeClassName={'active-link_mobile'} to={"/teammates/mesteammates"}><li style={{borderBottom: '1px solid var(--white)'}}>Teammates</li></NavLink>
            <NavLink activeClassName={'active-link_mobile'} to={"/createGame"} exact><li>Organiser un match</li></NavLink>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;