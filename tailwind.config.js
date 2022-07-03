// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        'primary':'#027C99',
        'secondary':'#F6F6F6',
        'accent':'#D3D5CE',
        'base':'#014960',
      },
      fontFamily: {
        'sans': ['StagSansBook', 'Helvetica', 'Arial', 'sans-serif'],
        'sansthin': ['StagSansThin', 'Helvetica', 'Arial', 'sans-serif'],
        'sansbold': ['StagSansBold', 'Helvetica', 'Arial', 'sans-serif'],

      },
      rotate: {
        '120': '120deg',
        '270': '270deg',
        '252': '252deg',
      },
      content: {
        'link': 'url("src/assets/quotes-right.svg.svg")',
      },
     
    },
  },
  plugins: [],
}
