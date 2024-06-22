import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#161616",
        secondaryColor: "#f57d05",
        darkText: "#737373",
        borderColor: "#333333",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "425px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
      backgroundImage: {
        bgOne: "url('/assets/bgOne.webp')",
        bgTwo: "url('/assets/bgTwo.webp')",
        bgThree: "url('/assets/bgThree.webp')",
        "reactBd-highPerformanceBg": "url('/assets/highPerformanceBg.webp')",
        "reactBd-titleBg": "url('/public/assets/titleBg.webp')",
      },
      animation: {
        "spin-slow": "spin 1s linear",
      },
      boxShadow: {
        customShadowOne: "0px 0px 15px 1px rgba(0,0,0,0.88);",
      },
    },
  },
  plugins: [],
};
export default config;
