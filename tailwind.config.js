/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        card: "#FFFFFF",
        textPrimary: "#1E293B",
        textMuted: "#64748B" //Subtitles & Descriptions
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0D9488",
          secondary: "#115E59",
          accent: "#F97316",
          neutral: "#1E293B", //TEXT, BORDERS
          "base-100": "#F8FAFC", //MAIN BG
          "base-200": "#FFFFFF", // CARD BG
          "base-content": "#1E293B", //TEXT PRIMARY

        },
      },

    ],
  },
}

