'use strict';
const snabH = require('snabbdom/h');

const isNode = typeof window === 'undefined' ? 1 : 0;
const PROD_ENV = process.env.NODE_ENV === 'production' ? 1 : 0;

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const links = (routes) => {
  return Object.keys(routes).filter((key) => {
    if (routes[key].isMenuItem) {
      return key;
    }
    return false;
  }).map((key) => {
    return [key, capitalizeFirst(routes[key].name)];
  });
};

module.exports = {
	PROD_ENV,
  isNode,
  capitalizeFirst,
  links,
  h: snabH
};
