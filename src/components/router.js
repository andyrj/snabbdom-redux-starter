'use strict';
import most from 'most';
import HttpHash from 'http-hash';
import { createAction } from 'redux-actions';
const h = require('snabbdom/h');
import { isNode } from '../utils';
import nav from './nav';

let layout = require('../views/index');
let views = layout.views;

//using closure here to avoid poluting global scope
let bSetup = false;
const hash = HttpHash();
const setupRoutes = () => {
  return () => {
    if (!bSetup) {
      Object.keys(routes).forEach((key) => {
        hash.set(key, routes[key][1]);
      });
      Object.seal(hash);
    }
  }
}

const changeRoute = createAction('CHANGE_ROUTE');

const init = (dispatch) => {
  layout.init(dispatch);
  setupRoutes();
  if (!isNode) {
    //attach to window.popstate events
    most.fromEvent('onpopstate', window).observe((e) => {
      let segments = document.location.split('/');
      let path = segments.slice(3, segments.length).reduce((prev, curr) => {
        return prev + '/' + curr;
      });
      dispatch(changeRoute(path));
    });
  }
};

const render = (props) => {
  let path = props.path;
  let route = hash.get(path);
  let handler = views[props.routes[path][0]].render;
  return h('div#layout', [
    nav.render(props.routes, path),
      h('div#main', [
        handler(props, route.params, route.splat)
      ])
    ]);
};

module.exports = {init, render, changeRoute};
