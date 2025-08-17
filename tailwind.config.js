/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // pick up all your React files
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}" // also include storybook
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
