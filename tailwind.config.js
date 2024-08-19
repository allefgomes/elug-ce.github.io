/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    extend: {
     colors: {
        'elixir' : {
          DEFAULT: '#6E4C6C',
          light: '#8F6D8D',
          lighter: '#B08EAE',
          lightest: '#D1B0CF',
          dark: '#4D3B4B',
          darker: '#2C222A',
          darkest: '#0B0909',
        },
        'muted-green': '#4C6E4E',
        'muted-red': '#6E4C4C',
        'muted-blue': '#4C4C6E',
        'neutral': {
          light: '#F0F0F0',
          medium: '#C0C0C0',
          dark: '#404040',
        },
      },    },
  },
  plugins: [],
}
