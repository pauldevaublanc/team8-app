import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import Cookies from  'js-cookie';

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

    state ={
        valueIdentifier: '',
        valuePassword: '',
        error: false,
        errorMessage: '',
      }

    onChangeIdentifier(value){
        this.setState({
            valueIdentifier: value
        });
    }

    onChangePassword(value){
        this.setState({
            valuePassword: value
        });
    }

    login = () => {
        fetch(`${config.urlApi}/auth/local`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            identifier: this.state.valueIdentifier,
            password: this.state.valuePassword,  
          })
        })
        .then((response) => { return response.json(); })
        .then((data) => {
            if (data.statusCode !== 200 ){
                this.setState({
                    error: true,
                    errorMessage: data.message
                });
                setTimeout(
                    function() {
                        this.setState({
                            error: false
                        });
                    }.bind(this), 5000
                );
            } 
            Cookies.set('token', data.jwt);
        });
        
    }


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
                           {
                             this.state.error ? <div className="error-message" style={{display:`${this.state.error}`}}>{this.state.errorMessage}</div> : null
                           } 
                            <p>Déjà inscrit ?<br/>Connecte-toi !</p>
                            <Input inputType={'text'} icon={'user.png'} placeholder={'Pseudo...'} inputName={'pseudo'} onChange={e => this.onChangeIdentifier(e.target.value)}/>
                            <Input inputType={'password'} icon={'padlock.png'} placeholder={'Mot de passe...'} inputName={'password'} onChange={e => this.onChangePassword(e.target.value)}/>
                            <Button text={'Connexion'} buttonStyle={'button-orange'} style={{width:'70%', margin:'20px auto 0px'}} onClick={this.login}/>
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