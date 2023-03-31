/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9f9f9",
        foreground: "#212121",
        neutral: {
          50: "#fafafa",
          100: "#f0f0f0",
          200: "#dedede",
          300: "#cacaca",
          400: "#989898",
          500: "#696969",
          600: "#4b4b4b",
          700: "#383838",
          800: "#212121",
          900: "#181818",
        },
        skyblue: {
          DEFAULT: "#00c9ff",
          50: "#eff9fe",
          100: "#e2f5ff",
          200: "#bdecff",
          300: "#7bdcff",
          400: "#00c9ff",
          500: "#00aee6",
          600: "#008ac1",
          700: "#006d9b",
          800: "#005c80",
          900: "#004c6a",
        },
        mintgreen: {
          DEFAULT: "#92fe9d",
          50: "#f1fdf2",
          100: "#e6ffe9",
          200: "#caffd0",
          300: "#92fe9d",
          400: "#5fe961",
          500: "#48cc36",
          600: "#3ca62a",
          700: "#318129",
          800: "#296528",
          900: "#235225",
        },
        chineseviolet: {
          DEFAULT: "#856084",
          50: "#fafafa",
          100: "#f3f2f3",
          200: "#e5e0e4",
          300: "#d6ced6",
          400: "#af94ae",
          500: "#856084",
          600: "#60475f",
          700: "#473a46",
          800: "#292629",
          900: "#1a171a",
        },
        shadowblue: {
          DEFAULT: "#777da7",
          50: "#fafafa",
          100: "#f9fafb",
          200: "#eeeff4",
          300: "#e1e3ed",
          400: "#abb0ce",
          500: "#777da7",
          600: "#555975",
          700: "#414352",
          800: "#28282d",
          900: "#18181b",
        },
        dishycoral: {
          DEFAULT: "#f49390",
          50: "#fef2f2",
          100: "#f9dcdb",
          200: "#f6bebc",
          300: "#f49390",
          400: "#f55f5b",
          500: "#ee2d29",
          600: "#da0e00",
          700: "#b90c00",
          800: "#99170f",
          900: "#7f1e18",
        },
        charcoal: {
          DEFAULT: "#2e4057",
          50: "#f8fafc",
          100: "#f0f4f8",
          200: "#e0e7ef",
          300: "#c8d4e0",
          400: "#90a2b8",
          500: "#5f738c",
          600: "#42546a",
          700: "#2e4057",
          800: "#1c293c",
          900: "#0e172a",
        },
        altPink: {
          DEFAULT: "#EDA0A8"
        },
        altYellow: {
          DEFAULT: "#fdf2ec"
        }
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      // }
    },
  },
  plugins: [],
}