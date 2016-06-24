import state from './state';
import * as actions from './actions';
import {createUnion, createReducer} from 'redux-tcomb';

const action = createUnion(actions);

export default function(initialState) {
  return createReducer(state(initialState), action, state);
}
