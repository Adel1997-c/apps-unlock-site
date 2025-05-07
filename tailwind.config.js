/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/styles/tailwind.css", // include your custom utility file
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Rubik", "sans-serif"],
        },
        colors: {
          background: "#0d0d0d",
          accent: "#9b59b6", // Neon purple
        },
        dropShadow: {
          glow: "0 0 12px rgba(155,89,182,0.6)",
        },
        scale: {
          '102': '1.02',
          '103': '1.03',
          '105': '1.05',
        },
      },
    },
    plugins: [],
  };
  