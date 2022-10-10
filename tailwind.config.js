/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f2ca65",
        
"secondary": "#6443c6",
        
"accent": "#8ef9c2",
        
"neutral": "#171C26",
        
"base-100": "#FFFFFF",
        
"info": "#99C2EA",
        
"success": "#62E498",
        
"warning": "#F1AB5B",
        
"error": "#F95543",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
