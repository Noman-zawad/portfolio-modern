import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#64379F",
        secondary: "#9755CC",
        accent: "#280F4E",
        background: "#DEABF4",
      },
    },
  },
  plugins: [],
};
export default config;
