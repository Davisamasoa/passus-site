/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				lg: "1280px",
				md: "769px",
				sm: "481px",
			},
			padding: {
				headerPadding: "3rem",
				headerPaddingLG: "13%",
			},
		},
		fontFamily: {
			basic: ["var(--font-basic)", "sans-serif"],
			goudyOldStyle: ["var(--font-goudy-old-style)", "serif"],
		},
	},
	plugins: [],
};
