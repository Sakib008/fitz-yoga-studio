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
        // Monochrome + Clay Palette
        linen: '#F2F0E9', // Canvas: Raw Linen
        ink: '#1A1A1A',   // Ink: Off-Black
        clay: '#BC4B00',  // Action: Burnt Clay
        grid: '#D1D5DB',  // Accent: Visible Borders (Gray 300)

        // Semantic aliases
        primary: '#BC4B00',
        background: '#F2F0E9',
        foreground: '#1A1A1A',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-body)', 'DM Mono', 'monospace'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
        'massive': '15vw',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tightest': '-0.08em',
      },
      backgroundImage: {
        'none': 'none',
      },
      boxShadow: {
        'none': 'none',
      },
    },
  },
  plugins: [],
};

export default config;
