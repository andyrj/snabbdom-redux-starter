'use strict';
import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';
import visibility from './visibility';
import routes from './routes';
import path from './path';

export default combineReducers({
	counter,
	todos,
	visibility,
  routes,
  path
});
