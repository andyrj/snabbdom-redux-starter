'use strict';
import home from './home';
import counters from './counters';
import todos from './todos';
import _400 from './400';
import _401 from './401';
import _403 from './403';
import _404 from './404';
import _500 from './500';

const init = (store) => {
  let events = [];
  events.push(home.init(store));
  events.push(counters.init(store));
  events.push(todos.init(store));
  events.push(_400.init(store));
  events.push(_401.init(store));
  events.push(_403.init(store));
  events.push(_404.init(store));
  events.push(_500.init(store));
  return events;
};

module.exports = {
  init,
  home,
  counters,
  todos,
  _400,
  _401,
  _403,
  _404,
  _500
};
