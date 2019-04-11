import config from '../../config/index';
import Cookies from  'js-cookie';

export const getCourtsAction = () => dispatch => {

    fetch(`${config.urlApi}/courts`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
    .then((response) => {return response.json();})
    .then((data) => {
        dispatch({
            type: 'GET_COURTS',
            payload: data
        })
    });


    
}

export const getCourtDetailAction = () => dispatch => {

    fetch(`${config.urlApi}/courts/id`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      })
    .then((response) => {return response.json();})
    .then((data) => {
        dispatch({
            type: 'GET_COURT_DETAIL',
            payload: data
        })
    });


    
}