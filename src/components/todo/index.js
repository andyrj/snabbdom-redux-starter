'use strict';
import {h, isNode} from '../utils';

const init = (store) => {
  let dispatch = store.dispatch;
  if (!isNode) {
/*
    most.fromEvent('click', document).filter((e) => {
      // TODO: add logic for handling todo component click events
    });
*/
  }
};

const render = (props) => {
  // TODO: add render logic for todo component
};

module.exports = {init, render};
