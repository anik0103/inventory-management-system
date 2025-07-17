/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        primary: {
          light: '#A084DC',
          DEFAULT: '#6C5DD3',
        },
        neutral: {
          background: '#F5F6FA',
          card: '#FFFFFF',
          text: '#2F2F44',
          secondaryText: '#9E9EBA',
        },
      },
    },
  },
  plugins: [],
}

