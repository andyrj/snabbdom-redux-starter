'use strict';
import most from 'most';
import {isNode} from '../utils';
const h = require('snabbdom/h');

const init = (dispatch) => {
  if (!isNode) {
    most.fromEvent('click', document).filter((e) => {
    });
  }
};

const render = (props) => {
};

module.exports = {init, render};
