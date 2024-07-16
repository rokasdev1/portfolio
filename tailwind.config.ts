import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        'strong-w': '0 1px 10px rgba(255, 255, 255, 1)',
        'strong-b': '0 1px 5px rgba(0, 0, 0, 0.75)',
        
      },
      boxShadow: {
        'bg': '0 35px 50px 50px rgba(0, 0, 0, 1)',
        'bg-inner': 'inset 0 1px 50px 20px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [],
};
export default config;
