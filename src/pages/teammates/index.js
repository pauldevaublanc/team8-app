import React, { Component } from 'react';
import './index.css';

import Background from '../../img/background-home.jpg';
// Components
import Navbar from '../../components/Navbar/index';
import Title from '../../components/Title/index';
import FooterT8 from '../../components/FooterT8/index';
import PlayerCard from '../../components/PlayerCard';

class Teammates extends Component {



  render() {
    return (
      <div>
        <Navbar/>
        <div className="main_wrapper" style={{backgroundImage: `url(${Background})`}}>
          <div className="main_container">
            <Title text={'Mes Teammates'} style={{fontSize: 55, lineHeight:'60px', padding:'15px 0px 35px'}}/>
            <div className="teammates_wrapper">
              <PlayerCard
                lastName={'deschamps'}
                firstName={'didier'}
                picture={'didier.jpg'}
                grade={82}
                poste={'mj'}
                level={'All Star'}
                age={28}
                city={'aubervilliers'}
                matchPlayed={7}
                wins={5}
                mvp={2}
                stars={2.4}/>

                <PlayerCard
                lastName={'james'}
                firstName={'lebron'}
                picture={'lebron.jpg'}
                grade={99}
                poste={'AF'}
                level={'Hall of fame'}
                age={30}
                city={'New york'}
                matchPlayed={24}
                wins={15}
                mvp={10}
                stars={4.4}/>

                <PlayerCard
                lastName={'pagnol'}
                firstName={'marcel'}
                picture={'dunk.jpg'}
                grade={23}
                poste={'A'}
                level={'rookie'}
                age={18}
                city={'Paris 19eme'}
                matchPlayed={2}
                wins={0}
                mvp={0}
                stars={5}/>

                <PlayerCard
                lastName={'pagnol'}
                firstName={'marcel'}
                picture={'dunk.jpg'}
                grade={23}
                poste={'A'}
                level={'rookie'}
                age={18}
                city={'Paris 19eme'}
                matchPlayed={2}
                wins={0}
                mvp={0}
                stars={5}/>

                <PlayerCard
                lastName={'james'}
                firstName={'lebron'}
                picture={'lebron.jpg'}
                grade={99}
                poste={'AF'}
                level={'Hall of fame'}
                age={30}
                city={'New york'}
                matchPlayed={24}
                wins={15}
                mvp={10}
                stars={4.4}/>

                <PlayerCard
                lastName={'deschamps'}
                firstName={'didier'}
                picture={'didier.jpg'}
                grade={82}
                poste={'mj'}
                level={'All Star'}
                age={28}
                city={'aubervilliers'}
                matchPlayed={7}
                wins={5}
                mvp={2}
                stars={2.4}/>
                
            </div>
            <FooterT8/>
          </div>
        </div>
      </div>
    );
  }
}

export default Teammates;