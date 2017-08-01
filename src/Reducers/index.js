import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nav from './nav.js';

export default combineReducers({
  nav,
  routing: routerReducer
});
