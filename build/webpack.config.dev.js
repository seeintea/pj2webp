const merge = require('webpack-merge');
const path = require('path');
const config = require('./webpack.config');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(config, {
    mode: 'development',
		devtool: 'source-map',
    devServer: {
        open: true,
        contentBase: './dist',
        port: 3000,
        compress: true,
        hot: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				chunks: "all",
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendor",
						chunks: 'all'
					}
				}
			},
			minimize: true,
			minimizer: [
				new TerserPlugin({
					parallel: true,
					cache: true
				})
			]
		},
		output: {
			filename: '[name].[hash].js',
			path: path.resolve(__dirname, '../dist')
		}
});

