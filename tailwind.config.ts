import type { Config } from "tailwindcss";

const config: {
	plugins: { handler: () => void }[];
	theme: {
		extend: {
			keyframes: {
				"accordion-up": { from: { height: string }; to: { height: string } };
				"accordion-down": { from: { height: string }; to: { height: string } }
			};
			fontFamily: {
				sans: string[];
				serif: string[];
				mono: string[]
			};
			borderRadius: { md: string; sm: string; lg: string };
			colors: {
				border: string;
				ring: string;
				popover: { foreground: string; DEFAULT: string };
				foreground: string;
				accent: { foreground: string; DEFAULT: string };
				destructive: { foreground: string; DEFAULT: string };
				secondary: { foreground: string; DEFAULT: string };
				input: string;
				background: string;
				muted: { foreground: string; DEFAULT: string };
				chart: { "1": string; "2": string; "3": string; "4": string; "5": string };
				card: { foreground: string; DEFAULT: string };
				primary: { foreground: string; DEFAULT: string }
			};
			height: { grow: string };
			animation: { "accordion-up": string; "accordion-down": string }
		}
	};
	darkMode: string[];
	content: string[]
} = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			height: {
				'grow': '96%',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			fontFamily: {
				sans: ['var(--font-inter)', 'sans-serif'],
				serif: ['var(--font-playfair)', 'serif'],
				mono: ['var(--font-jetbrains)', 'monospace']
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
