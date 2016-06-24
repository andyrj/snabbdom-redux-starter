var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var PROD_ENV = process.env.NODE_ENV === 'production' ? 1 : 0;

var nodeModules = {};
fs.readdirSync('node_modules').filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
}).forEach(function(mod){
  nodeModules[mod] = 'commonjs ' + mod;
});

var serverConfig = {
	name: 'server',
  entry: {
		client: [
			'./src/server.js'
		]
	},
	target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __dirname: true,
    __filename: true
  },
  externals: nodeModules,
  module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
      {test: /\.scss$/, loader: 'null-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=10240'},
      {test: /\.(txt|html)$/, loader: 'raw-loader'}
		]
	},
	output: PROD_ENV ? {
    publicPath: 'https://static.ajces.com/',
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  }: {
		publicPath: 'http://localhost:8080/',
		path: path.join(__dirname, 'dist'),
		filename: 'server.js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'bower_components']
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, './src/styles')]
	},
	devtool: PROD_ENV ? [] : ['inline-source-map'],
	plugins: [
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = serverConfig;
