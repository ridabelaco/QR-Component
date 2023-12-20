/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlueGray: 'hsl(220, 15%, 55%)',
        customWhite: 'hsl(0, 0%, 100%)',
        customGray: 'hsl(212, 45%, 89%)', 
      },
    },
  },
  plugins: [],
}

