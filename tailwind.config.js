/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        amber: '#C8873A',
        'amber-light': '#E5A355',
        'amber-pale': '#F5E6D3',
        stone: '#F8F6F3',
        mist: '#F2EFE9',
        smoke: '#6B6560',
        ash: '#9E9890',
        white: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-sm': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'headline': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '72rem',
        'narrow': '48rem',
        'wide': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
