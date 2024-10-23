import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				cream: "var(--cream)",
				darkRed: "var(--dark-red)",
				lightRed: "var(--light-red)",
				darkBlue: "var(--dark-blue)",
				lightBlue: "var(--light-blue)",
			},
		},
	},
	plugins: [],
};
export default config;
