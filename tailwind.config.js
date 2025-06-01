/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./**/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        dark:"#0C0F14",
        orange:"#DC3535",
        yellow:"#D17842",
        gray:{
          two:"#252A32",
          five:"#52555A"
        },
        white:{
          deep:"#AEAEAE",
          light:"#FFFFFF"
        }
      }
    },
  },
  plugins: [],
}

