/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34CAA5',
        secondary: '#E2A640',
        success: '#66C87B',
        error: '#ED544E',
        warning: '#F4C700',
        darkText: '#26282C',
        surround: '#FAFAFA'
      },
    },
  },
  plugins: [],
}
