/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'dist/js/*.js'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0b',
        paper: '#f4f2ec',
        paper2: '#eceae3',
        lime: '#c4f04d',
        pink: '#ff7d9f',
        violet: '#6f4bff',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Impact', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        brutal: '4px 4px 0 0 #0b0b0b',
        'brutal-sm': '3px 3px 0 0 #0b0b0b',
        'brutal-xs': '2px 2px 0 0 #0b0b0b',
        'brutal-lg': '10px 10px 0 0 #0b0b0b',
      },
    },
  },
  plugins: [],
};
