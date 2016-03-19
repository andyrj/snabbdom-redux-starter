import counters from './counters';
import todos from './todos';

const init = (dispatch) => {
  counters.init(dispatch);
  todos.init(dispatch);
};

const views = {
  counters,
  todos
};

module.exports = {
  init,
  views
};
