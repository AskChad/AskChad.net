import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a3a5c",
          50: "#e6f0f7",
          100: "#cce1ef",
          200: "#99c3df",
          300: "#66a5cf",
          400: "#3387bf",
          500: "#0a3a5c",
          600: "#083049",
          700: "#062637",
          800: "#041c25",
        },
        secondary: {
          DEFAULT: "#333333",
        },
        accent: {
          DEFAULT: "#fcfcfc",
        },
        background: {
          1: "#fcfcfd",
          2: "#f9fafb",
          3: "#f4f5f8",
          4: "#f0f2f6",
          5: "#13171e",
          6: "#0f1217",
          7: "#181d26",
          8: "#070b10",
          9: "#1f252f",
          10: "#ebebeb",
          11: "#b5b5b9",
          12: "#eaeceb",
        },
        stroke: {
          1: "#dfe4eb",
          2: "#e3e7ed",
          3: "#d7dde5",
          4: "#eceff4",
          5: "#1b232f",
          6: "#202731",
          7: "#2a333e",
          8: "#303b49",
          9: "#070b10",
        },
      },
      fontFamily: {
        'inter-tight': ['"Inter Tight"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
