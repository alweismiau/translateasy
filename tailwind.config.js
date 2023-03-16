/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./node_modules/flowbite.{js,ts}",
],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  variants:{
    extend:{
      scale:["active"],
    },
  },
  plugins: [require('flowbite', 'tailwind-scrollbar-hide')],
}
