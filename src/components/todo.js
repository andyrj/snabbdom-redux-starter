'use strict';
import most from 'most';
import {isNode} from '../utils';
const h = require('snabbdom/h');

const init = (dispatch) => {
  if (!isNode) {
    most.fromEvent('click', document).filter((e) => {
      //TODO: add logic for handling todo component click events
    });
  }
};

const render = (props) => {
  //TODO: add render logic for todo component
};

module.exports = {init, render};
