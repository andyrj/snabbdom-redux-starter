var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules').filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
}).forEach(function(mod){
  nodeModules[mod] = 'commonjs ' + mod;
});

var testConfig = {
  name: 'test',
	entry: {
		client: [
			'./test/index.js'
		]
	},
  target: 'node',
  externals: nodeModules,
  module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|dist)/,
				loader: 'babel-loader'
			},
      {test: /\.scss$/, loader: "null-loader"},
      {test: /\.(png|jpg)$/, loader: 'null-loader'},
      {test: /\.(txt|html)$/, loader: 'null-loader'}
		]
	},
	resolve: {
		modulesDirectories: ['node_modules']
	},
	devtool: ['inline-source-map'],
	devServer: {
		host: 'localhost',
    port: 8888
	},
	output: {
		publicPath: 'http://localhost:8888/test',
		path: path.join(__dirname, 'test'),
		filename: 'test.node.bundle.js'
	},
	plugins: [
    new webpack.NoErrorsPlugin()
  ]
};


module.exports = testConfig;
