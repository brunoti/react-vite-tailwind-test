const path = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-dark-mode',
		'@storybook/addon-postcss',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-vite',
	},
	features: {
		storyStoreV7: true,
	},
	async viteFinal(config, { configType }) {
		const { config: userConfig } = await loadConfigFromFile(
			configType,
			path.resolve(__dirname, '../vite.config.ts'),
		)

		return mergeConfig(config, {
			...userConfig,
			// manually specify plugins to avoid conflict
			plugins: [userConfig.plugins[0], userConfig.plugins[2]],
		})
	},
}
