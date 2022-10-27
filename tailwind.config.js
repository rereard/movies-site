/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity:0 },
          '100%': { opacity:1 }
        },
      },
      animation: {
        fade: 'fade 200ms ease-out',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin.js')
  ],
}
