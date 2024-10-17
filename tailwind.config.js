/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1300px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      'hero-gradient': "linear-gradient(90.39deg, rgba(0, 0, 0, 0.71) 0.18%, rgba(102, 102, 102, 0.5) 61.72%)",
      'hero-bg': "url('/src/images/banner.webp')",
    }, 
  },
},
  plugins: [],
}

