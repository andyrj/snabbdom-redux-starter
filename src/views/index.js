'use strict';
import counters from './counters';
import todos from './todos';

const init = (store) => {
  counters.init(store);
  todos.init(store);
};

const views = {
  counters,
  todos
};

module.exports = {
  init,
  views
};

