'use strict';
import most from 'most';
import {isNode} from '../utils';
const h = require('snabbdom/h');

const init = (dispatch) => {
  if (!isNode) {
    // stream.filter();
  }
};

const render = (props) => {
  return h('div#main', [
    h('div#header', [
      h('h1', 'Counters!')
    ]),
    h('div#content', [
    ])
  ]);
};

module.exports = {init, render};
