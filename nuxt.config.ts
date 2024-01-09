// https://nuxt.com/docs/api/configuration/nuxt-config

import defaultTheme from 'tailwindcss/defaultTheme';
const colors = require('tailwindcss/colors');
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			secret: process.env.NUXT_API_SECRET,
			baseUrl: process.env.NUXT_PUBLIC_API_BASE,
			PORT: process.env.NUXT_PORT,
		},
	},
	ssr: false,
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			title: 'Zero to Hero', // Tiêu đề mặc định cho toàn bộ trang web
			// titleTemplate: '%s - Tên Website', // Một template cho việc tạo tiêu đề cho từng trang cụ thể
			meta: [
				// Các thiết lập meta khác có thể được thêm vào đây
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			],
		},
	},

	vite: {
		define: {
			'process.env.DEBUG': true,
		},
	},
	css: [
		'@/assets/styles/main.scss',
		'@/assets/styles/text.scss',
		'@/assets/styles/colors.scss',
		'@/assets/fonts/Averta-Std/stylesheet.css',
	],
	plugins: ['~/plugins/pinia.ts', '~/services/index.ts', '~/plugins/tailwind.config.ts', '~/helpers/globalHelpers.ts'],
	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'floating-vue/nuxt',
		// this adds the vuetify vite plugin
		// also produces type errors in the current beta release
		// async (options, nuxt) => {
		// 	// @ts-ignore
		// 	nuxt.hooks.hook('vite:extendConfig', config => {
		// 		if (config && config.plugins) {
		// 			return config.plugins.push(vuetify());
		// 		}
		// 	});
		// },
	],
	tailwindcss: {
		exposeConfig: true,
		config: {
			colorMode: {
				classSuffix: '',
			},
			darkMode: 'class',
			theme: {
				extend: {
					colors: {
						// ...defaultTheme.colors,
						'neutral-100': '#f5f5f5',
						'neutral-200': '#e5e5e5',
						'neutral-300': '#d4d4d4',
						'neutral-400': '#a3a3a3',
						'neutral-500': '#737373',
						'neutral-600': '#525252',
						'neutral-700': '#404040',
						'neutral-800': '#262626',
						'neutral-900': '#171717',

						'primary-100': '#fef3c7',
						'primary-200': '#fde68a',
						'primary-300': '#fcd34d',
						'primary-400': '#fbbf24',
						'primary-500': '#f59e0b',
						'primary-600': '#d97706',
						'primary-700': '#b45309',
						'primary-800': '#92400e',
						'primary-900': '#78350f',

						'accent-100': '#ffedd5',
						'accent-200': '#fed7aa',
						'accent-300': '#fdba74',
						'accent-400': '#fb923c',
						'accent-500': '#f97316',
						'accent-600': '#ea580c',
						'accent-700': '#c2410c',
						'accent-800': '#9a3412',
						'accent-900': '#7c2d12',

						'error-100': '#fee2e2',
						'error-200': '#fecaca',
						'error-300': '#fca5a5',
						'error-400': '#f87171',
						'error-500': '#ef4444',
						'error-600': '#dc2626',
						'error-700': '#b91c1c',
						'error-800': '#991b1b',
						'error-900': '#7f1d1d',

						'warning-100': '#fef9c3',
						'warning-200': '#fef08a',
						'warning-300': '#fef08a',
						'warning-400': '#facc15',
						'warning-500': '#eab308',
						'warning-600': '#eab308',
						'warning-700': '#eab308',
						'warning-800': '#eab308',
						'warning-900': '#713f12',

						'success-100': '#dcfce7',
						'success-200': '#bbf7d0',
						'success-300': '#86efac',
						'success-400': '#4ade80',
						'success-500': '#22c55e',
						'success-600': '#16a34a',
						'success-700': '#15803d',
						'success-800': '#166534',
						'success-900': '#14532d',

						'info-100': '#dbeafe',
						'info-200': '#bfdbfe',
						'info-300': '#93c5fd',
						'info-400': '#60a5fa',
						'info-500': '#3b82f6',
						'info-600': '#2563eb',
						'info-700': '#1d4ed8',
						'info-800': '#1e40af',
						'info-900': '#1e3a8a',
					},
				},
			},
		},
	},
	build: {
		transpile: ['@vuepic/vue-datepicker'],
	},
});
