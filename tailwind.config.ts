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
        base: "#1C1614",
        primary: "#3D2C2B",
        secondary: "#534C42",
        accent: "#3E3D2B",
        highlight: "#6C6B4B",
        /** Using Grayscale when creating layout (thxx John1114) */
        dev_base: "#222222",
        dev_primary: "#CCCCCC",
        dev_secondary: "#444444",
        dev_accent: "#666666",
        dev_highlight: "#444444",
      },
    },
  },
  plugins: [],
};
export default config;

/**
 * Colorful Palette for when you forget:
 *
 *  - base: the darkest color brown sorta
 *  - primary: salmon pinkish like a grandma cardigan
 *  - secondary: lighter and pinker ^
 *  - accent: Mike G
 *  - highlight: lightskin Mike G
 */
