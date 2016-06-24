'use strict';
import HttpHash from 'http-hash';
import {h} from '../../utils';
import {isNode} from '../../utils';
import nav from '../nav/index';
import views from '../../views/index';
import '../../styles/core.scss';
import './style.scss';
import {changePath} from '../../actionCreators';

let bSetup = false;
const hash = HttpHash();
const setupRoutes = (routes) => {
  if (!bSetup) {
    Object.keys(routes).forEach((key) => {
      hash.set(key, routes[key][1]);
    });
    bSetup = true;
    // Object.seal(hash);
  }
};

const CheckAClass = (element, check) => {
  if (element.tagName === 'A' && element.classList.contains(check)) {
    return true;
  } else if (element.parentElement.tagName === 'BODY') {
    return false;
  } else {
    return CheckAClass(element.parentElement, check);
  }
};

const GetAttrVal = (element, attr) => {
  if (element.hasAttribute(attr)) {
    return element.getAttribute(attr);
  } else if (element.parentElement.tagName === 'BODY') {
    return;
  } else {
    return GetAttrVal(element.parentElement, attr);
  }
};

const init = (store) => {
  let dispatch = store.dispatch;
  setupRoutes(store.getState().routes);
  if (!isNode) {
    let events = {
      window: {},
      document: {}
    };

    events.window.onpopstate = () => {
      dispatch(changePath(document.location.pathname));
    };

    events.window.onclick = (e) => {
      if (e.target) {
        if (CheckAClass(e.target, 'pushstate')) {
          let href = GetAttrVal(e.target, 'href');
          if (href && store.getState().path !== href) {
            // title is not set here, we are moving title and meta generation to views
            history.pushState({}, '', href);
            window.scrollTo(0, 0);
            dispatch(changePath(href));
          }
          e.preventDefault();
        }
      }
    };

    return events;
  }
};

// Extended component that renders content and header nodes from views
const render = (props) => {
  let path = props.path;
  let route = hash.get(path);
  let viewName = props.routes[route.src].name;
  let view = views[viewName];
  let p = {};
  Object.keys(props).forEach((key) => {
    p[key] = props[key];
  });
  let r = view.render(p);
  p[route] = route;
  let meta = r.meta;
  let nodes = h('div#router.router', [
    nav.render({routes: props.routes, path: viewName}),
    h('div.content', [
      r.nodes
    ])
  ]);
  return {nodes, meta};
};

module.exports = {init, render};
