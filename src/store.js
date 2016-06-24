'use strict';
import {createStore, applyMiddleware, compose} from 'redux';
import {isNode, PROD_ENV} from './utils';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';

const sagas = createSagaMiddleware();

export default function configureStore(initialState) {
  let createStoreWithMiddleware;
  if (isNode || PROD_ENV) {
    createStoreWithMiddleware = compose(
      applyMiddleware(sagas)
    )(createStore);
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware(sagas),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);
  }

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return {store, sagas};
}
