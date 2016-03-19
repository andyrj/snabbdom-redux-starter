import mori from 'mori';
import uuid from 'uuid';
import {createAction, handleAction, handleActions} from 'redux-actions';

export default function(state = mori.hashMap(
  'path', '/',
  'routes', mori.hashMap()
), action){
  switch(action.type) {
    case 'CHANGE_ROUTE':
      return mori.updateIn(state, 'path', action.payload);
    case 'COUNTER_INCREMENT':
      return mori.upateIn(state, ['counters', action.payload.id], mori.inc);
    case 'COUNTER_DECREMENT':
      return mori.upateIn(state, ['counters', action.payload.id], mori.dec);
    case 'COUNTER_RESET':
      return mori.upateIn(state, ['counters', action.payload.id], 0);
    case 'COUNTER_DELETE':
      let c = mori.get(state, 'counters');
      return mori.dissoc(c, action.payload.id);
    case 'COUNTER_ADD':
      return mori.assocIn(state, ['counters', uuid.v4()], 0);
    default:
      return state;
  }
}
