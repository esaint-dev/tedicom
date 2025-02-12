  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/app.{js,jsx,ts,tsx}",
  ],
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1400px',
      },
      extend: {
        backgroundImage: {
          scraper: "url('/scraper-BG.svg')",
          hero: "url('/scraper-BG.svg')"
        }
      },
    },
    plugins: [],
  }