import mori from 'mori';
import most from 'most';
import HttpHash from 'http-hash';
import { createAction } from 'redux-actions';
const h = require('snabbdom/h');
import { isNode } from '../utils';
import nav from './nav';
import views from '../views/index';

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//using closure here to avoid poluting global scope
const setupRoutes = () => {
  let hash = undefined;
  return () => {
    if (hash === undefined) {
      hash = HttpHash();
      Object.keys(routes).forEach((key) => {
        hash.set(key, capitalizeFirst(routes[key][1]));
      });
      Object.seal(hash);
    }
  }
}

const changeRoute = createAction('CHANGE_ROUTE');

const init = (dispatch) => {
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
  setupRoutes();
};

const render = (props) => {
  let route = hash.get(mori.get(props, 'path'));
  let handler = views[mori.getIn(props, ['routes', route, [0]])].render;
  return h('div#layout', [
    nav.view(mori.get(props, 'nav')),
      h('div#main', [
        handler(props, route.params, route.splat)
      ])
    ]);
};

module.exports = {init, render, changeRoute};
