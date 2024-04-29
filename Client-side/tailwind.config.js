/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#10B981",
      },
      fontFamily: {
        PlusJakarta: ["Plus Jakarta Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateRows: {
        'custom': '50px 170px',
      },
      gridTemplateColumns: {
        'costum': '1fr 1fr 1fr 80px' 
      },    
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#10B981",
          secondary: "#eab308",
          accent: "#00c6a3",
          neutral: "#060406",
          "base-100": "#F5F5F5",
          info: "#6cd5ff",
          success: "#189600",
          warning: "#ee3500",
          error: "#ff6c75",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
