/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // For Next.js 13+ App Router
  ],
  theme: {
    extend: {
      colors: {
        'foreground': '#37474F', // Primary text color
        'background': '#CFD8DC', // Light background
        'input-bg': '#B0BEC5',   // Input field background
        'button-primary': '#546E7A', // Primary button
        'button-secondary': '#90A4AE', // Secondary button
        'accent': '#37474F',     // Hover or highlight color
      },
    },
  },
  plugins: [],
}
