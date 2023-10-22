/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
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
			backgroundImage: {
				"hero-pattern": "url('/src/assets/herobg.png')",
			  },
		},
	},
	plugins: [],
}
