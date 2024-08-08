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
        300: "0.5rem",
        500: "1rem",
        600: "1.25rem",
        700: "1.5rem",
        800: "2rem",
      },
      keyframes: {
        moveText: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(16rem)" },
        },
        moveSection: {
          "0%": { transform: "translateY(100rem)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", display: "none" },
        },
      },
      animation: {
        moveText: "moveText 1s linear forwards",
        moveSection: "moveSection 1s ease-out",
        fadeOut: "fadeOut 1s ease-out forwards",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".flex-center": {
          "@apply flex justify-center items-center": "",
        },
        ".gradient-border": {
          "background-image":
            "linear-gradient(#fff, #fff), linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
          "background-origin": "border-box",
          "background-clip": "padding-box, border-box",
          border: "1px solid transparent",
        },
        ".gradient-text": {
          "background-image":
            "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
          "background-clip": "text",
          color: "transparent",
        },
      });
    },
    ({ addUtilities }) => {
      addUtilities({
        ".text-glow-white": {
          textShadow: "0px 0px 10px #FFF, 0px 0px 20px #FFF, 0px 0px 30px #FFF",
        },
      });
    },
  ],
};
