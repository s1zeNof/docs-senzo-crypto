/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#05070b',
        surface: {
          DEFAULT: '#0a0d14',
          subtle: '#0f1420',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        cyan: {
          400: '#00f2fe',
          500: '#06b6d4',
        },
        teal: {
          400: '#4facfe',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
