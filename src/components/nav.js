'use strict';
import most from 'most';
import { isNode } from '../utils';

const h = require('snabbdom/h');

const init = (dispatch) => {
  if (!isNode) {
    // stream.filter();
  }
};

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

let links = (props) => {
  let routes = mori.toJs(props);
  return Object.keys(routes).filter((key) => {
    if (routes[key][1]) {
      return key;
    }
  }).map((key) => {
    return [key, capitalizeFirst(routes[key][0])];
  });
}

const render = (props) => {
  return h('div', [
    h('a#menuLink.menu-link', {props: {href: '#menu'}}, [
      h('span')
    ]),
    h('div#menu', [
      h('div.pure-menu', [
        h('div.pure-menu-heading', {props: {href: '#'}}, 'Starter!'),
        h('ul.pure-menu-list', links(props).map((entry) => {
          return h('li.pure-menu-item', [
            h('a.pure-menu-link', {props: {href: `${entry[0]}`}}, entry[1])
          ]);
        })),
      ])
    ])
  ]);
};

module.exports = {init, render};
