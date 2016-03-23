'use strict';
import most from 'most';
import {isNode} from '../utils';

const h = require('snabbdom/h');

const init = (store) => {
  let dispatch = store.dispatch;
  if (!isNode) {
    most.fromEvent('click', document).filter((e) => {
      //TODO: add logic for handling click events for nav component, must preventDefault
    });
  }
};

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

let links = (props) => {
  let routes = props;
  return Object.keys(routes).filter((key) => {
    if (routes[key][1]) {
      return key;
    }
    return false;
  }).map((key) => {
    return [key, capitalizeFirst(routes[key][0])];
  });
};

// TODO: fix styling for currently selected route in menu
const render = (props, path) => {
  return h('div', [
    h('a#menuLink.menu-link', {props: {href: '#menu'}}, [
      h('span')
    ]),
    h('div#menu', [
      h('div.pure-menu', [
        h('div.pure-menu-heading', {props: {href: '#'}}, 'Starter!'),
        h('ul.pure-menu-list', links(props).map((entry) => {
          return h('li.pure-menu-item', {class: {active: (path === entry[0])}}, [
            h('a.pure-menu-link', {props: {href: `${entry[0]}`}}, entry[1])
          ]);
        })),
      ])
    ])
  ]);
};

module.exports = {init, render};
