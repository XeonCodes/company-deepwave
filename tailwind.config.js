import { nextui } from "@nextui-org/theme";
import { siteConfig } from "./config/site";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            radGrey: "#868685",
            primary: siteConfig.appColors.primaryColor,
            background: "#F2F3F4",
            card: "white",
          },
        },
        dark: {
          colors: {
            radGrey: "#868685",
            primary: siteConfig.appColors.primaryColor,
            card: "#28282B",
          },
        },
      },
    }),
  ],
};
