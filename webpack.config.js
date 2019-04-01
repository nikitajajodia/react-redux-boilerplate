const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		app: ['./src/index.jsx']
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
		        test:/\.(js|jsx)$/,
		        exclude: /(node_modules|bower_components)/,
		        loader: 'babel-loader',
		        query: {
		          presets: ['react', 'env', 'stage-1']
		        }
	       	},
	       	{
		      	test: /\.js$/,
		      	exclude: /node_modules/,
		      	use: ['babel-loader', 'eslint-loader']
		    },
		    {
		    	test: /\.(scss|css)$/,
	            use: [
	                "style-loader", // creates style nodes from JS strings
	                "css-loader", // translates CSS into CommonJS
	                "sass-loader" // compiles Sass to CSS, using Node Sass by default
	            ]
		    }
	    ]
	 },
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	}
};