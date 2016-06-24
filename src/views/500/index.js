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
    title: 'AJCES - Error: 500',
    description: 'Internal Server Error'
  };
  let nodes = h('div', 'Error 500 - Internal Server Error.');

  return {nodes, meta};
};

module.exports = {init, render};
