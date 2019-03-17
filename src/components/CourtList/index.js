import React, { Component } from 'react';
import './index.css';
import config from '../../config/index';
import PropTypes from 'prop-types';
import Cookies from  'js-cookie';

// Components
import CourtInfos from '../../components/CourtInfos/index';

class CourtList extends Component {

    static propTypes = {
        pageAmount : PropTypes.number,
    }
  
    state = {
        courts : [],
        active: null,
        currentPage: 0,
        buttonLoadMore: true
    }

  getPage = (pageNumber) => {
    const pageSize = this.props.pageAmount

    fetch(`${config.urlApi}/courts?_start=${pageNumber * pageSize}&_limit=${pageSize}`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    })
      .then((response) => {return response.json();})
      .then((data) => {
        const newCourts = [
          ...this.state.courts,
          ...data
        ]

        this.setState({
          courts: newCourts,
          buttonLoadMore: data.length === pageSize
        })
    });
  }

  loadNextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
    this.getPage(this.state.currentPage)
  }


  componentDidMount() {
    this.getPage(this.state.currentPage)
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }



  render() {
    return ( 
        <div>
            <h4>Choisis ton terrain</h4>
            <div className="courts_container">
                {
                    this.state.courts.map((court, key) => {
                    return (
                        <CourtInfos
                        key={key}
                        pictureSize={90}
                        addClass={'small'}
                        address={court.address}
                        city={court.city}
                        postalCode={court.postalCode}
                        transport={court.transportStation}
                        courtPicture={court.courtPicture.url}
                        hoop={court.hoop}
                        gradeCourt={court.gradeCourt}
                        gradeCrowd={court.gradeCrowd}
                        style={{paddingBottom:10}}
                        />
                        
                    )
                    })
                }
                {
                    this.state.buttonLoadMore && <div onClick={this.loadNextPage} className="button-show-more">voir plus</div>
                }
            </div>
        </div>
    );
  }
}

export default CourtList;