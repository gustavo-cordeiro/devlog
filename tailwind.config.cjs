/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['User Medium', 'sans-serif'],
			cameo: ['User Medium Cameo', 'sans-serif'],
		},
		extend: {
			colors: {
				white: '#E6E7EC',
				background: '#262729',
				glicth: {
					r: '#E26D3C',
					g: '#C8AD49',
					b: '#5499D7',
				}
			}
		},
	},
	plugins: [],
}
