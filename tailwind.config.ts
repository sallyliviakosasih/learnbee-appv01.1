import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'primary-yellow': '#FEDE3E',
      'text-color': '#3c3c3c',
      'mid-muted': '#F8F8F8',
      'dark-muted': '#B9B9B9',
      'darker-muted': '#6F6F6F',
      'contrast': '#5D3737',
      'warning-red': '#FF4646',
      'black': 'black',
      'white': 'white',
      'grey': '#ECEEF7',
      'muted-grey': '#637C8A',
      'transparent': 'transparent',
    }
  },
  plugins: [],
}
export default config
