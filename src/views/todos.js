'use strict';
import most from 'most';
import {isNode} from '../utils';

const h = require('snabbdom/h');

const init = (store) => {
  let dispatch = store.dispatch;
  if (!isNode) {
    most.fromEvent('click', document).filter((e) => {
      //TODO: add logic to handle clieck events for todos
    });
  }
};

const render = (props) => {
  return h('div', 'todos! 12345');
};

module.exports = {init, render};
