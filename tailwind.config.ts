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
        primary: {
          DEFAULT: '#046BD2',
          dark: '#035299',
          light: '#1E7FE0',
        },
        accent: {
          DEFAULT: '#F2AD2C',
          dark: '#D99520',
          light: '#F4BC4F',
        },
        dark: {
          DEFAULT: '#111827',
          light: '#1F2937',
          lighter: '#374151',
        },
        gray: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          lighter: '#D1D5DB',
          lightest: '#F3F4F6',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
