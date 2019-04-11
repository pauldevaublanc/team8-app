import { combineReducers } from 'redux';
import courtReducer from './courtReducer';
export default combineReducers({
 court: courtReducer
});