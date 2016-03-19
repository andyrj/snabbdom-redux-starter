import mori from 'mori';
import {createAction, handleAction, handleActions} from 'redux-actions';

export default handleActions({
  CHANGE_ROUTE: (state, action) => ({
    
  }),

  /* removed counter component so these aren't necessary
  COUNTER_INCREMENT: (state, action) => ({
    // TODO: add logic to handle actions
  }),
  COUNTER_DECREMENT: (state, action) => ({

  }),
  COUNTER_RESET: (state, action) => ({

  }),
  COUNTER_DELETE: (state, action) => ({

  })
  */
}, mori.hashMap(
  'path', '/',
  'routes', mori.hashMap()
));
