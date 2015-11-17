var webpack = require('webpack');
 
// compile js assets into a single bundle file 
module.exports.webpack = {
  options: {
    devtool: 'eval',
    entry: [
      './assets/js/index.jsx',
    ],
    output: {
      path:'./.tmp/public/js',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
     loaders: [
			{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel', // 'babel-loader' is also a legal name to reference
			query: {
         		 presets: ['es2015', 'react']
				}
			}
		]
    }
  },
 
  // docs: https://webpack.github.io/docs/node.js-api.html#compiler 
  watchOptions: {
    aggregateTimeout: 300
  }
};