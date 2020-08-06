import { combineReducers } from 'redux';
import wheather from './wheather';
import history from './history';

export default combineReducers({
  wheather,
  history
});