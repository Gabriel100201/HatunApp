/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#811a39',
          '50': '#fef2f3',
          '100': '#fde6e7',
          '200': '#fbd0d5',
          '300': '#f8a9b2',
          '400': '#f3798a',
          '500': '#e94a64',
          '600': '#d5294e',
          '700': '#b41c40',
          '800': '#971a3c',
          '900': '#811a39',
          '950': '#48091b',
        },

      }
    },
  },
  plugins: [nextui()],
}