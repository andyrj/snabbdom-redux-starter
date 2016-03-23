'use strict';
import most from 'most';
import uuid from 'uuid';
import {isNode} from '../utils';

const h = require('snabbdom/h');

const init = (store) => {
  let dispatch = store.dispatch;
  if (!isNode) {
    most.fromEvent('click', document).filter((e) => {
      if (e.target && e.target.matches) {
        return e.target.matches('.counter');
      }
      return false;
    }).observe((e) => {
      if (e.target.matches('.add')) {
        dispatch({
          type: 'COUNTER_ADD',
          payload: uuid.v4()
        });
      }
    });
  }
};

const render = (props) => {
  return h('div', 'counters');
};

module.exports = {init, render};
