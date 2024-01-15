import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#c8c8c8', 600: '#6b6b6b', 900: '#323232', 950: '#242424' };
const gray = { 100: '#f5f6f8', 200: '#eceef1', 300: '#c0c2c5', 400: '#888b92', 500: '#55585e', 700: '#36383e', 800: '#24272c', 900: '#17181b' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};