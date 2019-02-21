import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';


// Components
import PlayerCard from '../../components/PlayerCard';

class DraftZone extends Component {

    static propTypes = {
        style: PropTypes.object,
    }
    

  render() {
    return (
        <div className="draft_wrapper" style={this.props.style}>
            <PlayerCard
            lastName={'james'}
            firstName={'lebron'}
            picture={'lebron.jpg'}
            grade={75}
            poste={'AI'}
            level={'Pro'}
            age={30}
            city={'Issy-les-moulineaux'}
            matchPlayed={18}
            wins={1}
            mvp={1}
            stars={3.5}
            icon={'add.png'}/>

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
            stars={2.4}
            icon={'add.png'}/>

            <PlayerCard
            lastName={'Ernest'}
            firstName={'Brandon'}
            picture={'raptors.jpg'}
            grade={48}
            poste={'P'}
            level={'rookie'}
            age={19}
            city={'Toronto'}
            matchPlayed={8}
            wins={7}
            mvp={7}
            stars={5}
            icon={'add.png'}/>

            

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
            stars={2.4}
            icon={'add.png'}/>

            <PlayerCard
            lastName={'didier'}
            firstName={'didier'}
            picture={'background-home.jpg'}
            grade={2}
            poste={'mj'}
            level={'Rookie'}
            age={58}
            city={'saint-michel'}
            matchPlayed={7}
            wins={0}
            mvp={0}
            stars={1}
            icon={'add.png'}/>

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
            stars={5}
            icon={'add.png'}/>
            
        </div>
    );
  }
}

export default DraftZone;