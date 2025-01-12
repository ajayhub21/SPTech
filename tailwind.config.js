/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        slideIn: "slideIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        customText: "#00576A",
        Textcolor: "#A6A6A6", // Custom text color
      },
      margin: {
        273: "273px", // Custom margin value
      },
      height: {
        26: "26rem", // Custom height value
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(220.55deg, #5EE2FF 0%, #00576A 100%)",
        "custom-navbar": "linear-gradient(220.55deg, #78B3CE 0%, #C9E6F0 100%)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        poppins: ["Poppins"], // Set Roboto as the default sans-serif font
      },
    },
  },
  plugins: [],
};
