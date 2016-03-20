'use strict';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
import favicon from 'serve-favicon';
import chokidar from 'chokidar';
import {isNode, PROD_ENV} from './utils';

const app = express();

const clearCache = () => {
  Object.keys(require.cache).forEach((id) => {
    if (/[\/\\]server[\/\\]/.test(id)) {
      delete require.cache[id];
    }
  });
};

if (!PROD_ENV) {
  let compiler = webpack(webpackConfig);
  let watcher = chokidar.watch('./src');

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler));
  watcher.on('ready', () => {
    watcher.on('all', () => {
      clearCache();
    });
  });

  compiler.plugin('done', () => {
    clearCache();
  });
}

app.use(favicon(__dirname + '/images/favicon.ico'));

app.use(express.static('dist'));

/*
app.use((req, res, next) => {
  require('./server/api')(req, res, next);
});
*/
app.get('*', (req, res, next) => {
  require('./server/render.js')(req.path, function(err, page) {
    if (err) {
      return next(err);
    }
    res.send(page);
  });
});

app.listen(3000, console.log('AJCES app listening at Port: %s', 3000));
