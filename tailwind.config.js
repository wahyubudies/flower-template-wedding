module.exports = {
  content: [
    './public/**/*.{html,js}',
    './resources/**/*.{html,js}',
    './index.html',
    './tailwind.css',
  ],
  theme: {
    extend: {
      colors: {
        'orange-level-1': "#E1A170",
        'orange-level-2': "#F6E0CF",
        'gray-level-1': "#E0E0E0",
        'gray-level-2': "#F3F3F3",

        'flower-green-level-1': '#7F7D5E',
        'flower-green-level-2': '#E1E7D4',
        'flower-green-level-3': '#F6F6EC',
      },
      backgroundImage: {
        'hero-header': "url('../frontend/images/template-01/header.svg')"
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'gwendolyn': ['"Gwendolyn"', 'cursive'],
        'elsie-swash-caps': ['"Elsie Swash Caps"', 'cursive']
      }
    },
  },
  plugins: [],
}
