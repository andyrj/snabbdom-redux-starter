'use strict';
import router from './router';
import nav from './nav';
import counter from './counter';
import todo from './todo';

const init = (store) => {
  router.init(store);
  nav.init(store);
  counter.init(store);
  todo.init(store);
};

module.exports = {
  init,
  router,
  nav,
  counter,
  todo
};
