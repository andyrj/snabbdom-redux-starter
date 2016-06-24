'use strict';
import {h, isNode} from '../../utils';

const init = (store) => {
  let dispatch = store.dispatch;
  if (!isNode) {
  }
};

const render = (props) => {
  let meta = {
    title: 'SRS - todos',
    description: 'Snabbdom-Redux-Starter todos'
  };
  let nodes = h('div', 'todos! 12345');
  return {nodes, meta};
};

module.exports = {init, render};
