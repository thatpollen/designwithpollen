import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1920px" },
      // => @media (max-width: 1920px) { ... }

      xl: { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      lg: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      md: { max: "991px" },
      // => @media (max-width: 991px) { ... }

      sm: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      xs: { max: "475px" },
      // => @media (max-width: 475px) { ... }
    },
    
   colors: {
      midGray: "var(--color-mid-gray)",
      silver: "var(--silver)",
      orangeRed: "var(--color-orange-red)",
      darkBlue: "var(--color-dark-blue)",
      darkGray: "var(--color-dark-gray)",
      mediumSlateBlue: "var(--color-medium-slate-blue)",
      orange: "var(--color-orange)",
      gray: "var(--color-gray)",
      black: "var(--color-black)",
      dark: "var(--color-dark)",
      charcoal: "var(--color-charcoal)",
      limeGreen: "var(--color-lime-green)",
      DarkLimeGreen: "var(--color-dark-lime-green)",
      white: "var(--color-white)",
   },
   
   fontSize: {
      xs: ["0.75rem", "1rem"],
      // 12px 16px

      "extra-sm": ["0.815rem", "1.15rem"],
      // 13.04px 18.4px
      
      sm: ["0.875rem", "1.25rem"],
      // 14px 20px

      base: ["1rem", "1.5rem"],
      // 16px 24px

      lg: ["1.125rem", "1.75rem"],
      // 18px 28px

      xl: ["1.25rem", "1.75rem"],
      // 20px 28px

      h6: ["1.5rem", "2rem"],
      // 24px 32px

      h5: ["1.75rem", "2.25rem"],
      // 28px 36px

      h4: ["3rem", "1.1"],
      // 48px 1.1

      h2: ["3.5rem", "1.1"],
      // 56px 1.1
   }
  },
  plugins: [],
};
export default config;
