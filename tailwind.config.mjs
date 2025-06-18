/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C9A96E',
          light: '#E6C78A',
          dark: '#8B7355',
        },
        secondary: {
          DEFAULT: '#95A5A6',
          light: '#BDC3C7',
          dark: '#7F8C8D',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          light: '#2C2C2C',
          lighter: '#3A3A3A',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
