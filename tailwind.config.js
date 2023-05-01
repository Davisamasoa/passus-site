/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				lg: "1280px",
				md: "769px",
				sm: "481px",
			},
		},
		fontFamily: {
			source_sans_pro: ["Source Sans Pro", "sans-serif"],
			instrument_serif: ["Instrument Serif", "serif"],
		},
	},
	plugins: [],
};
