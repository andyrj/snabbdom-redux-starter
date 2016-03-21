'use strict';
import mori from 'mori';
import uuid from 'uuid';
import {createAction, handleAction, handleActions} from 'redux-actions';

export default handleActions({
  CHANGE_ROUTE: (state, action) => ({
    path: action.payload
  }),
  COUNTER_INCREMENT: (state, action) => ({
    counters: mori.upateIn(state.counters, action.payload, mori.inc)
  }),
  COUNTER_DECREMENT: (state, action) => ({
    counters: mori.upateIn(state.counters, action.payload, mori.dec)
  }),
  COUNTER_RESET: (state, action) => ({
    counters: mori.upateIn(state.counters, action.payload, 0)
  }),
  COUNTER_DELETE: (state, action) => ({
    counters: mori.dissoc(state.counters, action.payload)
  }),
  COUNTER_ADD: (state, action) => ({
    counters: mori.assocIn(state.counters, action.payload, 0)
  }),
  TODOS_ADD: (state, action) => ({
    todos: mori.assocIn(state.todos, action.payload, mori.set())
  }),
  TODO_ADD: (state, action) => ({
    todos: mori.updateIn(state.todos, action.payload.id, (s) => {
      mori.conj(s, mori.hashMap('text', action.payload.text, 'status', 'incomplete'))
    })
  }),
  TODO_DEL: (state, action) => ({
    todos: mori.updateIn(state.todos, action.payload.id, (s) => {
      mori.disj(s, mori.hashMap('text', action.payload.text, 'status', action.payload.status))
    })
  }),
  TODO_TOGGLE: (state, action) => ({
    todos: mori.updateIn(state.todos, action.payload.id, (s) => {
      //TODO: add logic here to find specified todo and toggle status
    })
  })
}, {
  'path': '/',
  'routes': mori.hashMap(),
  'counters': mori.hashMap(),
  'lists': mori.hashMap()
  }
);
