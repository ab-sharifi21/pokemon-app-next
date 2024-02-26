import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBgColor: '#272727',
        secondaryBgColor: '#3A3A3A',
        btnColor: '#F27B35',
      },
      boxShadow: {
        mainBoxShadow: '5px 5px 5px 0px rgba(0,0,0,0.75)',
      },
      dropShadow: {
        mainDropShadow: '3px 0px 5px rgba(244, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
