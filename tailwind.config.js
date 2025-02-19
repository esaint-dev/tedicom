  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/app.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        backgroundImage: {
          scraper: "url('/scraper-BG.svg')",
          hero: "url('/scraper-BG.svg')"
        }
      },
    },
    plugins: [],
  }