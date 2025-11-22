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
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        // Dyslexia-friendly font sizes
        'dyslexia-body': ['18px', { lineHeight: '1.8', letterSpacing: '0.15em' }],
        'dyslexia-heading': ['28px', { lineHeight: '1.5', letterSpacing: '0.12em' }],
        'dyslexia-subheading': ['24px', { lineHeight: '1.6', letterSpacing: '0.12em' }],
        'dyslexia-button': ['18px', { lineHeight: '1.5', letterSpacing: '0.1em' }],
      },
      spacing: {
        'touch-target': '56px', // Minimum touch target size
        'touch-spacing': '16px', // Minimum spacing between touch targets
      },
      colors: {
        // Dyslexia-friendly color palette
        'dys-bg': '#F5F5F3', // Soft white background (not pure white)
        'dys-text': '#2B2D31', // Dark gray text (not pure black)
        'dys-heading': '#1A1C1F', // Slightly darker for headings
        'dys-success': '#22C55E', // Success green
        'dys-success-bg': '#F0FDF4', // Success background
        'dys-error': '#EF4444', // Error red
        'dys-error-bg': '#FEF2F2', // Error background
        'dys-primary': '#2563EB', // Primary blue
        'dys-hint': '#6B7280', // Hint gray
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
