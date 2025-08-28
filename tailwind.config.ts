/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "task-red": "#E25858",
        "task-orange": "#E28858",
        "task-yellow": "#E2D058",
        "task-green": "#58E280",
        "task-lightblue": "#58C4E2",
        "task-blue": "#5885E2",
        "task-purple": "#8858E2",
        "task-pink": "#E258B2",
        "task-brown": "#A05A31",
        blueText: "#4EA8DE",
        cardBackground: "#262626",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
