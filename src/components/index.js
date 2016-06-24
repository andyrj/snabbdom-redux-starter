'use strict';
import router from './router';
import nav from './nav';
import counter from './counter';
import todo from './counter';

const init = (store) => {
  let events = [];
  events.push(router.init(store));
  events.push(nav.init(store));
  events.push(counter.init(store));
  events.push(todo.init(store));
  return events;
};

module.exports = {
  init,
  router,
  nav,
  counter,
  todo
};
