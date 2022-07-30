/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/components/**/*.{html,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'pr-gray': '#474955', // primary gray color
				'sc-gray': '#5A5C66', // secondary gray color
				'link-green': '#7EBC3C', // green color for active link
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
