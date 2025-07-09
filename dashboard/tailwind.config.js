/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    colors: {
      sprout: {
        DEFAULT: '#22c55e',
        light: '#bbf7d0',
        dark: '#065f46',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  },
  plugins: [require("tailwindcss-animate")],
}

