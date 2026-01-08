/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'education-navy': '#1e3a8a',
        'education-slate': '#475569',
        'education-light-slate': '#64748b',
      },
    },
  },
  plugins: [],
}
