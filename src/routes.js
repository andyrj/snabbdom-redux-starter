'use strict';

const routes = {
  '/': {name: 'home', isMenuItem: true},
  '/todos': {name: 'todos', isMenuItem: true},
  '/counters': {name: 'counters', isMenuItem: true},
  '/400': {name: '_400', isMenuItem: false},
  '/401': {name: '_401', isMenuItem: false},
  '/403': {name: '_403', isMenuItem: false},
  '/500': {name: '_500', isMenuItem: false},
  '/*': {name: '_404', isMenuItem: false}
};

module.exports = {
  routes
};
