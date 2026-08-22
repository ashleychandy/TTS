import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./external_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./portfolioPage/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: {
          "red-dark": "#6e0505",
          "red-medium": "#8a0000",
          "red-brand": "#a80015",
          "red-selected": "#9b000c",
        },
        accent: "#ff6b6b",
        bg: "#fdfdfd",
        "text-dark": "#333333",
        "text-grey": "#999999",
        "text-grey-privacy": "#666666",
      },
      borderRadius: {
        "2.5xl": "10px",
      },
      zIndex: {
        1000: "1000",
      },
      fontSize: {
        3: ["12px", { lineHeight: "1" }],
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        display: ['"Anton"', "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        spin: "spin 1s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
