'use strict';
import 'babel-polyfill';
import configureStore from './store';
import {rootSaga} from './sagas';

// Prevent abuse of ES5 integrity methods by freezing base Prototypes and Base Object
Object.freeze(Object.prototype);
Object.freeze(Array.prototype);
Object.freeze(Function.prototype);
Object.freeze(Object);
Object.freeze(Object.freeze);
Object.freeze(Object.isFrozen);
Object.freeze(Object.seal);
Object.freeze(Object.isSealed);
Object.freeze(Object.preventExtensions);
Object.freeze(Object.isExtensible);
Object.seal(document.domain);

// defining components and views with require so I can update in hot reload
let components = require('./components');
let views = require('./views');
let router = components.router;

let snabbdom = require('snabbdom');
const patch = snabbdom.init([
	require('snabbdom/modules/class'),
  require('snabbdom/modules/props'),
  require('snabbdom/modules/attributes'),
  require('snabbdom/modules/eventlisteners')
]);

const storedState = JSON.parse(document.getElementById('redux-data').innerHTML);
const config = configureStore(storedState);
const store = config.store;
const sagas = config.sagas;

sagas.run(rootSaga);

let vnode;
const render = () => {
  window.requestAnimationFrame(() => {
    let r = router.render(store.getState());
    let meta = r.meta;
    document.title = meta.title;
    document.querySelector('meta[name="description"]').content = meta.description;
    vnode = patch(vnode, r.nodes);
  });
};

store.subscribe(render);

const mergeEvents = (l1, l2) => {
  let result = {
    window: {},
    document: {}
  }; // ex. window: { onclick: [f()] }

  if (l1) {
    l1.forEach((list) => {
      if (list && list.window) {
        Object.keys(list.window).forEach((event) => {
          if (!result.window[event]) {
            result.window[event] = [];
          }
          result.window[event].push(list.window[event]);
        });

        Object.keys(list.document).forEach((event) => {
          if (!result.document[event]) {
            result.document[event] = [];
          }
          result.document[event].push(list.document[event]);
        });
      }
    });
  }

  if (l2) {
    l2.forEach((list) => {
      if (list && list.window) {
        Object.keys(list.window).forEach((event) => {
          if (!result.window[event]) {
            result.window[event] = [];
          }
          result.window[event].push(list.window[event]);
        });

        Object.keys(list.document).forEach((event) => {
          if (!result.document[event]) {
            result.document[event] = [];
          }
          result.document[event].push(list.document[event]);
        });
      }
    });
  }

  return result;
};

// This replaces using Most.js for event delegation, with our own delegation system which is simple
const attachEvents = (events) => {
  Object.keys(events.window).forEach((event) => {
    window[event] = (e) => {
        events.window[event].forEach((handler) => {
        handler(e);
      });
    };
  });

  Object.keys(events.document).forEach((event) => {
    document[event] = (e) => {
        events.document[event].forEach((handler) => {
        handler(e);
      });
    };
  });
};

window.onload = function() {
  attachEvents(mergeEvents(components.init(store), views.init(store)));
  render(vnode = document.getElementById('router'));
};

if (module.hot) {
  module.hot.accept(['./views', './components'], () => {
    components = require('./components');
    views = require('./views');
    attachEvents(mergeEvents(components.init(store), views.init(store)));
    router = components.router;
		render();
  });

  module.hot.accept();
}
