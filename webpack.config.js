module.exports = {
	entry: './app/app.js',
	output: {
		filename: './public/js/bundle.js'
	},
	watch: true,
	module: {
				loaders: [
						{
								test: /\.js$/,
								exclude: /node_modules/,
								loader: 'babel',
								query: {
										presets: ['es2015']
								}
						}
				],
		}
};