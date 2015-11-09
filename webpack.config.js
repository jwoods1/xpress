module.exports = {
	entry: {
		index: './src/index.jsx'
	},
	 output: {
        path: __dirname,
        filename: "/assets/js/index.js"
    },
	module:{
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
};