'use strict';
import router from '../components/router';
import configureStore from '../store';
import {init} from '../components/index';

const h = require('snabbdom/h');
const toHTML = require('snabbdom-to-html');

// shared initial state goes here...
const initialState = {
  'path': '/',
  'routes': {
    '/': ['todos', false],
    '/todos': ['todos', true],
    '/counters': ['counters', true]
  }
};

// TODO: use redux saga instead of thunks and acations
// const changeRoute = createAction('CHANGE_ROUTE_UNIVERSAL');

function render(path, callback) {
  initialState.path = path;
  let store = configureStore(initialState, true);

  init(store.dispatch);

  let data = JSON.stringify(store.getState());
  // TODO: update to render the router in the root element
  let root = toHTML(h('div', 'server side render'));
  let html = `
    <!doctype html>
    <html>
      <head>
        <title>Starter!</title>
        <script id='redux-data' type='application/json'>
          ${data}
        </script>
      </head>
      <body>
        <div id='root'>
          ${root}
        </div>
        <script src='/bundle.js'></script>
      </body>
    </html>
  `;
  callback(null, html);
}

module.exports = render;
