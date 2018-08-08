const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		app: ['./src/index.js']
	},
	output: {
		path: path.join(__dirname, './build'),
		publicPath: '/',
	    filename: 'bundle.[name].[hash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	module: {
	    rules: [
	      	{
		        test: /\.js$/,
		        exclude: /(node_modules|bower_components)/,
		        loader: 'babel-loader',
		        query: {
		          presets: ['react', 'env', 'stage-1']
		        }
	       }
	    ]
	 },
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	}
};