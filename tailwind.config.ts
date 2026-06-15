import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#00AEEF",
        accent: "#00FFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #0A192F, #00AEEF, #00FFFF)",
        "gradient-secondary": "linear-gradient(to bottom, #0A192F, #111827)",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 255, 255, 0.5)",
        "glow-blue": "0 0 20px rgba(0, 174, 239, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
