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
    title: 'AJCES - Error: 403',
    description: 'Forbidden'
  };
  let nodes = h('div', 'Error 403 - Forbidden');

  return {nodes, meta};
};

module.exports = {init, render};
