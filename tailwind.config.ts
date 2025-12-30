// tailwind.config.ts (corrected)
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
  primary: {
    orange: '#f97316',     // vibrant orange for headings/accent
    amber: '#f59e0b',
    brown: '#92400e',
  },
  dark: {
    bg: '#0f172a',         // deep dark blue-black background
    card: '#1e293b',       // slate-800 like for cards
    border: '#334155',
    text: '#e2e8f0',       // slate-200
    muted: '#94a3b8',      // slate-400
  }
},
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class", // You can switch to "media" if you want prefers-color-scheme support
};

export default config;