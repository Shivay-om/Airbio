/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1782C5',
      },
      fontFamily: {
        custom: ['satoshi', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
    variants: {
      scrollbar: ['rounded'], // Enable rounded utilities
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

