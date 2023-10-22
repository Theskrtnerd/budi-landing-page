/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		},
		extend: {
			colors: {
				pri: {
				  100: '#7423ae',
				  80: '#ae56f6',
				  60: '#ead5ff',
				},
				sec: {
					100: '#f2ca45',
					80: '#f7e290',
					60: '#fbf1ca',
				}
			},
			fontFamily: {
				'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
