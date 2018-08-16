const webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		publicPath: '/',
		port: 9000,
		contentBase: path.join(process.cwd(), 'dist'), // static file location
		host: '10.71.31.36',
		historyApiFallback: true, // true for index.html upon 404, object for multiple paths
		noInfo: false,
		stats: 'minimal',
		hot: true  // hot module replacement. Depends on HotModuleReplacementPlugin
	}
});