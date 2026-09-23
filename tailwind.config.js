/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          bg: "#ffffff",
          subtle: "#f8fafc",
          muted: "#f1f5f9",
          border: "#e2e8f0",
          borderDark: "#090d16",
        },
        ink: {
          primary: "#090d16",
          secondary: "#334155",
          muted: "#64748b",
          subtle: "#94a3b8",
        },
        logo: {
          navy: "#16222f",
          steel: "#1e3a5f",
          accent: "#2563eb",
          light: "#e2e8f0",
        },
      },
      fontFamily: {
        figtree: ['"Figtree"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Figtree"', '"Inter"', 'sans-serif'],
        display: ['"Figtree"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
