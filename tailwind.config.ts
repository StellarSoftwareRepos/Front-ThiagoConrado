import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(20 48 125)",
        "primary-light": "rgb(30 58 135)",
        "primary-dark": "rgb(15 38 115)",
        secondary: "rgb(255 255 255)",
        accent: "rgb(255 215 0)",
        text: "rgb(17 24 39)",
        "text-light": "rgb(107 114 128)",
        background: "rgb(255 255 255)",
        "background-alt": "rgb(249 250 251)",
      },
    },
  },
  plugins: [],
};

export default config;
