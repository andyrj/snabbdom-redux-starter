import mori from 'mori';
import uuid from 'uuid';
import {createAction, handleAction, handleActions} from 'redux-actions';

export default handleActions({
  CHANGE_ROUTE: (state, action) => ({
    mori.updateIn(state, 'path', action.payload);
  }),
  COUNTER_INCREMENT: (state, action) => ({
    mori.upateIn(state, ['counters', action.payload.id], mori.inc);
  }),
  COUNTER_DECREMENT: (state, action) => ({
    mori.upateIn(state, ['counters', action.payload.id], mori.dec);
  }),
  COUNTER_RESET: (state, action) => ({
    mori.upateIn(state, ['counters', action.payload.id], 0);
  }),
  COUNTER_DELETE: (state, action) => ({
    let c = mori.get(state, 'counters');
    mori.dissoc(c, action.payload.id);
  }),
  COUNTER_ADD: (state, action) => ({
    mori.assocIn(state, ['counters', action.payload.id]);
  }),
}, mori.hashMap(
  'path', '/',
  'routes', mori.hashMap()
));
