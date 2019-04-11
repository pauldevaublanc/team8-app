export default (state = {courts: []}, action) => {
    switch (action.type) {
     case 'GET_COURTS':
      return {
        courts: action.payload
      }
      case 'GET_COURT_DETAIL':
        return {
          courtDetail: action.payload
        }
     default:
      return state
    }
   }