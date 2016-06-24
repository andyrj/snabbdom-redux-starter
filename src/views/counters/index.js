'use strict';
import {h, isNode} from '../../utils';

const init = (store) => {
  let dispatch = store.dispatch;
  if (!isNode) {
/*
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
*/
  }
};

const render = (props) => {
  let meta = {
    title: 'SRS - counters',
    description: 'Snabbdom-Redux-Starter counters'
  };
  let nodes = h('div', 'counters');
  return {nodes, meta};
};

module.exports = {init, render};
