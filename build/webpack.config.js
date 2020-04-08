const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
    	template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
    	filename: "[name].css",
    	chunkFilename: "[id].css"
    })
	],
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	}, 
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
						publicPath: '../'
          }
          },
					'css-loader',
					'sass-loader'
        ]
			},
			{ 
				test: /\.tsx?$/, 
				loader: "awesome-typescript-loader" 
			},
			{ 
				enforce: "pre", 
				test: /\.js$/, 
				loader: "source-map-loader" 
			}
		]
  }
}