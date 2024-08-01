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
        "kia-signature": ["Kia-Signature-Regular", "sans-serif"],
        "kia-signature-bold": ["Kia-Signature-Bold", "sans-serif"],
        "kia-signature-light": ["Kia-Signature-Light", "sans-serif"],
      },
      fontSize: {
        "title-2": ["2rem", "140%"],
        "title-1": ["2rem", "140%"],
        "title-3": ["1.5rem", "140%"],
        "title-4": ["1.25rem", "140%"],
        "body-1-bold": ["1rem", "140%"],
        "body-2-bold": ["0.875rem", "140%"],
        "body-1-regular": ["1rem", "140%"],
        "body-2-regular": ["0.875rem", "140%"],
      },
      fontWeight: {
        bold: 700,
        regular: 400,
      },
      spacing: {
        500: "1rem",
        700: "1.5rem",
        800: "2rem",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".flex-center": {
          "@apply flex justify-center items-center": "",
        },
      });
    },
  ],
};
