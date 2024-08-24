/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'kings-caslon': ['"Kings Caslon Trial"', 'serif'], // Adding your custom font
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '20px'],
        lg: ['18px', '22px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [],
}

