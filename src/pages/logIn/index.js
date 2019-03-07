import React, { Component } from 'react';
import './index.css';


// import config from '../../config/index';

// Images
import Background from '../../img/background-home.jpg';

// Components
import Navbar from '../../components/Navbar/index';
import Title from '../../components/Title/index';
import FooterT8 from '../../components/FooterT8/index';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

class LogIn extends Component {



  render() {
    return (
    <div>
        <Navbar/>
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
            <div className="main_container"> 
                <Title text={'Let\'s play'} style={{padding:'15px 0px 35px'}}/>
                <div className="separator-logo_wrapper">
                    <div className="log-in_separator separator-logo">t<span>8</span></div>
                    <div className="separator-logo-line"></div>
                </div>
                
                <div className="log-in_wrapper">

                
                    <div className="form_wrapper">
                        <p>Déjà inscrit ?<br/>Connecte-toi !</p>
                        <Input inputType={'text'} icon={'user.png'} placeholder={'Pseudo...'} inputName={'pseudo'}/>
                        <Input inputType={'password'} icon={'padlock.png'} placeholder={'Mot de passe...'} inputName={'password'}/>
                        <Button text={'Connexion'} buttonStyle={'button-orange'} style={{width:'70%', margin:'20px auto 0px'}}/>
                    </div>
                    <div className="log-in_separator">ou</div>
                    <div className="form_wrapper">
                        <p>Pas inscrit ?<br/>Débute ta carrière</p>
                        <Input inputType={'email'} icon={'envelope.png'} placeholder={'Email...'} inputName={'email'}/>
                        <Input inputType={'text'} icon={'user.png'} placeholder={'Pseudo...'} inputName={'pseudo'}/>
                        <Input inputType={'password'} icon={'padlock.png'} placeholder={'Mot de passe...'} inputName={'password'}/>
                        <Input inputType={'password'} icon={'checked.png'} placeholder={'Confirmation mot de passe'} inputName={'password'}/>
                        <Button text={'Inscription'} buttonStyle={'button-orange'} style={{width:'70%', margin:'20px auto 0px'}}/>
                    </div>
                </div>
                <FooterT8/>
            </div>
        </div>
    </div>
    );
  }
}

export default LogIn;