import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8501C',
          dark: '#c94315',
        },
        secondary: {
          DEFAULT: '#6B1524',
        },
        dark: {
          DEFAULT: '#0A0A0A',
        },
        light: {
          DEFAULT: '#FBF9F6',
          orange: '#FFF5F0',
          beige: '#FFF1E6',
          "beige-dark": '#FFE4D6',
        },
        accent: {
          green: '#34E0A1',
          blue: '#4285F4',
          yellow: '#FBBC05',
        },
        border: {
          light: '#EBE5DF',
          lighter: '#F2EAE1',
          "orange-light": '#FFEAE0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      maxWidth: {
        '360': '90rem', // 1440px
      },
      spacing: {
        '13.75': '3.4375rem', // 55px
        '17.5': '4.375rem', // 70px
        '26.5': '6.625rem', // 106px
        '75': '18.75rem', // 300px
        '95': '23.75rem', // 380px
        '100': '25rem', // 400px
        '105': '26.25rem', // 420px
        '150': '37.5rem', // 600px
        '200': '50rem', // 800px
      },
      letterSpacing: {
        'widest-extra': '0.2em',
        'widest-extreme': '0.3em',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};

export default config;
