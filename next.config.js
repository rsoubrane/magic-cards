module.exports = {
	env: {
		HOST_API_URL: 'https://api.scryfall.com',
		HOST_API_LOCAL_URL: 'http://localhost:3002'
	},
	images: {
		domains: ['c1.scryfall.com', 'c2.scryfall.com', 'wallpaperaccess.com']
	},
	experimental: {
		esmExternals: true,
		runtime: 'nodejs'
	},
	pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
	webpack(config, options) {
		config.module.rules.push({
			test: /\.mdx?$/,
			use: [
				// The default `babel-loader` used by Next:
				options.defaultLoaders.babel,
				{
					loader: '@mdx-js/loader',
					options: {
						providerImportSource: '@mdx-js/react'
					}
				}
			]
		});

		return config;
	}
};
