import router from './router';
import nav from './nav';
import counter from './counter';
import todo from './todo';

const init = (dispatch) => {
  router.init(dispatch);
  nav.init(dispatch);
  counter.init(dispatch);
  todo.init(dispatch);
};

module.exports = {
  init,
  router,
  nav,
  counter,
  todo
};
