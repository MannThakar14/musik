/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xxs: "380px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1600px",
    },
    container: {
      center: true,
      screens: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1170px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#ffe6e6",
          200: "#feb4b4",
          300: "#ffa3a3",
          400: "#fc5050",
          500: "#fc5252",
          600: "#fb1d1d",
          700: "#af0303",
          800: "#7d0202",
          900: "#4b0101",
        },
        secondary: {
          100: "#d2ccf8",
          200: "#ab9ff2",
          300: "#8372ec",
          400: "#2FBCA5",
          500: "#381ddb",
          600: "#2c17ae",
          700: "#211181",
          800: "#150b54",
        },
        accent: {
          100: "#F6CCE3",
          200: "#ED9DD1",
          300: "#C963AE",
          400: "#933683",
          500: "#4C0C47",
          600: "#400841",
          700: "#380034",
          800: "#24032C",
          900: "#1A0224",
        },
        grey: {
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#525268",
          700: "#383857",
          800: "#242446",
          900: "#15153A",
        },
        success: {
          100: "#DCFCE7",
          200: "#A0F5A6",
          300: "#6DE381",
          400: "#46C769",
          500: "#16A34A",
          600: "#108C4A",
          700: "#0B7547",
          800: "#075E41",
          900: "#044E3C",
        },
        danger: {
          100: "#FDE1D3",
          200: "#FBBDA8",
          300: "#F4907B",
          400: "#EA6558",
          500: "#DC2626",
          600: "#BD1B29",
          700: "#9E132B",
          800: "#7F0C2A",
          900: "#690729",
        },
        cardColor: {
          100: "#DB841D",
          200: "#C00096",
          300: "#84C4FF",
        },

        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        heroSectionBackground:
          'url("./src/assets/Imgs/01_herosection_background.png")',
        customGradient:
          "linear-gradient(180deg, rgba(56, 29, 219, 0.05) 0%, rgba(56, 29, 219, 0) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
    daisyui: {
    themes: [],
  },
};
