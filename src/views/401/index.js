'use strict';
import '../../styles/core.scss';
import {h} from '../../utils';

// const init = (store) => {
const init = () => {
  // let dispatch = store.dispatch;
  // stream.filter();
};

// const render = (props) => {
const render = () => {
  let meta = {
    title: 'AJCES - Error: 401',
    description: 'Unauthorized'
  };
  let nodes = h('div', 'Error 401 - Unauthorized');

  return {nodes, meta};
};

module.exports = {init, render};
