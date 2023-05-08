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
        'projetcs-bg': "url('./assets/img/projetcs-bg.png')"
      },
      background: {
        'dark-galaxy': "linear-gradient(to bottom, #05022F, #100E3C, #23214B, #3D3262, #5B487B)"
      },
      screens:{
        'l': '816px',
        'sm': '100px'

        
      }
    },
  },
  plugins: [],
}

