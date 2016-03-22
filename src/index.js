'use strict';
import configureStore from './store';
import './styles/pure-min.css';
import './styles/side-menu.css';
let components = require('./components/index.js');
let views = require('./views/index.js');
let router = components.router;

let snabbdom = require('snabbdom');
const patch = snabbdom.init([
	require('snabbdom/modules/class'),
	require('snabbdom/modules/props')
]);

const initialState = JSON.parse(document.getElementById('redux-data').innerHTML);
const store = configureStore(initialState, false);

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
	module.hot.accept(['./views/index.js', './components/index.js'], () => {
		router = require('./components/router.js');
		render();
	});
}
