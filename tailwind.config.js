/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyan-100": "hsl(186, 34%, 60%)",
        "soft-red": "hsl(10, 79%, 65%)",
        "cream-100": "hsl(27, 66%, 92%)",
        "dark-brown": "hsl(25, 47%, 15%)",
        "medium-brown": "hsl(28, 10%, 53%)",
        "very-pal-orange": "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
