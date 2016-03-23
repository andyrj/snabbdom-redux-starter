'use strict';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import {isNode, PROD_ENV} from './utils';

export default function configureStore(initialState) {
	if (isNode || PROD_ENV) {
		const createStoreWithMiddleware = compose(
			applyMiddleware(thunk)
		)(createStore);
		const store = createStoreWithMiddleware(reducer, initialState);

		return store;
	} else {
		const createStoreWithMiddleware = compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)(createStore);
		const store = createStoreWithMiddleware(reducer, initialState);

		return store;
	}
}
