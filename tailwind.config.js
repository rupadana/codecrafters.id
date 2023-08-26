/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#00C6FF',
        'hard-blue': '#0072FF',
        'dark-blue': '#2E2F47',
        'primary-gradient': 'linear-gradient(90deg, #00C6FF 0%, #0072FF 100%)'
      },
      backgroundImage: (theme) => ({
        'nav-pattern': "url('/assets/images/nav-background.png')"
      })
    }
  },
  plugins: []
};
