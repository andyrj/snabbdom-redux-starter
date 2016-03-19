import mori from 'mori';
import router from '../components/router';
import configureStore from '../store';
import { init } from '../components/index';
import { createAction } from 'redux-actions';

const h = require('snabbdom/h');
const toHTML = require('snabbdom-to-html');

// shared initial state goes here...
const initialState = {
  'path': '/',
  'routes': {
    '/': ['home', true],
    '/products': ['products', true],
    '/services': ['services', true],
    '/blog/:title/': ['blog', false],
    '/blog': ['blog', true],
    '/contact': ['contact', true],
    '/about': ['about', true],
    '/login': ['login', false],
    '/register': ['register', false]
  }
};

//TODO: use redux saga instead of thunks and acations
const changeRoute = createAction('CHANGE_ROUTE_UNIVERSAL');
// change this to use custom template engine server side & express-mapper client
function render(path, callback) {
  let store = configureStore(mori.toClj(initialState));

  init(store.dispatch);

  store.dispatch(changeRoute(path));

  let data = JSON.stringify(mori.toJs(store.getState()));
  let root = toHTML(h('div', 'server side render'));
  let html = `
    <!doctype html>
    <html>
      <head>
        <title>AJCES</title>
        <script src='/mori.min.js'></script>
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
