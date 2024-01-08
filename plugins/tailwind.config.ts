import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				...defaultTheme.colors,
				primary: {
					'100': '#fef3c7',
					'200': '#fde68a',
					'300': '#fcd34d',
					'400': '#fbbf24',
					'500': '#f59e0b',
					'600': '#d97706',
					'700': '#b45309',
					'800': '#92400e',
					'900': '#78350f',
				},
				secondPrimary: '#0B8E52',
				info: {
					'100': '#dbeafe',
					'200': '#bfdbfe',
					'300': '#93c5fd',
					'400': '#60a5fa',
					'500': '#3b82f6',
					'600': '#2563eb',
					'700': '#1d4ed8',
					'800': '#1e40af',
					'900': '#1e3a8a',
				},
				infoLight: '#EBF7FF',
				green: {
					'500': '#22C55E',

					'700': '#404F65',
					'800': '#197D3E',
				},
				gray: {
					'100': '#EEF0F3',
					'200': '#D5DAE1',
					'300': '#BBC3CF',
					'400': '#8896AB',
					'500': '#556987',
					'600': '#4D5F7A',
					'700': '#404F65',
					'800': '#333F51',
					'900': '#2A3342',
				},
			},
		},
	},
};
