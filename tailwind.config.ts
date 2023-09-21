import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout-components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "540px",
        // => @media (min-width: 640px) { ... }

        md: "640px",
        // => @media (min-width: 768px) { ... }

        lg: "880px",
        // => @media (min-width: 1024px) { ... }

        xl: "1100px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1280px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "primary-color": "#000000",
        "secondary-color": "#ffffff",
      },
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "5rem",
      "7xl": "6rem",
      "8xl": "8rem",
    },
    fontFamily: {
      poppins: ["var(--font-poppins)", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
