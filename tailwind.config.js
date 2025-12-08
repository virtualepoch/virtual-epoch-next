/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/vrpunk/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: "#00ffff",
      },
      keyframes: {
        "logo-pulse": {
          "50%": { boxShadow: "0 0 10px 1px #00ffff" },
        },
        "logo-pulse-2": {
          "0%, 100%": { boxShadow: "none" },
          "50%": { boxShadow: "0 0 10px 1px #ff0000" },
        },
      },
      animation: {
        "logo-pulse": "logo-pulse 1.2s ease-in-out infinite",
        "logo-pulse-2": "logo-pulse-2 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
