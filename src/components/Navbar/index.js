import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

import Button from './../Button/index';

class Navbar extends Component {
  
  static propTypes = {
    style2: PropTypes.object,
    style: PropTypes.object,
  }

    state = {
        isTop: true
    }

    handleScroll = () => {
        const isTop = window.scrollY < 80;
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
        <div className="navbar_links">
            <NavLink className="noMobile" activeClassName={'activeLink'} to={"/"} exact><p>Accueil</p></NavLink>
            <NavLink activeClassName={'activeLink'} to={"/profile"} exact><p>Profil</p></NavLink>
            <NavLink activeClassName={'activeLink'} to={"/games"} exact><p>Saison</p></NavLink>
            <NavLink activeClassName={'activeLink'} to={"/teammates/mesteammates"} exact><p>Teammates</p></NavLink>
            <NavLink activeClassName={'active-button'} to={"/createGame"} exact><Button text={'Organiser un match'} buttonStyle={'button-orange'}/></NavLink>
        </div>
        <div className={`navbar_line ${this.state.isTop ? '': 'navbar_full-line'}`} style={this.props.style2}></div>
      </div>
    );
  }
}

export default Navbar;