/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => ({
	test: {
		include: ['src/**/__tests__/*'],
		globals: true,
		environment: 'jsdom',
		setupFiles: 'src/test/setup.ts',
		clearMocks: true,
		coverage: {
			enabled: true,
			'100': true,
			reporter: ['text', 'lcov'],
			reportsDirectory: 'coverage/jest',
		},
	},
	plugins: [
		tsconfigPaths(),
		react(),
		...(mode !== 'test'
			? [
					VitePWA({
						registerType: 'autoUpdate',
						includeAssets: [
							'favicon.png',
							'robots.txt',
							'apple-touch-icon.png',
							'icons/*.svg',
							'fonts/*.woff2',
						],
						manifest: {
							theme_color: '#BD34FE',
							icons: [
								{
									src: '/android-chrome-192x192.png',
									sizes: '192x192',
									type: 'image/png',
									purpose: 'any maskable',
								},
								{
									src: '/android-chrome-512x512.png',
									sizes: '512x512',
									type: 'image/png',
								},
							],
						},
					}),
			  ]
			: []),
	],
}))
