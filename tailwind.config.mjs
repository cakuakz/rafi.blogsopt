/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx,md}',
    	'./public/**/*.html',
	],
	theme: {
	  extend: {
		dropShadow: {
			'custom-input': '0px 0px 10px rgba(38, 38, 38, 0.4)',
		},
		backgroundImage: {
			'custom-white-gradient': 'linear-gradient(to bottom, white 0%, white 40%, white 40%, white 40%, white 90%)',
		},
	  },
	},
	plugins: [],
  };