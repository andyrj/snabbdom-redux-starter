'use strict';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import {PROD_ENV, isNode} from './utils';

export default function configureStore(initialState, bNode) {
	if (bNode || PROD_ENV) {
		const createStoreWithMiddleware = compose(
			applyMiddleware(thunk)
		)(createStore);
		const store = createStoreWithMiddleware(reducer, initialState);

		return store;
	} else { //for security and compatability
		const createStoreWithMiddleware = compose(
			applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)(createStore);
		const store = createStoreWithMiddleware(reducer, initialState);

		return store;
	}
}
