'use strict';
import mori from 'mori';
import most from 'most';
import configureStore from './store';
import './styles/pure-min.css';
import './styles/side-menu.css';
import * as components from './components/index';
import * as views from './views/index';
let router = require('./components/router.js');

let snabbdom = require('snabbdom');
const h = require('snabbdom/h');
const patch = snabbdom.init([
	require('snabbdom/modules/class'),
	require('snabbdom/modules/props')
]);

const initialState = JSON.parse(document.getElementById('redux-data').innerHTML);
const store = configureStore(mori.toClj(initialState));

let vnode;
const render = () => {
	vnode = patch(vnode, router.render(store.getState()));
};

store.subscribe(render);

window.onload = function() {
	components.init(store.dispatch);
	views.init(store.dispatch);
	render(vnode = document.getElementById('root'));
};

if (module.hot) {
	module.hot.accept('./components/router.js', (comp) => {
		router = require('./components/router.js');
		render();
	});
}
