'use strict';
import most from 'most';

const h = require('snabbdom/h');

const init = (dispatch) => {
  // stream.filter();
};

const render = (props) => {
  return h('div', 'todos! 12345');
};

/*
if (module.hot) {
  module.hot.accept();
}
*/

module.exports = {init, render};
