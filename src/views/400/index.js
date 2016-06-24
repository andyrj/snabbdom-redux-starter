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
    title: 'AJCES - Error: 400',
    description: 'Bad Request'
  };
  let nodes = h('div', 'Error 400 - Bad Request');

  return {nodes, meta};
};

module.exports = {init, render};
