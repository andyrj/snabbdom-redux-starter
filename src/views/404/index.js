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
    title: 'AJCES - Error: 404',
    description: 'Page or resource not found.'
  };
  let nodes = h('div', 'Error 404 - Page or Resource Not Found.');

  return {nodes, meta};
};

module.exports = {init, render};
