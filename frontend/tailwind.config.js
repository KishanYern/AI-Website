/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mate: ["Mate", "sans-serif"],
        signature: ['Pacifico'],
        roboto: ['Roboto'],
        projects: ['monospace'],
        custom: ['Lato'],
      }
    },
  },
  plugins: [],
}

