'use strict';
import '../../styles/core.scss';
import './style.scss';
import {h} from '../../utils';

// const init = (store) => {
const init = () => {
  /*
  let dispatch = store.dispatch;

  if (!isNode) {
  }
  */
};

// const render = (props) => {
const render = () => {
  let meta = {
    title: 'SRS - home',
    description: 'Snabbdom-Redux-Starter homepage'
  };
  let nodes = h('div', [
    h('div', 'build this')
  ]);
  return {nodes, meta};
};

module.exports = {init, render};
