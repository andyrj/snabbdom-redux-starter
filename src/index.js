'use strict';
import mori from 'mori';
import most from 'most';
import configureStore from './store';
import './styles/pure-min.css';
import './styles/side-menu.css';
let components = require('./components/index.js');
let views = require('./views/index.js');
let router = components.router;

let snabbdom = require('snabbdom');
const h = require('snabbdom/h');
const patch = snabbdom.init([
	require('snabbdom/modules/class'),
	require('snabbdom/modules/props')
]);

const initStateToClj = (initState) => {
	let newState = {};
	let keys = Object.keys(initState);
	keys.forEach((key) => {
		switch(typeof initState[key]) {
			case 'number':
			case 'string':
			case 'boolean':
				newState[key] = initState[key];
				break;
			default:
				newState[key] = mori.toClj(initState[key]);
				break;
		}
	});
};

const initialState = JSON.parse(document.getElementById('redux-data').innerHTML);
const store = configureStore(mori.toClj(initialState), false);

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
	module.hot.accept(['./views/index.js', './components/index.js'], (comp) => {
		console.log('hot accepted: ' + this);
		router = require('./components/router.js')
		render();
	});
}
