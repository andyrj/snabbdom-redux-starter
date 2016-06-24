var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PROD_ENV = process.env.NODE_ENV === 'production' ? 1 : 0;

var clientConfig = {
  name: 'client',
	entry: {
		client: [
			'./src/index.js'
		]
	},
	externals: [
    'fs'
  ],
  module: {
		loaders: PROD_ENV ? [
			{
				test: /\.js$/,
        include: path.resolve(__dirname, './src'),
				exclude: /(node_modules|test|dist)/,
				loader: 'babel-loader'
			},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader!postcss-loader")},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=10240'},
      {test: /\.(txt)$/, loader: 'raw-loader'}
    ] : [
			{
				test: /\.js$/,
				exclude: /(node_modules|test|dist)/,
				loader: 'babel-loader'
			},
      {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader!postcss-loader"},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=10240'},
      {test: /\.(txt|html)$/, loader: 'raw-loader'}
		]
	},
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] })],
	resolve: {
		modulesDirectories: ['node_modules', 'bower_components']
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, './src/styles')]
	},
	devServer: {
		host: 'localhost',
    hot: true,
    port: 8080,
		contentBase: './dist/',
	},
	devtool: PROD_ENV ? [] : ['inline-source-map'],
	output: PROD_ENV ? {
    publicPath: 'https://static.ajces.com/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  }: {
		publicPath: 'http://localhost:8080/',
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: PROD_ENV ? [
		new webpack.IgnorePlugin(/jsdom$/),
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    new ExtractTextPlugin("style.[hash].css", {
      allChunks: true
    }),
		new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ] : [
		new webpack.IgnorePlugin(/jsdom$/),
		new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin()
	]
};


module.exports = clientConfig;
