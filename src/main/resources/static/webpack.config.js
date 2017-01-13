var path = require('path')
var webpack = require('webpack');

var config = {
	entry: {
		entry:'./jsx/entry',
		poc:'./jsx/poc'
	},
	resolve: {
		modulesDirectories: ['jsx','node_modules'],
		alias: {},
		extensions: ['','.jsx','.js']
	},
	output: {
		filename: '[name].js',
		path: './js'
	},
	module: {
		loaders: [
			{ test: /\.jsx$/, loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'], exclude: /node_modules/},
			{ test: /\.css$/, loaders: ['style', 'css']},
			{ test: /\.scss$/, loaders: ['style', 'css', 'sass']},
			{ test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=1000000' }
		]
	}
};

module.exports = config;
