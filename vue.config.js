
module.exports = {
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Homework Tracker';
				return args;
			});
	},

	// publicPath: "/minecraft/"
	publicPath: '/homework',

	assetsDir: 'assets'
};