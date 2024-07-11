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
        "theme-background": "var(--background)",
        "theme-primary-dark": "var(--primary-dark)",
        "theme-primary-normal": "var(--primary-normal)",
        "theme-primary-light": "var(--primary-light)"
      },
    },
  },
  plugins: [],
};
export default config;
