'use strict';
import most from 'most';
import { isNode } from '../utils';
const h = require('snabbdom/h');

const init = (dispatch) => {
  if (!isNode) {
    most.fromEvent('click', document).filter((e) => {
      if (e.target && e.target.matches) {
        return e.target.matches('.counter');
      }
    }).observe((e) => {
      let id = e.srcElement.id;
      if (e.target.matches('.increment')) {
        dispatch({
          type: 'COUNTER_INCREMENT',
          payload: id
        });
      } else if (e.target.matches('.decrement')) {
        dispatch({
          type: 'COUNTER_DECREMENT',
          payload: id
        });
      } else if (e.target.matches('.delete')) {
        dispatch({
          type: 'COUNTER_DELETE',
          payload: id
        });
      } else if (e.target.matches('.reset')) {
        dispatch({
          type: 'COUNTER_RESET',
          payload: id
        });
      }
    });
  }
};

const render = (props) => {
  let id = props[0];
  let val = props[1];
  return h('div', [
    h(`button#${id}.counter.decrement`, '-'),
    h(`span#${id}.counter.count`, val),
    h(`button#${id}.counter.increment`, '+'),
    h(`button#${id}.counter.reset`, 'Reset'),
    h(`button#${id}.counter.delete`, 'X')
  ]);
};

module.exports = {init, render};
