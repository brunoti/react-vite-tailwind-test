const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss/types').Config} */
const config = {
	darkMode: 'class',
	content: [
		'index.html',
		'src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/flowbite/**/*.js',
		'./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
		},
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin, require('flowbite/plugin')],
}

module.exports = config
