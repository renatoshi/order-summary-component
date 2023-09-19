/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paleBlue: "hsl(225, 100%, 94%)",
        PaleCustom: "hsl(225, 90%, 98%)",
        brighBlue: "hsl(245, 75%, 52%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        desaturatedBlue: "hsl(224, 23%, 55%)",
        darkBlue: "hsl(223, 47%, 23%)",
        purpleLow: "#8c87ee",
      },
      fontFamily: {
        RedHatDisplay : ['Red Hat Display', 'sans-serif']
      },
    },
  },
  plugins: [],
};
