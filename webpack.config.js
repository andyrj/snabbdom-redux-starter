var webpack = require('webpack');
var path = require('path');
var PROD_ENV = process.env.NODE_ENV === 'production' ? 1 : 0;

var config = {
	entry: {
		client: PROD_ENV ? [
			'./src/index.js'
		] : [
			'webpack/hot/dev-server',
			'webpack-hot-middleware/client',
			'./src/index.js'
		]
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192' }
		]
	},
	resolve: {
		modulesDirectories: ['node_modules', 'bower_components']
	},
	sassLoader: {
		includePaths: [path.resolve(__dirname, './src/styles')]
	},
	devServer: {
		host: 'localhost',
		port: 8080,
		contentBase: './dist/',
		proxy: {
			'/api/*': 'http://localhost:3000'
		}
	},
	devtool: PROD_ENV ? [] : ["source-map"],
	output: {
		/*publicPath: './dist/',*/
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: PROD_ENV ? [
		new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
		new webpack.optimize.OccurenceOrderPlugin()
	] : [
		new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};

module.exports = config;
