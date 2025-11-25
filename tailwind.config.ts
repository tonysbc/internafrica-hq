import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // CRITICAL: This points to the 'app' folder at the root
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#004d40", // Deep Teal
          accent: "#ffb300",  // Amber/Gold
          dark: "#1a1a1a",
          light: "#f5f5f5",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;