import mori from 'mori';
import uuid from 'uuid';
import {createAction, handleAction, handleActions} from 'redux-actions';

export default handleActions({
  CHANGE_ROUTE: (state, action) => ({
    path: action.payload
  }),
  COUNTER_INCREMENT: (state, action) => ({
    counters: mori.upateIn(state.counters, action.payload.id, mori.inc)
  }),
  COUNTER_DECREMENT: (state, action) => ({
    counters: mori.upateIn(state.counters, action.payload.id, mori.dec)
  }),
  COUNTER_RESET: (state, action) => ({
    counters: mori.upateIn(state.counters, action.payload.id, 0)
  }),
  COUNTER_DELETE: (state, action) => ({
    counters: mori.dissoc(state.counters, action.payload.id)
  }),
  COUNTER_ADD: (state, action) => ({
    counters: mori.assocIn(state.counters, action.payload.id)
  }),
}, {
  'path': '/',
  'routes': mori.hashMap(),
  'counters': mori.hashMap()
  }
);
