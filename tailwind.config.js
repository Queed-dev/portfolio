const {heroui} = require('@heroui/theme');
// const {heroui} = require("@heroui/theme");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [heroui()],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./svg/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|chip|divider).js"
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: "#fb5400", //'hsl(var(--primary))',
  				// foreground: "#fb5400"
  			},
  		}
  	}
  },
  darkMode: ["class", 'class'],
}

function addVariablesForColors({ addBase, theme}) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
