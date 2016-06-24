'use strict';
import 'babel-polyfill';
import favicon from 'serve-favicon';
import express from 'express';
import {PROD_ENV} from './utils';
import configureStore from './store';
import components from './components';
import views from './views';
import childProcess from 'child_process';
import {routes} from './routes';
import crypto from 'crypto';
import fs from 'fs';

const getSRI = (filename) => {
  return 'sha256-' + crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('base64');
};

const home = process.env.HOME;
const dir = `${home}/github/ajces/ajces/dist/`;
const bundleFilename = PROD_ENV ? childProcess.execSync('ls -la dist/bundle*').toString().split('/')[1].replace('\n', '') : 'bundle.js';
const bundleHash = PROD_ENV ? getSRI(`${dir}${bundleFilename}`) : '';
const styleFilename = PROD_ENV ? childProcess.execSync('ls -la dist/style*').toString().split('/')[1].replace('\n', '') : '';
const styleHash = PROD_ENV ? getSRI(`${dir}${styleFilename}`) : '';
const app = express();
const toHTML = require('snabbdom-to-html');
const router = components.router;


app.use(favicon(__dirname + '/static/images/favicon.ico'));

// TODO: look at using sagas on server side render
// import serverSagas from './serverSagas'
// import sagaMiddleware from './configureStore'
//
// const tasks = serverSagas.map(saga => sagaMiddleware.run(saga))
// tasksEndPromises = tasks.map(t => t.done)
//
// Promise.all(tasksEndPromises).then(render)

// shared initial state goes here...
let storedState = {
  'path': '/',
  routes
};

// TODO: use redux saga instead of thunks and actions
function render(req, res) {
  let log = {
    time: new Date().toISOString(),
    ip: req.ip,
    requested: req.path
  };
  console.log(JSON.stringify(log));

  storedState.path = req.path;
  let config = configureStore(storedState);
  let store = config.store;
  // let sagas = config.sagas;

  components.init(store);
  views.init(store);

  let data = JSON.stringify(store.getState());
  let r = router.render(store.getState());
  let meta = r.meta;
  let root = toHTML(r.nodes);

  let bundleScript = `<script src="http://localhost:8080/${bundleFilename}" async></script>`;
  let styleSheet = '';

  if (PROD_ENV) {
    bundleScript = `<script src="https://static.ajces.com/${bundleFilename}" integrity="${bundleHash}" crossorigin="anonymous" async></script>`;
    styleSheet = `<link rel="stylesheet" type="text/css" href="https://static.ajces.com/${styleFilename}" integrity="${styleHash}" crossorigin="anonymous" />`;
  }

  let html = `
  <!doctype html>
  <html>
  <head>
    <title>${meta.title}</title>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <meta name='description' content='${meta.description}'>
    <meta name='robots' content='nofollow'>
    <meta name='humans' content='nofollow'>
    ${styleSheet}
    <script id='redux-data' type='application/json'>
      ${data}
    </script>
  </head>
  <body>
    ${root}
    ${bundleScript}
  </body>
  </html>`;

  res.send(html);
}

app.get('*', render);

app.listen(3000, console.log('Snabbdom-Redux-Starter app listening at Port: %s', 3000));
