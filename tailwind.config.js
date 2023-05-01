/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        SpaceGrotesk:['Space Grotesk', 'sans-serif'],
        SpaceMono: ['Space Mono', 'monospace']
      },
      backgroundImage: {
        'banner-bg': "url('./assets/img/bg-img.png')",
      },
    },
  },
  plugins: [],
}

