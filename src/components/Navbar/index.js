import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

import Button from './../Button/index';

class Navbar extends Component {

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
      <div className={`navbar_wrapper ${this.state.isTop ? '': 'navbar_bgBlack'}`}>
        <div className="navbar_logo">
          <NavLink to={"/"}><img src={require(`../../img/logo-t8.png`)} alt=""/></NavLink>
        </div>
        <div className="navbar_links">
            <NavLink className="noMobile" activeClassName={'activeLink'} to={"/"} exact><p>Accueil</p></NavLink>
            <NavLink activeClassName={'activeLink'} to={"/profile"} exact><p>Mon joueur</p></NavLink>
            <NavLink activeClassName={'activeLink'} to={"/games"} exact><p>Ma saison</p></NavLink>
            <NavLink activeClassName={'activeLink'} to={"/teammates"} exact><p>Mes team8</p></NavLink>
            <Button text={'Organiser un match'} buttonStyle={'button-orange'}/>
        </div>
        <div className={`navbar_line ${this.state.isTop ? '': 'navbar_full-line'}`}></div>
      </div>
    );
  }
}

export default Navbar;