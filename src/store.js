'use strict';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {PROD_ENV, isNode} from './utils';

export default function configureStore(initialState) {
	if (!isNode) {
		const createStoreWithMiddleware = compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)(createStore);
		const store = createStoreWithMiddleware(reducer, initialState);

		return store;
	} else if (isNode || PROD_ENV) { //for security and compatability
		const createStoreWithMiddleware = compose(
			applyMiddleware(thunk),
		)(createStore);
		const store = createStoreWithMiddleware(reducer, initialState);

		return store;

	}
}
