/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customText: "#00576A",
        Textcolor: "#A6A6A6", // Add your custom text color
      },
      margin: {
        273: "273px", // Add custom margin value
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
        sans: ["Roboto", "sans-serif"], // Set Roboto as the default sans-serif font
      },
    },
  },
  plugins: [],
};
