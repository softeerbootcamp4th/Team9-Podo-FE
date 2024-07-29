/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F1F1F1",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#454545",
          900: "#3D3D3D",
          950: "#181818",
        },
        primary: "#FCFF56",
        secondary: "#454545",
        tertiary: "#FF5C5C",
      },
      fontFamily: {
        "kia-signature": ["Kia Signature", "sans-serif"],
      },
      fontSize: {
        "title-1": ["32px", "140%"],
        "title-2": ["32px", "140%"],
        "title-3": ["24px", "140%"],
        "title-4": ["20px", "140%"],
        "body-1-bold": ["16px", "140%"],
        "body-2-bold": ["14px", "140%"],
        "body-1-regular": ["16px", "140%"],
        "body-2-regular": ["14px", "140%"],
      },
      fontWeight: {
        bold: 700,
        regular: 400,
      },
    },
  },
  plugins: [],
};
