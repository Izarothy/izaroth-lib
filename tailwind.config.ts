import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'dark': '#040708',
      'white': '#fefeff',
      'gray': '#b4ada2',
      'blue': '#0ea5e9'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
