/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#030014',
          100: '#e4e6ff',
          200: '#aeb4ff',
          300: '#7882ff',
        },
        secondary: {
          DEFAULT: '#0f172a',
          100: '#e2e8f0',
          200: '#94a3b8',
          300: '#475569',
        },
        accent: {
          DEFAULT: '#7c3aed',
          100: '#ede9fe',
          200: '#c4b5fd',
          300: '#a78bfa',
        },
        success: {
          DEFAULT: '#16a34a',
          100: '#dcfce7',
          200: '#86efac',
          300: '#4ade80',
        },
        warning: {
          DEFAULT: '#f59e0b',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
        }
      }
    }
    ,
  },
  plugins: [],
}