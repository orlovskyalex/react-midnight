const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		index: './src/js/index.js',
		styles: './src/assets/scss/root.scss',
	},
	output: {
		publicPath: '/',
		path: path.resolve('dist'),
		filename: '[name]_[hash].bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s?css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader!resolve-url-loader!sass-loader?sourceMap',
				}),
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'style.[contenthash].css',
			allChunks: true,
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		port: 8080,
		compress: true,
		hot: true,
		inline: true,
		historyApiFallback: true,
	},
};
