'use strict';
import {combineReducers} from 'redux';
import routes from './routes';
import path from './path';

export default combineReducers({
	routes,
  path
});
