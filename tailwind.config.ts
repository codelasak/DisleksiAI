import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        main: ['Lexend', 'sans-serif'], // JSON name
        display: ['Lexend', 'sans-serif'],
      },
      colors: {
        // Design System Colors
        primary: {
          DEFAULT: '#2463eb',
          dark: '#1d4ed8',
          light: '#eff6ff',
        },
        background: {
          page: '#f6f6f8',
          pageDark: '#111621',
          card: '#ffffff',
        },
        text: {
          primary: '#111318',
          secondary: '#616e89',
          inverted: '#ffffff',
        },
        accent: {
          teal: '#14b8a6',
          yellow: '#f59e0b',
          red: '#ef4444',
        },
        
        // Aliases for backward compatibility with main branch classes
        'bg-light': '#f6f6f8',
        'bg-dark': '#111621',
        'text-main': '#111318',
        'text-sub': '#616e89',
        'custom-teal': '#14b8a6',
        'custom-yellow': '#f59e0b',
        'custom-red': '#ef4444',

        // Dyslexia-friendly color palette (keeping for reference/compatibility if needed)
        'dys-bg': '#F5F5F3',
        'dys-text': '#2B2D31',
        'dys-heading': '#1A1C1F',
        'dys-success': '#22C55E',
        'dys-success-bg': '#F0FDF4',
        'dys-error': '#EF4444',
        'dys-error-bg': '#FEF2F2',
        'dys-primary': '#2563EB',
        'dys-hint': '#6B7280',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'primary-glow': '0 10px 15px -3px rgba(36, 99, 235, 0.2)',
      },
      spacing: {
        'touch-target': '56px',
        'touch-spacing': '16px',
      },
      transitionProperty: {
        DEFAULT: 'all',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      animation: {
        'scale-in': 'scaleIn 300ms ease-out',
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
