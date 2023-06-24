import {type Config} from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#040708',
        lighterdark: '#151717',
        white: '#fefeff',
        gray: '#b4ada2',
        blue: '#0ea5e9',
      },
    },
  },
  plugins: [],
} satisfies Config;
